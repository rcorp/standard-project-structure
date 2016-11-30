#Release

Follow the instructions in [`CONTRIBUTING.md`](https://github.com/rcorp/standard-project-structure/blob/master/CONTRIBUTING.md) during development.

## Version

We attempt to stick to [Semantic Versioning](http://semver.org/). Most of the time, development should be against a new minor version - fixing bugs and adding new features that are backwards compatible.

The current version lives in the file `/package.json`. This version will be the version number that is currently released. When releasing a new version, update `package.json` file.

## Testing

- [ ] Run "grunt lint"
- [ ] Run "grunt test" & "grunt cover"

##How does it work?

Firstly check that your project is completed or not, for example we take into account whether all test cases is completed, linter errors are done, documentation etc. After that [release](https://help.github.com/articles/creating-releases/) or [tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging) your project and push it to github repo.

You can do the above process manually as well. You have to remember what major, minor and patch means. You have to remember to push both commits and tags. You have to wait for the CI to pass. After that,
```
git tag vX.Y.Z
git push origin --tags
```
## Release the NPM

- [ ] Log into npm (`npm login`)
- [ ] Publish to NPM (`npm publish —-tag <TagForInstall>`, e.g. `npm publish --tag beta` or `npm publish` to release latest production framework)


