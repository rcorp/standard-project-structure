# standard-project-structure
*Automate Everything ™*

![standard-project-structure](https://cloud.githubusercontent.com/assets/1716462/13458681/b3f206d8-e094-11e5-808d-8ebb9910c743.png)

**Standard Project Structure (SPS)** is a mission to improve developer productivity! It is a complete set of tools along with configurations and automatic scaffolding which hopefully increases your efficiency by 10000%! 

## Motivation
In the ever changing world of technology, especially the explosion of choice in the open source world, software quality has become the most metric; more so for new users. The problem is worse with seasoned experts in the Web/JS/Node world frequently diagnosed with <a href="https://en.wikipedia.org/wiki/Analysis_paralysis"> analysis paralysis </a>

SPS helps you by automatically configuring your software project with [Code Linting](#linting), [Unit Testing](#testing), [Functional Testing](#testing), [Front End Dependency Management](#dependency-management), Bundling, [Documentation](#documentation), [Back End Dependency Management](#dependency-management), [Task Runners](#task-runners), Mobile/Multi Platform Development, Project Structure, Source Code Management, Issue Management, Code Review Workflow, Continuous Integration, Code Coverage, and more! All configured to work together ***harmoniously***.

We also try to help you master these tools and provide *'Best Practices'* so that you can concentrate on your project and leave the rest to us!


## Status
This is a work in progress but we are getting closer to a Public Launch! We need ***your*** help to make this project useful. Browse the [discussions](https://github.com/rcorp/standard-project-structure/issues) and leave your comments!

## Modules

1. [Linting](#linting) 
2. [Testing](#testing)
3. [Continuous Integration](#continuous-integration)
4. [Dependency Management](#dependency-management)
5. [Task Runners](#task-runners)
6. [Project Structure](#project-structure)
7. [Release Management](#release-management)
8. [Documentation](#documentation)

## Linting

All code should look like a single person typed it, no matter how many people contributed so its easy to read and contribute.

Linting is the process of checking the source code for Programmatic as well as Stylistic errors. This is most helpful in identifying some common and uncommon mistakes that are made during coding.

#### Installation

Add linters and Atom to your project. For this, we will run this command:

    yo ./standard-project-structure/generators/linter

- Asks for all languages being used.
- Installs tasks for each linter.
- Asks for Editors being used and installs editor Plugins.
 
#### Usage

    grunt lint

 - Runs all linters installed.

<table>
<tr>
<td><b>Language</td>
<td><b>Linters</td><td><b>Rules</td><td><b>Why?</td>
</tr>
<tr>
<td>Javascript</td>
<td> <a href="https://github.com/eslint/eslint/"> ESLint </a> </td>
<td> <a href="https://github.com/airbnb/javascript"> Airbnb Style Guide </a> </td>
<td> 
  <a href="https://github.com/rcorp/standard-project-structure/issues/4"> #4 </a>,
  <a href="https://github.com/rcorp/standard-project-structure/issues/6"> #6 </a> 
</td>
</tr>
<tr>
<td>Coffeescript</td>
<td> <a href="https://github.com/clutchski/coffeelinta"> CoffeeLint </a> </td>
<td> </td>
<td> <a href="https://github.com/rcorp/standard-project-structure/issues/4"> #4 </a> </td>
</tr>
<tr>
<td>CSS</td>
<td> <a href="https://github.com/CSSLint/csslint"> StyleLint </a> </td>
<td> <a href="https://github.com/stylelint/stylelint-config-standard"> StyleLint Standard Config </a> </td>
<td> 
  <a href="https://github.com/rcorp/standard-project-structure/issues/4"> #4 </a>,
  <a href="github.com/rcorp/standard-project-structure/issues/11"> #11 </a> 
</td>
</tr>
<tr>
<td>HTML</td>
<td> <a href="https://github.com/yaniswang/HTMLHint"> HTMLHint </a> </td>
<td> <a href="https://github.com/yaniswang/HTMLHint"> HTML Standard Config </a> </td>
<td> 
  <a href="https://github.com/rcorp/standard-project-structure/issues/4"> #4 </a>, 
  <a href="https://github.com/rcorp/standard-project-structure/issues/13"> #13 </a>
</td>
</tr>
<tr>
<td>Typescript</td>
<td> <a href="https://github.com/palantir/tslint"> TSLint </a> </td>
<td> <a href="https://github.com/Microsoft/tslint-microsoft-contrib"> Microsoft tslint Standard </a> </td>
<td> 
  <a href="https://github.com/rcorp/standard-project-structure/issues/4"> #4 </a>,
  <a href="https://github.com/rcorp/standard-project-structure/issues/15"> #15 </a>
</tr>
</table>

### Testing

we do manual testing of some project, we generally run some command, and check the output, or exit code to verify if the command did what it was supposed to do.

Some Framework or tools uses to your project like, Mocha, Code Coverage etc.

#### Installation

Add Automate test cases our project, using this command:

    yo ./standard-project-structure/generators/task-runner

#### Usage

    grunt test
    grunt cover    

 
#### Unit Testing

#### Functional Testing
 
### Continuous Integration

### Dependency Management
 
#### NPM
 
#### Bower

### Task Runners

Task Runner is a process of automation of task. You will have to do less work when performing repetitive tasks like bundling, unit testing, linting, etc.

#### Installation

Add Task Runner our project, using this command:

    yo ./standard-project-structure/generators/task-runner 

### Project Structure

Making documentation accessible enables people to learn about a project; making it easy to update ensures that documentation stays relevant.

#### Installation

Run these command using create Initial Project Structure.

    yo ./standard-project-structure/generators/projectStructure
 
### Release Management

We attempt to stick to [Semantic Versioning](http://semver.org/). Most of the time, development should be against a new minor version - fixing bugs and adding new features that are backwards compatible.
[Read more...](https://github.com/rcorp/standard-project-structure/blob/masterRELEASE.md)

### Documentation


 


