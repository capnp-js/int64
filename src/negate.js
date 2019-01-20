/* @flow */

import type { Int64 } from "./type";

import { inject } from "./type";

export default function negate(negative: Int64): Int64 {
  // Negative implies `negative[0] !== 0`, so ignore the [0,0] - 1 case.
  if (negative[1] === 0) {
    // Borrow from `hi`.
    return inject(
      ~(negative[0] - 1),
      0x00000000, // ~0xffffffff
    );
  } else {
    return inject(~negative[0], ~(negative[1] - 1));
  }
}
