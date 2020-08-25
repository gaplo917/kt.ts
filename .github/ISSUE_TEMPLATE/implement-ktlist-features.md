---
name: Implement KtList Features
about: Standard Kt features development template
title: "[Feat] Implement Kt List "
labels: ''
assignees: ''

---

## Check List
* [ ] copy from `src/collections/template.md` and create the 'Op.ts' file (i.e `filter.ts`) under `src/collections`
* [ ] **cut** the declaration in `src/kt-list.ts` that related to the "Op" and paste to your interface
* [ ] study the [Kotlin documentation](https://devdocs.io/kotlin/api/latest/jvm/stdlib/kotlin.collections/-list/index) of the behavior of the extension function. <sub>(*Please do me a favor to help to check if there are missing pieces of the declaration*)</sub>
* [ ] copy and **modify** necessarily of the documentation to the interface declaration, rename `Exception` to `Error` if necessary
* [ ] implement the extension function (use lodash if available)
* [ ] write a test for your code
* [ ] run your test locally before creating pull request
```
npm run jest
```
* [ ] run linting locally
```
npm run lint
```
* [ ] update `README.md` for the project status

## Resources
You could find the documentation to the `KtList*Op` interface declaration of in [here](https://devdocs.io/kotlin/api/latest/jvm/stdlib/kotlin.collections/-list/index)
