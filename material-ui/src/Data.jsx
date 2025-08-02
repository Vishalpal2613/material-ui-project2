import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';



const columns = [
    {
        field: "id",
        headerName: "ID",
        width: 60,
        renderCell: ((params) => {
            return;
        })
    },
     {
        field: "userid",
        headerName: " User ID",
        width: 70,
    },
     {
        field: "todo",
        headerName: "Todo",
        width: 400,
    }, {
        field: "completed",
        headerName: "Completed",
        width: 400,
    },
];


const Data = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchTodos() {
            setLoading(true);
            await fetch("https://dummyjson.com/todos")
                .then((res) => res.json())
                .then((data) => setTodos(data.todos))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
        fetchTodos();
    }, [])

    console.log(todos);


    return (

        <Card sx={{ padding: 5 }}>
            <CardHeader title="Todos List"></CardHeader>
            <DataGrid loading={loading} sx={{height: 500}} columns={columns} rows={todos}/>


        </Card>
    )

};

export default Data;    