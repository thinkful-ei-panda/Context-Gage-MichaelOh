import React from  'react';
import  {Link,} from 'react-router-dom'


    export default function Notes(props){

        //props.match.params.noteId
        // const note = 
        
        const notesMaped = props.notes.map( note => 
             <div key={note.id} className='box' id={note.folderId}>
            <Link to={`/note/${note.id}` }>
                    <h2>{note.name}</h2>
                    <p>{note.modified}</p>
                </Link> <button>Delete</button>
             </div>
            )

            return(
                <div className='notes-list'>
                    {notesMaped}
                </div>


            )
    }