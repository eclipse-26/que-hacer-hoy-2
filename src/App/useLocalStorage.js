import React from "react";

function useLocalStorage(itemName, initialValue) {
  
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(()=>{

    setTimeout(()=>{
      try{
        let parsedItem = "";
    
        if(!localStorage.getItem(itemName)){   
          let stringInitialValue = JSON.stringify(initialValue);
          
          localStorage.setItem(itemName, stringInitialValue);
          parsedItem = initialValue;
          
          console.log(`${itemName} por defecto creados correctamente`);
        }else{
          parsedItem = JSON.parse(localStorage.getItem(itemName));
          setItem(parsedItem)
        }
    
        setLoading(false);
      } catch(error){
        setLoading(false);
        setError(true);
      }
    }, 3000);

  }, []);

  function saveItems(newItems){
    setItem(newItems);
    localStorage.setItem(itemName, JSON.stringify(newItems))
  }

  return {
    item, 
    saveItems, 
    loading, 
    error
  }
}

export { useLocalStorage };