
import React, { FunctionComponent } from 'react';
import Sidebar from '../SideBar/Sidebar';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from '@mui/material/Switch';

import { Home } from './Home';


export const Master: FunctionComponent = () => {
  return (
        <Router>    
            <Sidebar />
                <Route path="/Home" element={<Home />} />       
        </Router>
  );
};
