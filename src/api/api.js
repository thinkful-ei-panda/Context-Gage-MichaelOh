const url ='http://localhost:9090'


// const setFolders = new Promise((resolve, reject) =>{
//         fetch(`${url}/folders/`)
//             .then((res)=> {
//                 if(res.ok){
//                     return res.json()
//                 }else{

//                 }
//             })
// })


const setFolders = () => {
    const url = 'http://localhost:9090/folders';
        fetch(url)
            .then ((res) => {
                if(res.ok){
                   return res.json()
                }else{
                    throw new console.error(res.status);
                }
                    
            })
            .then( (folders) => {
                return folders;
            })
            .catch((error)=>
            console.log(error)
            )
            
}

const setNotes = () => {
    const url = 'http://localhost:9090/notes';
        fetch(url)
            .then ((res) => {
                if(res.ok){
                  return res.json() 
                }else{
                    throw new console.error(res.status);
                    
                }
                    
            })
            .then( (notes) => {
                return notes;
            })
            .catch((error)=>
            console.log(error)
            )
            
}

const deleteNotes = () => {
    const url = 'http://localhost:9090/notes';
        fetch(url, {
            method : 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        
}

export { setNotes , setFolders, deleteNotes}