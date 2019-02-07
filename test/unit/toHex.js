/* @flow */

import * as assert from "assert";
import { describe, it } from "mocha";

import toHex from "../../src/toHex";
import { inject } from "../../src/type";

describe("toHex", function () {
  it("converts a negative int64 to a fixed width, negated hex string", function () {
    const a = inject(0x80000000, 0x00000000); // -(0x7fffffffffffffff + 1) = -0x8000000000000000
    assert.equal(toHex(a), "-0x8000000000000000");

    const b = inject(0x80030000, 0x00000000); // -(0x7ffcffffffffffff + 1) = -0x7ffd000000000000
    assert.equal(toHex(b), "-0x7ffd000000000000");

    const c = inject(0xfffff300, 0xfffffff0); // -(0x00000cff0000000f + 1) = -0x00000cff00000010
    assert.equal(toHex(c), "-0x00000cff00000010");
  });

  it("converts a nonnegative int64 to a fixed width, non-negated hex string", function () {
    const a = inject(0x71238888, 0x11000000);
    assert.equal(toHex(a), "0x7123888811000000");

    const b = inject(0x00000000, 0x00000000);
    assert.equal(toHex(b), "0x0000000000000000");

    const c = inject(0x00029394, 0x12345678);
    assert.equal(toHex(c), "0x0002939412345678");
  });
});
