# OnsetTypescriptAPI
Typescript API Wrapper for the Onset API

## Important
A new build of Onset broke the current build system. To fix it we would need to add an additional post processor step. We thought to freeze it for now as release gets closer and we have not much time left to work on our own gamemodes. Also the OOP Wrapper is probably not updated anymore or even gets removed once we start maintaining this project again.

## Description
This framework allows you to develop gamemodes in typescript. It contains definitions for all Onset api functions and wraps them with a nice object-oriented api. It also comes with a build-script to automatically compile all source files into just 2 lua files.

## Usage
First make sure you have node installed.
Running the following commands will initialize a new gamemode project for you.
```
mkdir YOUR_PROJECT_NAME
cd YOUR_PROJECT_NAME
npm init
npm install @onfire-network/onset-typescript-builder --save
npx otb init
```
If your project is not a gamemode, but a library to use in another gamemode run init-lib instead of init.
The scaffoling will include 3 folders (client, server, common) which are used to seperate code by execution side. The client and server folder will each contain an init.js which will be the entrypoint of your gamemode.  
  
To build your gamemode just run:
```
npx otb
```
This will create a target folder containing a client and server folder with your lua scripts.
These scripts are already kind of optimized, but not minified. If you wish to minify them just run:
```
npx otb prod
```

## Other Libraries to use with OnsetTypescriptAPI
- MariaDB ([OnfireNetwork/OnsetTypescriptMariaDB](https://github.com/OnfireNetwork/OnsetTypescriptMariaDB))
