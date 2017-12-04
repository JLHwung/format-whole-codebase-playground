# format-whole-codebase-playground

A codebase formatting example accompanying this blog post on [two-step-formatting](https://jhuang.me/2017/11/21/GitFlow%E5%88%86%E6%94%AF%E6%A8%A1%E5%9E%8B%E4%B8%8B%E7%9A%84%E4%BB%A3%E7%A0%81%E5%85%A8%E9%87%8F%E6%A0%BC%E5%BC%8F%E5%8C%96%E6%B5%81%E7%A8%8B/)

## Formatting setup

```
yarn
npx prettier --write index.js
```

## branch specification

| branch name | formatted | description |
|-----|-----|-----|
| master | ✗ | original master branch |
| develop | ✗ | original develop branch |
| prettier-master | ✓ | original master branch formatted |
| prettier-develop | ✓ | original develop branch formatted | 
| develop-merge-master | ✗ | original develop branch merged with master branch |
| prettier-develop-merge-master | ✓ | original develop branch merged with master branch, then formatted |
| prettier-master-merge-develop | ✓ | original develop branch merged with master branch, then merged with prettier-master, conflicts resolved, then formatted |
