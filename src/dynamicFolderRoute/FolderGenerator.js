import React from 'react';
import { Link } from 'react-router-dom'
import StoreContext from '../Context';

export default class FolderGenerator extends React.Component{

    static contextType = StoreContext

    render(){
        const {folders} = this.context

        const folderList = folders.map( folder => 
            <Link key={folder.id} to={`/folders/${folder.id}`}>
                <div className='box' id={folder.id}>
                    <h2>{folder.name}</h2>
                </div>
            </Link>
                
                
            )
        return(
        <>{folderList}</>
        )
    }
}
