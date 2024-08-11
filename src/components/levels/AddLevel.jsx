import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAddLevel } from "../../hooks/useAddLevel";
import { useParams } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFetchLevelsForOneCourse } from "../../hooks/useFetchLevelsForOneCourse";

const AddLevel = () => {
  const { id } = useParams();
  const { getAllLevels } = useFetchLevelsForOneCourse();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const { loading, addLevel } = useAddLevel();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notify = () =>
    toast.success("added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const onSubmit = async (event) => {
    event.preventDefault();
    const res = await addLevel({
      video: null,
      name,
      description,
      course_id: id,
      files: [],
      videos: [],
    });
   if(res === 200){
    handleClose()
    notify()
    getAllLevels(id)
   }
  };

  return (
    <React.Fragment>
      <Button
        sx={{ textTransform: "capitalize" }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Add Level
      </Button>
      <Dialog
        fullWidth={"lg"}
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: onSubmit,
        }}
      >
        <DialogTitle sx={{ backgroundColor: "#234250", color: "white" }}>
          Level Form
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Description"
            required
            multiline
            maxRows={20}
            variant="filled"
            fullWidth
            sx={{ marginTop: "20px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ textTransform: "capitalize" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={{ textTransform: "capitalize" }} type="submit">
            {loading ? (<CircularProgress  size={'30px'}/>) : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AddLevel;
