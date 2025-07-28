"use client";
import { useRouter, useParams } from "next/navigation";
import { Card, CardContent, Typography, Button, Box, Grid } from "@mui/material";

const dummyData = {
  students: 30,
  teachers: 3,
  subjects: 6,
};

const ClassDetails = () => {
  const router = useRouter();
  const params = useParams();
  const classId = params.classId;
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Class Details of {classId}
      </Typography>
      <Button variant="outlined" onClick={() => router.back()} sx={{ mb: 3 }}>
        Go Back
      </Button>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Students</Typography>
              <Typography variant="body1">
                <strong>Total Students:</strong> {dummyData.students}
              </Typography>
              <Button variant="contained" color="primary" onClick={() => router.push(`/admin/classes/${classId}/students`)}>
                View Students
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Teachers</Typography>
              <Typography variant="body1">
                <strong>Total Teachers:</strong> {dummyData.teachers}
              </Typography>
              <Button variant="contained" color="primary" onClick={() => router.push(`/admin/classes/${classId}/teachers`)}>
                View Teachers
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Subjects</Typography>
              <Typography variant="body1">
                <strong>Total Subjects:</strong> {dummyData.subjects}
              </Typography>
              <Button variant="contained" color="primary" onClick={() => router.push(`/admin/classes/${classId}/subjects`)}>
                View Subjects
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClassDetails; 