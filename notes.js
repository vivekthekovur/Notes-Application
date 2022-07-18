//  export function getNotes(){
//     return 'your notes...'
//  }


// //  module.exports = getNotes;
let fs=require('fs');
const { title } = require('process');
// const chalk = require('chalk')


// add a note

// function getNotes(){
//     return 'your notes'
// }
let getNotes = ()=>{
    return 'your notes'
}

let addNotes = (title,body) => {
    let notes= loadNotes();
    let duplicateNote = notes.find((note)=>note.title===title)
    debugger
    if(!duplicateNote)
    {
    notes.push({
        title:title,
        body:body
    })
    console.log("notes created");
}
else{
    console.log('notes taken')

}

    saveNotes(notes);
}

let saveNotes = (notes) => {
    let dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}



let loadNotes=()=>{
    try{
        let dataBuffer= fs.readFileSync('notes.json');
        let dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return []
    }
}




// removing  a note



let removeNote=(title)=>{
    let notes = loadNotes();
    let match = notes.filter((note)=>note.title!==title)
    if(notes.length===match.length){
        console.log('notes not removed')
    }
    else{
        console.log('notes removed')
    }
    return saveNotes(match)
}  

// function saveNotes(match){
//     let dataJSON = JSON.stringify(match)
//     fs.writeFileSync('notes.json',dataJSON)
// }

// function loadNotes(){
//     let dataBuffer = fs.readFileSync('notes.json');
//     let dataJSON = dataBuffer.toString();
//     return JSON.parse(dataJSON)
// }

// module.exports = ({
//     removeNote:removeNote
// })

//list out all the notes

let listOfNotes = ()=>{
    let notes= loadNotes();
    let notesList = notes.forEach((note)=>{
        console.log('title : ',note.title)
    });
}

let readNote = (title) =>{
    let notes = loadNotes();
    console.log(notes)
    let readNote = notes.find((note)=>note.title===title)
    if(readNote){
        console.log(readNote)
    }else{
        console.log('notes not found')
    }
}







module.exports=({
    getNotes:getNotes,
    addNotes:addNotes,
    removeNote:removeNote,
    listOfNotes:listOfNotes,
    readNote:readNote

})
