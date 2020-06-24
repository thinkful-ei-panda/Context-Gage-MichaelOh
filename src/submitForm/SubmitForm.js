import React from 'react';


    export default function SubmitForm(props){
        return(
            <div>
                <form>
                    <input type="text" id="note-title" placeholder="???"/>
                    <input type="textbox" id="submit-box" placeholder="???" />
                    <button type="submit">add</button>
                </form>
            </div>
        )
    }