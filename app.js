// const add=require('./utils.js')
// console.log('app.js')
// console.log(add(10,20))

// let getNotes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)


// //const getNotes= require('./notes.js')
// import chalk from "chalk";
// import {getNotes} from './notes.js';


// let msg= getNotes()
// console.log(chalk.red(msg))

// // import chalk from 'chalk'

// // console.log(chalk.red.rgBlue(Sucess))

// console.log(process.argv)
// import chalk from "chalk";
// import { getNotes } from "./notes.js";
// import yargs from "yargs";
// let msg = getNotes();
// console.log(chalk.bgGreen.bold(msg))

// console.log(process.argv[2])

// let command = process.argv[2]
// if(command==='add'){
//     console.log('Adding notes')
// }
// else if(command === 'remove'){
//     console.log('Removing notes')
// }
let yargs = require('yargs')
let notes =require('./notes.js')
// import {yargs as yarg} from 'yargs';
// console.log(process.argv)

yargs.command({
    command:'add',
    describe:'Adding a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'

        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Removing a note',
    bundler:{
        title:{
            describe:'notes title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'Listing the notes',
    handler(){
        notes.listOfNotes()
    }
})

yargs.command({
    command:'read',
    describe:'Reading the notes',
    bundler:{
        title:{
            describe:'notes title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


yargs.parse()









