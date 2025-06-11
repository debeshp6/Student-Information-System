import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#9c27b0'}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,
          fontFamily: 'Libre Baskerville, serif', 
              fontWeight: 'bold',
              color: 'white'
          
           }}>
            Student Information System
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
