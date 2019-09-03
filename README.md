# OnsetTypescriptAPI
Typescript API Wrapper for the Onset API

## Description
This framework allows you to develop gamemodes in typescript. It contains definitions for all Onset api functions and wraps them with a nice object-oriented api. It also comes with a build-script to automatically compile all source files into just 2 lua files.

## Building
First make sure you have node installed.
Your source files need to be in src and are split up into the subdirectories client, server and common. Your entrypoint in client and server needs to be called init.ts
Running the following commands will build your gamemode into the target directory.
```
npm install
npm run build
```
This will do some minification but its still readable code. To build a minified file you can build in production mode
```
npm run build prod
```
