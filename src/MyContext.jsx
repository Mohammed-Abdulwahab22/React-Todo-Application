import React from 'react'

const MyContext = React.createContext({
    showContent: true,  
    showContent: () => {}, 
    showSettings: () => {} 
  });
export default MyContext