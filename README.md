![kt.ts banner](https://cdn.jsdelivr.net/gh/gaplo917/kt.ts@master/meta/github-kt-ts-banner@2x.jpg)

# Kotlin Stdlib API in Typescript
Porting the Kotlin standard library design rationale to typescript. Boost the productivity by using the wise API design. 

***(WIP: This project is under active development. You are welcome to contribute.)***

### Getting Started to Contribute

Pick the not-yet-implemented API(below list) and try to [create a GitHub issues with the feature template](https://github.com/gaplo917/kt.ts/issues/new?assignees=&labels=&template=implement-ktlist-features.md&title=%5BFeat%5D+Implement+Kt+List+). There is a full check-list for you to contribute this project :). 
[Here is the example](https://github.com/gaplo917/kt.ts/issues/6).

# Getting Started
This module designed to be used in Typescript environment for utilizing strict 
type-checking and IDE auto-complete experience that similar to Kotlin Development.

If your want to use it in javascript project, I highly recommend you to use a relatively 
[new VSCode feature @ts-check](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript) 
Or [Intellij-based IDE](https://blog.jetbrains.com/webstorm/2019/09/using-typescript-to-check-your-javascript-code/) to enable type checking.

```shell
npm install kt.ts

# OR

yarn add kt.ts
```

### Typescript project
```ts
// index.ts
import 'kt.ts'

// `flatMap` require { "lib": ["es2019"] } in tsconfig.json
const result = [1,2,[3,3]].flatMap(it => it).distinct()

console.log(result)
```

### NodeJs CommonJS style
```js
// index.js
require('kt.ts')

// node >= 11.0 support `flatMap`
const result = [1,2,[3,3]].flatMap(it => it).distinct()

console.log(result)
```

# Project Status
### Kotlin List API
* [x] contains
* [x] elementAt
* [x] elementAtOrElse
* [x] elementAtOrNull
* [x] ~~find~~
* [x] findLast
* [x] first
* [x] first
* [x] firstOrNull
* [x] firstOrNull
* [ ] getOrElse
* [ ] getOrNull
* [ ] indexOf
* [ ] indexOfFirst
* [ ] indexOfLast
* [ ] last
* [ ] last
* [ ] lastIndexOf
* [ ] lastOrNull
* [ ] random
* [ ] single
* [ ] single
* [ ] singleOrNull
* [ ] singleOrNull
* [ ] drop
* [ ] dropLast
* [ ] dropLastWhile
* [ ] dropWhile
* [x] ~~filter~~
* [x] filterIndexed
* [x] filterNot
* [x] filterNotNull
* [ ] slice
* [ ] take
* [ ] takeLast
* [ ] takeLastWhile
* [ ] takeWhile
* [ ] reverse
* [ ] reversed
* [ ] sortBy
* [ ] sortByDescending
* [ ] sortDescending
* [ ] sorted
* [ ] sortedBy
* [ ] sortedByDescending
* [ ] sortedDescending
* [ ] sortedWith
* [ ] associate
* [ ] associateBy
* [ ] associateBy
* [ ] associateWith
* [ ] toSet
* [ ] groupBy
* [ ] groupBy
* [ ] mapIndexed
* [ ] mapIndexedNotNull
* [ ] mapNotNull
* [ ] withIndex
* [x] distinct
* [x] distinctBy
* [ ] intersect
* [ ] subtract
* [ ] union
* [ ] all
* [ ] any
* [ ] any
* [ ] count
* [ ] count
* [ ] fold
* [ ] foldIndexed
* [ ] foldRight
* [ ] foldRightIndexed
* [x] ~~forEach~~
* [x] forEachIndexed
* [ ] max
* [ ] maxBy
* [ ] maxWith
* [ ] min
* [ ] minBy
* [ ] minWith
* [ ] none
* [ ] none
* [ ] onEach
* [ ] reduce
* [ ] reduceIndexed
* [ ] reduceRight
* [ ] reduceRightIndexed
* [ ] sumBy
* [ ] requireNoNulls
* [ ] requireNoNulls
* [ ] chunked
* [ ] chunked
* [ ] minus
* [ ] minus
* [ ] minusElement
* [ ] partition
* [ ] plus
* [ ] plus
* [ ] plusElement
* [ ] windowed
* [ ] windowed
* [ ] zip
* [ ] zip
* [ ] zip
* [ ] zip
* [ ] zipWithNext
* [ ] zipWithNext
* [ ] joinTo
* [ ] joinToString
* [ ] average
* [ ] sum
* [x] containsAll
* [ ] get
* [ ] isEmpty
* [ ] iterator
* [ ] subList
* [x] size
* [ ] lastIndex

### Extra for TS and Kotlin-Like API
* [x] filterNotEmpty
