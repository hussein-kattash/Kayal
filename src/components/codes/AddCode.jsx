import { Button } from "@mui/material"
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import { useAddLevel } from "../../hooks/useAddLevel";
import { CircularProgress } from '@mui/material';
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useAddCode } from "../../hooks/useAddCode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const AddCode = () => {
    const {id} = useParams()
    const [open, setOpen] = useState(false);
    const [numberOfNumber, setNumberOfCode] = useState("");
    const { loading, addCode } = useAddCode();

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

        
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const onSubmit = async (event) => {
        event.preventDefault();
        const res = await addCode({course_id: id, number_of_codes: numberOfNumber, expiry_time:90});
       if(res === 200){
        handleClose()
        notify()
       }
      };

  return (
    <>
     <Button
        sx={{ textTransform: "capitalize", mt:"10px" }}
        variant="contained"
        onClick={handleClickOpen}
        >
        Add Code
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
          Add Code For This Course
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Number of Codes"
            type="number"
            fullWidth
            variant="filled"
            value={numberOfNumber}
            onChange={(e)=> setNumberOfCode(e.target.value)}
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
    </>
  )
}

export default AddCode