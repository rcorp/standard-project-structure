#Release

Follow the instructions in [`CONTRIBUTING.md`](https://github.com/rcorp/standard-project-structure/blob/master/CONTRIBUTING.md) during development.

### Version

We attempt to stick to [Semantic Versioning](http://semver.org/). Most of the time, development should be against a new minor version - fixing bugs and adding new features that are backwards compatible.

The current version lives in the file `/package.json`. This version will be the version number that is currently released. When releasing a new version, update `package.json` file.

###How does it work?

Firstly check that your project is completed or not, for example we take into account whether all test cases is completed, linter errors are done, documentation etc. After that [release](https://help.github.com/articles/creating-releases/) or [tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging) your project and push it to github repo.

You can do the above process manually as well. You have to remember what major, minor and patch means. You have to remember to push both commits and tags. You have to wait for the CI to pass. After that,
```
npm version <version>
git push origin master --tags
```
### Release the NPM

1. `npm adduser` to save your credentials locally
1. `npm publish .` to publish what's in `package.json`


