import React from 'react';

const StoreContext = React.createContext({
    folders : [{
      name : 'opps', 
       id : 'oh no batman'
    }],
    notes : [{
    "id": "yikes",
    "name": "opps",
    "modified": "never",
    "folderId": "r.i.p.",
    "content": "nah"
    }]
})

export default StoreContext; 