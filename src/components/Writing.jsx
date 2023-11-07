import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const Writing = () => {

  return (
    <div>
      <CssBaseline />
      <AppBar style={{ background: 'white', marginBottom:'20px' }} position='static'>
        <Toolbar >
          <Box style={{margin: '0 auto', display: "flex"}}>
            <Avatar variant="square" src={img} style={{width:'60px', height:'50px'}}/>
          </Box>
         <Box sx={{ flexGrow: 0 }}>
            <Box>
              <Button
              onClick={() => {navigate('/writing')}}
              style={{ background: '#1d71e4',
              color:'white',
              borderRadius:'5px'
              }}>
                Writing
              </Button >
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Writing;
