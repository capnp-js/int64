/* @flow */

type i32 = number;
type u32 = number;

export opaque type Int64: [ i32, u32 ] = [ i32, u32 ];

export function inject(hi: i32, lo: i32): Int64 { // eslint-disable-line no-shadow
  return [ hi, lo >>> 0 ];
}

export function hi(int64: Int64): i32 {
  return int64[0];
}

export function lo(int64: Int64): i32 {
  return int64[1];
}
