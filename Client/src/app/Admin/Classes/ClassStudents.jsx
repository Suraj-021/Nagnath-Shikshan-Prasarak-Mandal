"use client";
import { useParams, useRouter } from "next/navigation";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Typography, Box } from "@mui/material";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'address', headerName: 'Address', width: 150 },
];

const rows = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890', address: '123 Main St, Anytown, USA' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '0987654321', address: '456 Elm St, Anytown, USA' },
    { id: 3, name: 'Jim Beam', email: 'jim.beam@example.com', phone: '1234567890', address: '123 Main St, Anytown, USA' },
    { id: 4, name: 'Jill Johnson', email: 'jill.johnson@example.com', phone: '0987654321', address: '456 Elm St, Anytown, USA' },
    { id: 5, name: 'Jack Daniels', email: 'jack.daniels@example.com', phone: '1234567890', address: '123 Main St, Anytown, USA' },
    { id: 6, name: 'Jill Johnson', email: 'jill.johnson@example.com', phone: '0987654321', address: '456 Elm St, Anytown, USA' },
    { id: 7, name: 'Jack Daniels', email: 'jack.daniels@example.com', phone: '1234567890', address: '123 Main St, Anytown, USA' },
    { id: 8, name: 'Jill Johnson', email: 'jill.johnson@example.com', phone: '0987654321', address: '456 Elm St, Anytown, USA' },
    { id: 9, name: 'Jack Daniels', email: 'jack.daniels@example.com', phone: '1234567890', address: '123 Main St, Anytown, USA' },
];

const ClassStudents = () => {
    const params = useParams();
    const router = useRouter();
    const classId = params.classId;
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                All Students of Class {classId}
            </Typography>
            <Button variant="outlined" onClick={() => router.back()} sx={{ mb: 3 }}>
                Go Back
            </Button>
            <Box className="flex justify-center items-center">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSizeOptions={[5]}
                    pagination
                    rowsPerPageOptions={[5]}
                />
            </Box>
        </Box>
    );
};

export default ClassStudents;