
import Navbar from '../components/Navbar'
import { Box, Typography } from '@mui/material'
function HomePages() {
  return (
    <div>
      <Navbar/>
      <Box sx={{padding:'20px'}}>
        <Typography variant='h3'>Welcome to dashbord</Typography>
      </Box>
    </div>
  )
}

export default HomePages