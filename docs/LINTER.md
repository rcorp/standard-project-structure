#Linter

Linting is the process of checking the source code for Programmatic as well as Stylistic errors. This is most helpful in identifying some common and uncommon mistakes that are made during coding.
We use `Atom` code editor for linting. So we need to install Atom for this.

We use some lintin tools like:

`ESLint` - ESLint is a tool for identifying and reporting on patterns found in JavaScript code. And the rules that we follow is `eslint-config-airbnb`.

`Stylelint` - A mighty, modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets. And the rules that we follow is `stylelint-config-standard`.

`HTMLHint` - HTMLHint is a Static Code Analysis Tool for HTML files.

`TSLint` - TSLint checks our TypeScript code for readability, maintainability, and functionality errors. And the rule that we follow is `tslint-microsoft-contrib`.

`Atom Code Editor` - Atom is open source project, Atom is a hackable text editor for the 21st century, built on Electron, and based on everything. Atom is designed it to be deeply customizable, but still approachable using the default configuration.

Check whether your system has Yeoman installed or not. If Yeoman is not installed, then we need to run these command:

    npm install -g yo

After that Add linters and Atom to your project. For this, we will run this command:

    yo ./standard-project-structure/generators/linter
