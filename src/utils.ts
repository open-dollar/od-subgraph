import { Vault } from "../generated/schema";
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts";
import { odSafeManager } from "../generated/odSafeManager/odSafeManager";

const odsafeManagerAddress = "0x7f7fA6e3f2E0b0f4b4bDf7f9f2fBb2f3f3f3f3f3";
export const getOrCreateVault = (vaultId: string): Vault => {
  let vault = Vault.load(vaultId);

  if (vault == null) {
    vault = new Vault(vaultId);

    vault.collateral = BigInt.fromI32(0);
    vault.debt = BigInt.fromI32(0);
  }

  return vault;
};

const parseCollateralType = (collateralType: string): Bytes => {
  // Substitute for ethers.parseBytes32String()
  const collateralTypeMap = new Map<string, string>();
  collateralTypeMap.set(
    "0x4152420000000000000000000000000000000000000000000000000000000000",
    "ARB"
  );
  collateralTypeMap.set(
    "0x5753544554480000000000000000000000000000000000000000000000000000",
    "WSTETH"
  );
  collateralTypeMap.set(
    "0x5245544800000000000000000000000000000000000000000000000000000000",
    "RETH"
  );

  let collateralTypeString: string;

  collateralTypeString = collateralTypeMap.has(collateralType)
    ? collateralTypeMap.get(collateralType)
    : collateralType;

  return Bytes.fromHexString(collateralTypeString);
};

class SAFEData {
  nonce: BigInt;
  owner: Address;
  safeHandler: Address;
  collateralType: Bytes;
}

export const getVaultDetails = (vaultId: string): SAFEData => {
  let manager = odSafeManager.bind(Address.fromString(odsafeManagerAddress));
  let safeData = manager.safeData(BigInt.fromI64(<i64>parseInt(vaultId)));
  return {
    nonce: safeData.nonce,
    owner: safeData.owner,
    safeHandler: safeData.safeHandler,
    collateralType: parseCollateralType(safeData.collateralType.toHexString()),
  };
};
