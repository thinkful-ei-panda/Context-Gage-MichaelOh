import React from 'react';
import {Link} from 'react-router-dom';


export default function NoteDetails(props){
    return(
        <div className='detailed-note'>
             <Link to='/'><div className='baby-come-back'>Go back</div></Link>
             <div key={props.notes.id} className='box' id={props.notes.folderId}>
                    <h2>{props.notes.name}</h2>
                    <p>{props.notes.modified}</p>
                    <p>{props.notes.content}</p>
                    <button>Delete</button>
             </div>
        </div>
    )
}