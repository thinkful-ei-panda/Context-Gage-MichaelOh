import React from 'react';
import FolderGenerator from './FolderGenerator'



export default function Folders(props){

        return(
            <div className="folder-sidebar">
                 <FolderGenerator/>     
                <button type='submit'>add new folder</button>
            </div>
        )


}