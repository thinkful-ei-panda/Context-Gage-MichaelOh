import React from 'react'
import  {Link,} from 'react-router-dom'
import StoreContext from '../Context'


export default class NoteGenerator extends React.Component{

    static contextType = StoreContext ; 


    render(){
            const {notes} = this.context
              
            const notesMaped = notes.map( note => 
                        <div key={note.id} className='box' id={note.folderId}>
                    <Link to={`/note/${note.id}` }>
                            <h2>{note.name}</h2>
                            <p>{note.modified}</p>
                        </Link> <button>Delete</button>
                        </div>
                    )

        return(<>{notesMaped}</>)
            
              
        
    }

}