# Contributing to Standard Project Structure

Looking to contribute something to Standard Project Structure? **Here's how you can help.**

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.


## Using the issue tracker

The [issue tracker](https://github.com/rcorp/standard-project-structure/issues) is
the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests)
and [submitting pull requests](#pull-requests), but please respect the following
restrictions:

* Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.


## Issues and labels

Our bug tracker utilizes several labels to help organize and identify issues. Here's what they represent and how we use them:

- `basic folder structure` - Issues that are reported to what it structure of Project and specific folders.
- `dependency management` - Issues that have been confirmed with which version use for all modules.
- `github structure` - Issues that are reported to how flow git process.
- `linter` - Issues that are reported to checks code for stylistic or programming errors.
- `scaffolding` - Issues with our included javascript based Yeoman, which is used to run all our generators, and more.
- `task runner` - Issues with our included task.
- `testing` - Issues that are reported to which testing framework not working and which test framework included projects.

For a complete look at our labels, see the [project labels page](https://github.com/rcorp/standard-project-structure/labels).


## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful, so thanks!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? Do other browsers show the bug differently? What
would you expect to be the outcome? All these details will help people to fix
any potential bugs.

## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.


## Pull requests

Good pull requests—patches, improvements, new features—are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code, porting to a different language),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.

Please adhere to the [coding guidelines](#code-guidelines) used throughout the
project (indentation, accurate comments, etc.) and any other requirements
(such as test coverage).

Adhering to the process is the best way to get your work included in the project. 
Firstly [Fork](https://help.github.com/articles/fork-a-repo/) a project and after that work and [create pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)

## Code guidelines

### JS

- 2 spaces (no tabs)
- Use follow this rule [ESlint](http://eslint.org/docs/rules/).

### Checking coding style

Run `grunt lint` before committing to ensure your changes follow our coding standards.


