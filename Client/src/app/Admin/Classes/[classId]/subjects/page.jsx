"use client";
import { useParams, useRouter } from "next/navigation";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Typography, Box } from "@mui/material";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
];

const rows = [
    { id: 1, name: 'Math', description: 'Math is a subject that deals with numbers and shapes.' },
    { id: 2, name: 'Science', description: 'Science is a subject that deals with the natural world.' },
    { id: 3, name: 'History', description: 'History is a subject that deals with the past.' },
    { id: 4, name: 'English', description: 'English is a subject that deals with the English language.' },
    { id: 5, name: 'Social Studies', description: 'Social Studies is a subject that deals with the social sciences.' },
    { id: 6, name: 'Computer Science', description: 'Computer Science is a subject that deals with the computer.' },
    { id: 7, name: 'Art', description: 'Art is a subject that deals with the arts.' },
    { id: 8, name: 'Music', description: 'Music is a subject that deals with the music.' },
];

const ClassSubject = () => {
    const params = useParams();
    const router = useRouter();
    const classId = params.classId;
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                All Subjects of Class {classId}
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

export default ClassSubject; 