#!/usr/bin/env node 
const program = require('commander')

program
    .arguments('<command>')
    .description("\t'command1' stuff\n\t'command2' stuff\n\t'command3' stuff")
    .action(function(command: string){

        switch (command){
            case "command1":
            break
            case "command2":
            break 
            case 'command3':
            break
            default:
            console.log("Error: Invalid Command")
            break
        }

    }).parse(process.argv)