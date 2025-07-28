"use client";
import React from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Homepage = () => {
    return (
        <Container maxWidth="lg" sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid container spacing={4} alignItems="center">
                {/* @ts-ignore */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        {/* You can replace this with an SVG or image if available */}
                        <Typography variant="h1" sx={{ fontWeight: 800, color: 'var(--primary, #fd7e14)' }}>
                            🏫
                        </Typography>
                    </Box>
                </Grid>
                {/* @ts-ignore */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 4, borderRadius: 4, boxShadow: 3, bgcolor: '#fff' }}>
                        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#252525' }}>
                            Welcome to NSPM School Management System
                        </Typography>
                        <Typography sx={{ mb: 3, color: '#555' }}>
                            Streamline school management, class organization, and add students and faculty. Seamlessly track attendance, assess performance, and provide feedback. Access records, view marks, and communicate effortlessly.
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Link href="/admin/classes" passHref legacyBehavior>
                                <Button variant="contained" color="primary" size="large" sx={{ bgcolor: 'var(--primary, #fd7e14)', color: '#fff', fontWeight: 600 }}>
                                    Go to Classes
                                </Button>
                            </Link>
                            <Link href="/admin/classes/class5/students" passHref legacyBehavior>
                                <Button variant="outlined" color="primary" size="large" sx={{ borderColor: 'var(--primary, #fd7e14)', color: 'var(--primary, #fd7e14)', fontWeight: 600 }}>
                                    View Students
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Homepage;
