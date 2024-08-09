import Navbar from "../components/Navbar";
import { Box, Card, Typography } from "@mui/material";
import { useFetchCourseDetails } from "../hooks/useFetchCourseDetails";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const CourseDetails = () => {
  const { id } = useParams();
  const {course, getCourseDetails, loading} = useFetchCourseDetails(id)
  useEffect(()=>{
    getCourseDetails()
  },[])
  return (
    <>
      <Navbar/>
      <Box>
        <Card variant="outlined" sx={{padding:'20px', display:'flex', flexDirection:"column", width:"800px", height:"600px", m:"20px auto"}}>
          <Typography sx={{textAlign:'center'}} variant="h4">Course details</Typography>
          {course}
        </Card>
      </Box>
    </>
  )
}

export default CourseDetails