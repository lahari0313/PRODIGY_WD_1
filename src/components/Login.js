import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <Box
      sx={{
        backgroundColor: '#9ab973', // Replace with your desired background color
        minHeight: '100vh', // Ensures the Box takes the full height of the viewport
        py: 3, // Padding on the y-axis
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
       this is login
      </Typography>
      <Typography variant="body1">
        This is the 
        login page. You can login here.
      </Typography>
    </Box>
  );
}

export default Home;
