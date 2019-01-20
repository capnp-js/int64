/* @flow */

import type { Int64 } from "./type";

import negate from "./negate";

export default function toHex(int64: Int64): string {
  let prefix, h, l;
  if (int64[0] < 0) {
    const positive = negate(int64);
    prefix = "-0x";
    h = (positive[0] >>> 0).toString(16);
    l = (positive[1] >>> 0).toString(16);
  } else {
    prefix = "0x";
    h = int64[0].toString(16);
    l = (int64[1] >>> 0).toString(16);
  }

  const pad = "00000000";
  return prefix + pad.slice(h.length) + h + pad.slice(l.length) + l;
}
