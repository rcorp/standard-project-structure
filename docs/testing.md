#Testing 

we do manual testing of some project, we generally run some command, and check the output, or exit code to verify if the command did what it was supposed to do.

Some Framework or tools uses to your project like, Mocha, Code Coverage etc.

###Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
[Read More...](https://mochajs.org/)

###Code Coverage


Task Runner using for `Gruntfile`.
Grunt was originally created by Ben Alman in 2012, as an efficient alternative to simply writing and maintaining a suite of "javascript build process" tasks in one huge file. It was designed as a task-based command line build tool for JavaScript projects.

Firstly you need a `package.json`,  if this file exists in our project then we will ignore otherwise we will run this command using initialize `package.json`, like:

    npm init

###Tasks
Tasks are the modules that performs a specified job. They are defined in the Gruntfile.

Developers can load predefined tasks from existing Grunt plugins and/or write custom code to define their own tasks depending on their requirements. Once defined, these tasks can be run from the command line by simply executing grunt `taskname`. If the `taskname` defined in the Gruntfile is 'default' then simply executing grunt will suffice.

###Add Task Runner in the Project
Add some modules like:

    npm install -g yo
After that add Task Runner in the project using this command:

    yo ./standard-project-structure/generators/task-runner
Files and folders will be created.

`Gruntfile.js` - Add only load-grunt-config plugin (load-grunt-config is a Grunt library that allows you to break up your Gruntfile config by task).

`grunt/aliases.js`- aliases.js has tasks defined in it.

`grunt/` - All running tasks are described in this folder.
