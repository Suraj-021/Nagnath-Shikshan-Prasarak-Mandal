import React from "react";
import Link from "next/link";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

const classData = [
  { name: "Class 5", students: 30, teachers: 2 },
  { name: "Class 6", students: 28, teachers: 2 },
  { name: "Class 7", students: 32, teachers: 3 },
  { name: "Class 8", students: 27, teachers: 2 },
  { name: "Class 9", students: 25, teachers: 2 },
  { name: "Class 10", students: 29, teachers: 3 },
  { name: "Class 11", students: 20, teachers: 4 },
  { name: "Class 12", students: 18, teachers: 4 },
];

const cardStyle = {
  transition: "transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s cubic-bezier(.25,.8,.25,1)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.12), 0 1.5px 6px rgba(0,0,0,0.10)",
  borderRadius: "6px",
  '&:hover': {
    transform: "scale(1.05) translateY(-8px)",
    boxShadow: "0 16px 32px rgba(0,0,0,0.18), 0 3px 12px rgba(0,0,0,0.15)",
    background: "var(--primary, #fd7e14)",
    color: "#fff",
  },
  cursor: "pointer",
  minHeight: 250,
  background: "#fff",
};

const Classes = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#f5f5f5", py: 6 }}>
      <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 600, letterSpacing: 1 }}>
        Classes Overview
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {classData.map((cls, idx) => (
          <Grid item xs={12} sm={12} md={4} lg={4} key={cls.name}>
            <Link href={`/admin/classes/${encodeURIComponent(cls.name.replace(' ', '').toLowerCase())}`} style={{ textDecoration: 'none' }}>
              <Card sx={cardStyle} className="shadow-lg">
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {cls.name}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 0.5 }}>
                    <strong>Students:</strong> {cls.students}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Teachers:</strong> {cls.teachers}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Classes;