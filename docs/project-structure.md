#Project Structure

Making documentation accessible enables people to learn about a project; making it easy to update ensures that documentation stays relevant.

> Initial Project Structure created to in the project.

## Create Generic Project Structure

#### Installation

Add Initial Project Structue to our project. For this, we will run this command:

    yo ./standard-project-structure/generators/projectStructure
    
The above command will create some folder and files like:

    .
    ├── dist                    # Compiled files
    ├── docs                    # Documentation files
    ├── src                     # Source files
    ├── test                    # tests and Automated test files
    └── README.md               # Documentation of Project


### Compiled files (dist)

`dist` folder is in, what I saw contains the `production` files. It usually contains the compiled software.

### Documentation files (docs)

`docs` folder are usually stored into the documentation files, And these files describe how to work on these tools or features.

### Source files

The actual source files of a project are stored inside the `src` folder.

### Tests files (test)

`test` folder is stored into the test cases of a project. And some feature wise tests are stored into `spec` folder which are stored inside  the`test` folder.
