// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MDCCreated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MDCCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type MDCCreated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MDCCreated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): MDCCreated | null {
    return changetype<MDCCreated | null>(
      store.get_in_block("MDCCreated", id.toHexString())
    );
  }

  static load(id: Bytes): MDCCreated | null {
    return changetype<MDCCreated | null>(
      store.get("MDCCreated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get maker(): Bytes {
    let value = this.get("maker");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set maker(value: Bytes) {
    this.set("maker", Value.fromBytes(value));
  }

  get mdc(): Bytes {
    let value = this.get("mdc");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set mdc(value: Bytes) {
    this.set("mdc", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }
}

export class ColumnArrayUpdated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ColumnArrayUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ColumnArrayUpdated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ColumnArrayUpdated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): ColumnArrayUpdated | null {
    return changetype<ColumnArrayUpdated | null>(
      store.get_in_block("ColumnArrayUpdated", id.toHexString())
    );
  }

  static load(id: Bytes): ColumnArrayUpdated | null {
    return changetype<ColumnArrayUpdated | null>(
      store.get("ColumnArrayUpdated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get impl(): Bytes {
    let value = this.get("impl");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set impl(value: Bytes) {
    this.set("impl", Value.fromBytes(value));
  }

  get columnArrayHash(): Bytes {
    let value = this.get("columnArrayHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set columnArrayHash(value: Bytes) {
    this.set("columnArrayHash", Value.fromBytes(value));
  }

  get dealers(): Array<Bytes> | null {
    let value = this.get("dealers");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set dealers(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("dealers");
    } else {
      this.set("dealers", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get ebcs(): Array<Bytes> | null {
    let value = this.get("ebcs");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set ebcs(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("ebcs");
    } else {
      this.set("ebcs", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get chainIds(): Array<i32> | null {
    let value = this.get("chainIds");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toI32Array();
    }
  }

  set chainIds(value: Array<i32> | null) {
    if (!value) {
      this.unset("chainIds");
    } else {
      this.set("chainIds", Value.fromI32Array(<Array<i32>>value));
    }
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class ResponseMakersUpdated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save ResponseMakersUpdated entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ResponseMakersUpdated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ResponseMakersUpdated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): ResponseMakersUpdated | null {
    return changetype<ResponseMakersUpdated | null>(
      store.get_in_block("ResponseMakersUpdated", id.toHexString())
    );
  }

  static load(id: Bytes): ResponseMakersUpdated | null {
    return changetype<ResponseMakersUpdated | null>(
      store.get("ResponseMakersUpdated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get impl(): Bytes {
    let value = this.get("impl");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set impl(value: Bytes) {
    this.set("impl", Value.fromBytes(value));
  }

  get responseMakers(): Array<Bytes> | null {
    let value = this.get("responseMakers");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set responseMakers(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("responseMakers");
    } else {
      this.set("responseMakers", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class RulesRootUpdated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RulesRootUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type RulesRootUpdated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RulesRootUpdated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): RulesRootUpdated | null {
    return changetype<RulesRootUpdated | null>(
      store.get_in_block("RulesRootUpdated", id.toHexString())
    );
  }

  static load(id: Bytes): RulesRootUpdated | null {
    return changetype<RulesRootUpdated | null>(
      store.get("RulesRootUpdated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get impl(): Bytes {
    let value = this.get("impl");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set impl(value: Bytes) {
    this.set("impl", Value.fromBytes(value));
  }

  get ebc(): Bytes {
    let value = this.get("ebc");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set ebc(value: Bytes) {
    this.set("ebc", Value.fromBytes(value));
  }

  get rootWithVersion_root(): Bytes {
    let value = this.get("rootWithVersion_root");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set rootWithVersion_root(value: Bytes) {
    this.set("rootWithVersion_root", Value.fromBytes(value));
  }

  get rootWithVersion_version(): BigInt {
    let value = this.get("rootWithVersion_version");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set rootWithVersion_version(value: BigInt) {
    this.set("rootWithVersion_version", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get input(): Bytes {
    let value = this.get("input");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set input(value: Bytes) {
    this.set("input", Value.fromBytes(value));
  }
}

export class SpvUpdated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SpvUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type SpvUpdated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SpvUpdated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): SpvUpdated | null {
    return changetype<SpvUpdated | null>(
      store.get_in_block("SpvUpdated", id.toHexString())
    );
  }

  static load(id: Bytes): SpvUpdated | null {
    return changetype<SpvUpdated | null>(
      store.get("SpvUpdated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get impl(): Bytes {
    let value = this.get("impl");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set impl(value: Bytes) {
    this.set("impl", Value.fromBytes(value));
  }

  get chainId(): i32 {
    let value = this.get("chainId");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set chainId(value: i32) {
    this.set("chainId", Value.fromI32(value));
  }

  get spv(): Bytes {
    let value = this.get("spv");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set spv(value: Bytes) {
    this.set("spv", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class MDC extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MDC entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MDC must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MDC", id.toString(), this);
    }
  }

  static loadInBlock(id: string): MDC | null {
    return changetype<MDC | null>(store.get_in_block("MDC", id));
  }

  static load(id: string): MDC | null {
    return changetype<MDC | null>(store.get("MDC", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get columnArrayHash(): Bytes {
    let value = this.get("columnArrayHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set columnArrayHash(value: Bytes) {
    this.set("columnArrayHash", Value.fromBytes(value));
  }

  get responseMakers(): Array<Bytes> | null {
    let value = this.get("responseMakers");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set responseMakers(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("responseMakers");
    } else {
      this.set("responseMakers", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get rootWithVersion(): Bytes {
    let value = this.get("rootWithVersion");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set rootWithVersion(value: Bytes) {
    this.set("rootWithVersion", Value.fromBytes(value));
  }

  get spvs(): Array<Bytes> | null {
    let value = this.get("spvs");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set spvs(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("spvs");
    } else {
      this.set("spvs", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get chainIds(): Array<i32> | null {
    let value = this.get("chainIds");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toI32Array();
    }
  }

  set chainIds(value: Array<i32> | null) {
    if (!value) {
      this.unset("chainIds");
    } else {
      this.set("chainIds", Value.fromI32Array(<Array<i32>>value));
    }
  }

  get dealers(): Array<Bytes> | null {
    let value = this.get("dealers");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set dealers(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("dealers");
    } else {
      this.set("dealers", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get ebc(): string {
    let value = this.get("ebc");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set ebc(value: string) {
    this.set("ebc", Value.fromString(value));
  }

  get createblockNumber(): BigInt {
    let value = this.get("createblockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createblockNumber(value: BigInt) {
    this.set("createblockNumber", Value.fromBigInt(value));
  }

  get createblockTimestamp(): BigInt {
    let value = this.get("createblockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createblockTimestamp(value: BigInt) {
    this.set("createblockTimestamp", Value.fromBigInt(value));
  }

  get createtransactionHash(): Bytes {
    let value = this.get("createtransactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set createtransactionHash(value: Bytes) {
    this.set("createtransactionHash", Value.fromBytes(value));
  }
}

export class EBC extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EBC entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EBC must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EBC", id.toString(), this);
    }
  }

  static loadInBlock(id: string): EBC | null {
    return changetype<EBC | null>(store.get_in_block("EBC", id));
  }

  static load(id: string): EBC | null {
    return changetype<EBC | null>(store.get("EBC", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rule(): string {
    let value = this.get("rule");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set rule(value: string) {
    this.set("rule", Value.fromString(value));
  }

  get mdc(): MDCLoader {
    return new MDCLoader("EBC", this.get("id")!.toString(), "mdc");
  }
}

export class ruleTypes extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ruleTypes entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ruleTypes must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ruleTypes", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ruleTypes | null {
    return changetype<ruleTypes | null>(store.get_in_block("ruleTypes", id));
  }

  static load(id: string): ruleTypes | null {
    return changetype<ruleTypes | null>(store.get("ruleTypes", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get chain0(): i32 {
    let value = this.get("chain0");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set chain0(value: i32) {
    this.set("chain0", Value.fromI32(value));
  }

  get chain1(): i32 {
    let value = this.get("chain1");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set chain1(value: i32) {
    this.set("chain1", Value.fromI32(value));
  }

  get chain0Status(): i32 {
    let value = this.get("chain0Status");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set chain0Status(value: i32) {
    this.set("chain0Status", Value.fromI32(value));
  }

  get chain1Status(): i32 {
    let value = this.get("chain1Status");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set chain1Status(value: i32) {
    this.set("chain1Status", Value.fromI32(value));
  }

  get chain0Token(): BigInt {
    let value = this.get("chain0Token");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set chain0Token(value: BigInt) {
    this.set("chain0Token", Value.fromBigInt(value));
  }

  get chain1Token(): BigInt {
    let value = this.get("chain1Token");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set chain1Token(value: BigInt) {
    this.set("chain1Token", Value.fromBigInt(value));
  }

  get minPrice(): BigInt {
    let value = this.get("minPrice");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set minPrice(value: BigInt) {
    this.set("minPrice", Value.fromBigInt(value));
  }

  get maxPrice(): BigInt {
    let value = this.get("maxPrice");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set maxPrice(value: BigInt) {
    this.set("maxPrice", Value.fromBigInt(value));
  }

  get chain0WithholdingFee(): BigInt {
    let value = this.get("chain0WithholdingFee");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set chain0WithholdingFee(value: BigInt) {
    this.set("chain0WithholdingFee", Value.fromBigInt(value));
  }

  get chain1WithholdingFee(): BigInt {
    let value = this.get("chain1WithholdingFee");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set chain1WithholdingFee(value: BigInt) {
    this.set("chain1WithholdingFee", Value.fromBigInt(value));
  }

  get chain0TradeFee(): i32 {
    let value = this.get("chain0TradeFee");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set chain0TradeFee(value: i32) {
    this.set("chain0TradeFee", Value.fromI32(value));
  }

  get chain1TradeFee(): i32 {
    let value = this.get("chain1TradeFee");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set chain1TradeFee(value: i32) {
    this.set("chain1TradeFee", Value.fromI32(value));
  }

  get chain0ResponseTime(): i32 {
    let value = this.get("chain0ResponseTime");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set chain0ResponseTime(value: i32) {
    this.set("chain0ResponseTime", Value.fromI32(value));
  }

  get chain1ResponseTime(): i32 {
    let value = this.get("chain1ResponseTime");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set chain1ResponseTime(value: i32) {
    this.set("chain1ResponseTime", Value.fromI32(value));
  }

  get chain0CompensationRatio(): i32 {
    let value = this.get("chain0CompensationRatio");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set chain0CompensationRatio(value: i32) {
    this.set("chain0CompensationRatio", Value.fromI32(value));
  }

  get chain1CompensationRatio(): i32 {
    let value = this.get("chain1CompensationRatio");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set chain1CompensationRatio(value: i32) {
    this.set("chain1CompensationRatio", Value.fromI32(value));
  }
}

export class MDCLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): MDC[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<MDC[]>(value);
  }
}
