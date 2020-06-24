



const setFolders = () => {
    const url = 'http://localhost:9090/folders';
        fetch(url)
            .then ((res) => {
                    res.json()
            })
            .then( (folders) => {
                return folders;
            })
}

const setNotes = () => {
    const url = 'http://localhost:9090/notes';
        fetch(url)
            .then ((res) => {
                    res.json()
            })
            .then( (notes) => {
                return notes;
            })
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