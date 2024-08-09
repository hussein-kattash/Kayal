import { Card, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Navbar from "../components/Navbar";
import { useState } from "react";
import apiClient from "../services/api-client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCoursePage = () => {
  const [loading, setLoading] = useState(false);
  const [validation, setVlidation] = useState(false);
  const [name, setName] = useState("");
  const [center, setCenter] = useState("");

  const createCourse = async () => {
    if (!name || !center) {
      setVlidation(true);
    } else {
      setLoading(true);
      await apiClient
        .post("/Al-amin/manager/courses/add", {
          name,
          center,
          collage_year_id: null,
        })
        .then((res) => {
          setLoading(false);
          setCenter('')
          setName('')
          toast.success('successfuly complated!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        })
        .catch((err) => {
            console.error(err)
            setLoading(false);
        });
    }
  };
  return (
    <>
      <ToastContainer/>
      <Navbar />
      <Card
        sx={{
          width: "600px",
          height: "300px",
          m: "50px auto",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "10px",
        }}
      >
        <Typography variant="h5" sx={{textAlign:'center'}}>Add Course</Typography>
        <TextField
          error={!name && validation ? true : false}
          helperText={!name && validation && "This field is required"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="filled-basic"
          label="Name"
          variant="filled"
        />
        <TextField
          error={!center && validation ? true : false}
          helperText={!center && validation && "This field is required"}
          value={center}
          onChange={(e) => setCenter(e.target.value)}
          id="filled-basic"
          label="Center"
          variant="filled"
        />
        {/* <Button onClick={createCourse} variant="contained" sx={{textTransform:'capitalize'}}>Create Course</Button> */}
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
          onClick={createCourse}
        >
          Create Course
        </LoadingButton>
      </Card>
    </>
  );
};
("");
export default AddCoursePage;
