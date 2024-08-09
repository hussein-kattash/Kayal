import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFetchCourses } from '../../hooks/useFetchCourses';
import { useDeleteCourse } from '../../hooks/useDeleteCourse';
import { CircularProgress } from '@mui/material';

const ConfrimDialog = ({ handleClose, open, courseId})=>{
  const {getAllCourses} = useFetchCourses()
  const {deleteCourse, loading} = useDeleteCourse(courseId)

  const notify = () =>
    toast.success("successfully deleted!", {
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
        setTimeout(() => {
          getAllCourses();
        }, 3000);
      } else {
        handleClose();
      }
    }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete Confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             Are you sure you want to delete this course?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={confirmDelete} autoFocus>
            {loading ? (<CircularProgress  size={'30px'}/>) : 'Yes'}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default ConfrimDialog
