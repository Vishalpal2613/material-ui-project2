import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentLateSharpIcon from '@mui/icons-material/AssignmentLateSharp';
import DatagridToolbar from './DatagridToolbar';
import Button from '@mui/material/Button';



const columns = [
    {
        field: "id",
        headerName: "ID",
        width: 60,
        renderCell: ((params) => {
            return (
                <Link style={{ color: "black", textUnderlineOffset: 5 }} to={`/&{params.value}`}>
                    <Typography>{params.value}</Typography>
                </Link>
            );
        })
    },
    {
        field: "userid",
        headerName: "User ID",
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
        renderCell: (params) => {
            return params.value ? (<AssignmentLateSharpIcon sx={{ color: "orangered" }} />) : (<AssignmentTurnedInIcon sx={{ color: "green" }} />)
        }
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
            <DataGrid
                components={{ Toolbar: DatagridToolbar, baseButton: Button }}
                loading={loading}
                sx={{ height: 500 }}
                columns={columns} rows={todos}
                componentsProps={{ baseButton: { variant: "outline" }, }}
            />


        </Card>
    )

};

export default Data;    