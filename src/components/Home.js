import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffb6c1', // Replace with your desired background color
        minHeight: '100vh', // Ensures the Box takes the full height of the viewport
        py: 3, // Padding on the y-axis
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Your App
      </Typography>
      <Typography variant="body1">
        This is the homepage. You can add your content here.
      </Typography>
    </Box>
  );
}

export default Home;
