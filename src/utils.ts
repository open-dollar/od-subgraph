import { Vault } from "../generated/schema";
import { BigInt, Address } from "@graphprotocol/graph-ts";
import { odSafeManager } from "../generated/odSafeManager/odSafeManager";

const odsafeManagerAddress = "0x8646CBd915eAAD1a4E2Ba5e2b67Acec4957d5f1a";

const isGenesis = (vaultId: string): boolean => {
  const genesisList = [
    1,
    2,
    6,
    11,
    12,
    13,
    14,
    18,
    21,
    24,
    26,
    28,
    29,
    30,
    31,
    35,
    36,
    37,
    38,
    40,
  ];
  return genesisList.includes(<i32>parseInt(vaultId)) as boolean;
};

const parseCollateralType = (collateralType: string): string => {
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

  return collateralTypeString;
};

class SAFEData {
  nonce: BigInt;
  owner: Address;
  safeHandler: Address;
  collateralType: string;
  genesis: boolean;
}

const getVaultDetails = (vaultId: string): SAFEData => {
  let manager = odSafeManager.bind(Address.fromString(odsafeManagerAddress));
  let safeData = manager.safeData(BigInt.fromI64(<i64>parseInt(vaultId)));
  return {
    nonce: safeData.nonce,
    owner: safeData.owner,
    safeHandler: safeData.safeHandler,
    collateralType: parseCollateralType(safeData.collateralType.toHexString()),
    genesis: isGenesis(vaultId),
  };
};

export const getOrCreateVault = (vaultId: string): Vault => {
  let vault = Vault.load(vaultId);

  if (vault == null) {
    vault = new Vault(vaultId);

    let vaultDetails = getVaultDetails(vaultId);
    vault.collateralType = vaultDetails.collateralType;
    vault.saviour = Address.fromString(
      "0x0000000000000000000000000000000000000000"
    );
    vault.owner = Address.fromString(
      "0x0000000000000000000000000000000000000000"
    );
    vault.collateral = BigInt.fromI32(0);
    vault.debt = BigInt.fromI32(0);
    vault.genesis = vaultDetails.genesis;
  }

  return vault;
};
