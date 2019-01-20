/* @flow */

type i32 = number;

export opaque type Int64: [ i32, i32 ] = [ i32, i32 ];

export function inject(hi: i32, lo: i32): Int64 { // eslint-disable-line no-shadow
  return [ hi, lo ];
}

export function hi(int64: Int64): i32 {
  return int64[0];
}

export function lo(int64: Int64): i32 {
  return int64[1];
}
