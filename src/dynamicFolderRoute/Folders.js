import React from 'react';
import FolderGenerator from './FolderGenerator'



export default function Folders(props){
    // const folderList = props.folders.map( folder => 
    //     <Link key={folder.id} to={`/folders/${folder.id}`}>
    //         <div className='box' id={folder.id}>
    //             <h2>{folder.name}</h2>
    //         </div>
    //     </Link> 
    //     )

        return(
            <div className="folder-sidebar">
                 <FolderGenerator/>     
                <button type='submit'>add new folder</button>
            </div>
        )


}