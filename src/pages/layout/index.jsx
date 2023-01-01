import React, { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'
import Navbar from 'components/Navbar'
import SideBar from 'components/SideBar'


const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <Box display={isNonMobile ? "flex" : "block" } width="100%" height="100%">
        <SideBar 
          user={{name: 'user', occupation: 'occupation'}}
          isNonMobile={isNonMobile}
          drawerWidth={250}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Box flexGrow={1}>
          <Navbar 
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />
          <Outlet />
        </Box>
        
    </Box>
  )
}

export default Layout