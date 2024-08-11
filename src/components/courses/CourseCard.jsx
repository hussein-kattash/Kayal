import { Card, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfrimDialog from "../shared/ConfirmDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchCourses } from '../../hooks/useFetchCourses';
import { useDeleteCourse } from '../../hooks/useDeleteCourse';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseCard = ({ name, center , courseId}) => {
  const [open, setOpen] = useState(false);
  const {getAllCourses} = useFetchCourses()
  const {deleteCourse, loading} = useDeleteCourse(courseId)
  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goToCourseDetails = ()=>{
    navigate(`/courses/${courseId}`)
  }

  const notify = () =>
    toast.success("deleted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    async function confirmDelete() {
      const res = await deleteCourse();
      if (res === 200) {
        notify();
        handleClose();
        getAllCourses();
      } else {
        handleClose();
      }
    }
 
  return (
    <>
      <ConfrimDialog
        open={open}
        handleClose={handleClose}
        loading={loading}
        confirmDelete={confirmDelete}
      />
      <Card
        variant="outlined"
        sx={{ width: "100%", padding: "10px", m: "4px", cursor:'pointer' }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography onClick={goToCourseDetails} variant="h6">{name}</Typography>
          <DeleteIcon
            onClick={handleClickOpen}
            style={{ color: "red", cursor: "pointer"}}
          />
        </div>
        <Typography onClick={goToCourseDetails} variant="body1">{center}</Typography>
      </Card>
    </>
  );
};

export default CourseCard;
