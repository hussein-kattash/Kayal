import { Card, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfrimDialog from "./ConfirmDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ name, center , courseId}) => {
  const [open, setOpen] = useState(false);
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
 
  return (
    <>
      <ConfrimDialog
        open={open}
        handleClose={handleClose}
        courseId={courseId}
      />
      <Card
        onClick={goToCourseDetails}
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
          <Typography variant="h6">{name}</Typography>
          <DeleteIcon
            onClick={handleClickOpen}
            style={{ color: "red", cursor: "pointer" }}
          />
        </div>
        <Typography variant="body1">{center}</Typography>
      </Card>
    </>
  );
};

export default CourseCard;
