# TypeScript
Learning TypeScript programs and fundamentals, functions and so on.

How to install TypeScript ?
Last Updated : 12 Jul, 2024
TypeScript is a powerful language that enhances JavaScript by adding static type checking, enabling developers to catch errors during development rather than at runtime. As a strict superset of JavaScript, TypeScript allows you to write plain JavaScript with optional extra features. This guide will walk you through the installation, configuration, and basic usage of TypeScript.

What is TypeScript?
TypeScript validates your JavaScript code ahead of time using static type checking. While browsers interpret JavaScript, TypeScript helps catch errors before the code is executed. You can write plain JavaScript in a .ts file, with additional features being completely optional.

Key Features:
Static Typing: Enables type annotations for variables, function parameters, and return values.
Transpilation: TypeScript code is transpiled into vanilla JavaScript using the TypeScript compiler (tsc).
Configurability: A tsconfig.json file customizes the compiler’s behavior for your project.
Prerequisite:

Before installing TypeScript, ensure you have the Node.js framework installed on your computer.
Step-by-Step Installation Guide
Step 1: Install TypeScript
1. Open Command Prompt: Go to the Start menu and open the command prompt

2. Use NPM to Install TypeScript: Run the following command to install TypeScript globally:

npm install --global typescript


3. Verify Installation: Check the installed version of TypeScript by running

tsc -v
Here tsc is a typescript compiler and the -v flag indicates that we are displaying the version of the typescript as shown in the image below:



Step 2: Install a Specific Version of TypeScript
To install a specific version of TypeScript, use the following command:

npm install --global typescript@4.x.x
Replace x.x with the desired version number, as shown in the image below:



Step 3: Uninstall TypeScript
If you need to uninstall TypeScript, use the following command:

npm uninstall --global typescript


Creating a Simple TypeScript Project
Let’s create a simple “Hello World” project in TypeScript to verify the installation and understand the basic workflow.

Step 1: Create a Project Folder
1. Create Folder: Create a folder on your desktop and name it, e.g., typescript-hello-world.

2. Create a TypeScript File: Inside this folder, create a file named main.ts.

Step 2: Initialize TypeScript Project
1. Open Command Prompt: Open the Node.js command prompt and navigate to the project folder:

cd path/to/typescript-hello-world


2. Initialize TypeScript Configuration: Run the following command to create a tsconfig.json file:

tsc --init


This file contains all the configurations for the TypeScript compiler.

Step 3: Write TypeScript Code
1. Open main.ts: Open the main.ts file and add the following code.

console.log("Hello, TypeScript!");
2. Save the File: Save the main.ts file.

Step 4: Compile TypeScript Code
1. Compile TypeScript: Run the TypeScript compiler with the file name as an argument:

tsc
Step 5: Run the JavaScript Code
1. Run with Node.js: Execute the compiled JavaScript file using Node.js

node main.js
Output:


Typescript hello world 

In this guide, we covered the installation and basic usage of TypeScript. By setting up TypeScript, you can catch errors early in the development process, improving code quality and reducing runtime errors.
