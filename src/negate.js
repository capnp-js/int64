/* @flow */

import type { Int64 } from "./type";

import { inject } from "./type";

export default function negate(negative: Int64): Int64 {
  if (negative[1] === 0) {
    /* Negative number implies that ~negative[0] !== 0, so I don't have to worry
       overflowing it. */

    // (~0) + 1 = 0, but I need to carry the overflow into negative[0]
    return inject((~negative[0]) + 1, 0x00000000);
  } else {
    /* ~negative[1] !== 0, so I don't have to worry about overflowing it. */
    return inject(~negative[0], (~negative[1]) + 1);
  }
}
