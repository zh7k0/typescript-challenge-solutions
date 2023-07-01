// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { Expand } from './util'
type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]


// ============= Your Code Here =============
type Merge<F, S> = {
  [Key in keyof (F & S)]: Key extends keyof S
  ? S[Key]
  : (F & S)[Key]
}


