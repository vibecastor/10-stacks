![cf](http://i.imgur.com/7v5ASc8.png) lab 10 - Stacks and Queues Data Structures
====

## To Submit this Assignment
* Read this document entirely and estimate how long this assignment will take.
* Work in a fork of this repository
* Work in a branch on your fork
* Protect your repository's `master` branch by activating `continuous-integration/travis-ci` status checks
* Create a pull request from your `lab` + `<your name>` branch to your `master` branch
* Open a pull request to this repository
* Submit on canvas a question and observation,your original estimate, how long you spent, and a link to your pull request

## Requirements
#### Configuration
<!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include
  * **README.md** -- with a documentation about your lab
  * **.gitignore** -- with a robust .gitignore
  * **.eslintrc** -- with the class .eslintrc file
  * **.eslintignore** -- with the class .eslintignore
  * **.package.json** -- with all dependencies and dev-dependencies
  * **lib/** -- directory for holding your programs helper modules
  * **__test__/** -- directory for holding your programs unit and integration tests

#### Testing
  * write at least three test assertions for each method of the Stack and Queue List Data Structures
  * organize your tests into appropriate describe/test blocks for test output readability

####  Documentation
  * in your README, write documentation for you data structures
  * your documentation should includes code block useage examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests

#### Feature Tasks
  * implement a Stack Class  using,internally, a Linked List class
  * implement `push(value)` and `pop()` methods on the Stack class
	* implement `peek()` and `isEmpty()` methods on the Stack class

## Bonus Points:
  * 2pts
  * implement Reverse Polish Notation using your Stack data structure
    * refer to the [Wiki](https://en.wikipedia.org/wiki/Reverse_Polish_notation) for more information on RPN

#### Rubric:
  * Tests: 2pts
  * Passes linter: 1pts
  * Completed Data Structure: 5pts
  * Big-O notation: 2pt
