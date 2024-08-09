import { useEffect, useContext } from "react";
import { CoursesContext } from "../../context/CoursesContext";
import Alert from "@mui/material/Alert";
import { Box, CircularProgress, Grid } from "@mui/material";
import CourseCard from "./CourseCard";
import { useFetchCourses } from "../../hooks/useFetchCourses";
import { ToastContainer } from "react-toastify";

const Courses = () => {
  const {courses} = useContext(CoursesContext)
  const {getAllCourses, loading} = useFetchCourses()

  useEffect(() => {
    getAllCourses();
  }, []);


  return (
    <Box>
      <ToastContainer/>
      {loading ? (
        <CircularProgress sx={{ m: "20px auto", display: "block" }} />
      ) : (
        <Grid container spacing={2} sx={{ padding: "20px" }}>
          {courses?.map((course) => (
            <Grid item xs={4} key={course.id} sx={{ padding: "10px" }}>
              <CourseCard
                center={course.center}
                name={course.name}
                courseId={course.id}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <Box sx={{ padding: "20px" }}>
        {!loading && courses.length === 0 && (
          <Alert
            severity="info"
            sx={{
              fontSize: "20px",
              padding: "10px",
              height: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Currently, there are no courses.
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default Courses;
