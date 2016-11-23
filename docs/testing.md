#Testing 

we do manual testing of some project, we generally run some command, and check the output, or exit code to verify if the command did what it was supposed to do.

Some Framework or tools uses to your project like, Mocha, Code Coverage etc.

##Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
[Read More...](https://mochajs.org/)

##Code Coverage

code coverage is a way of ensuring that your tests are actually testing your code. When you run your tests you are presumably checking that you are getting the expected results. Code coverage will tell you how much of your code you exercised by running the test. Your tests may all pass with flying colours, but if you've only tested 50% of your code, how much confidence can you have in it?

#### Installation

Add Mocha and Code Coverage using test cases to our project. For this, we will run this command:

    yo ./standard-project-structure/generators/test
 
#### Usage

Test cases Run using Mocha

    grunt test

Test cases check using Code Coverage

    grunt cover
