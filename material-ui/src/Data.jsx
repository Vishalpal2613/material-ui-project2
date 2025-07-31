import React, { useEffect } from 'react';

const Data = () => {
    useEffect(() => {
        async function fetchTodos() {
         await fetch("https://dummyjson.com/todos")
         .then((res) => res.json())
         .then((data) => console.log(data))
         .catch((err) => console.log(err))
        }
        fetchTodos();
    }, [])
   
   return <div>Data</div>
  
};

export default Data;