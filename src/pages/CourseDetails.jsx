import { useContext } from "react";
import Navbar from "../components/Navbar";
import {
  Alert,
  Box,
  Card,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import AddLevel from "../components/levels/AddLevel";
// import { ToastContainer } from "react-toastify";
import { useFetchLevelsForOneCourse } from "../hooks/useFetchLevelsForOneCourse";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LevelsContext } from "../context/LevelsContext";
import { useAddTimeLine } from "../hooks/useAddTimeLine";
import Level from "../components/levels/Level";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCode from "../components/codes/AddCode";
import AllCodes from "../components/codes/AllCodes";

const CourseDetails = () => {
  const { levels, selectedLevels, setSelectedLevels } =
    useContext(LevelsContext);
  const { addTimeLine, isLoading } = useAddTimeLine();
  const { id } = useParams();
  const { loading, getAllLevels } = useFetchLevelsForOneCourse();

  useEffect(() => {
    getAllLevels(id);
  }, []);

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

  const addTimeLineForLevels = async () => {
    const newData = selectedLevels.map((level) => ({
      level_id: level,
      quiz_id: null,
    }));
    const res = await addTimeLine({ data: newData }, id);
    if (res) {
      setSelectedLevels([]);
      notify();
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Box>
        <Card
          variant="elevation"
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "800px",
            height: "600px",
            m: "20px auto",
            overflowY: "auto",
          }}
        >
          {loading ? (
            <CircularProgress size={"60px"} />
          ) : (
            <Box
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ textAlign: "center" }} variant="h4">
                Course details
              </Typography>
              <Box sx={{ height: "80%", overflowY: "auto" }}>
                <Typography variant="h6">Levels:</Typography>
                {levels.length === 0 ? (
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
                    Currently, there are no levels for this course.
                  </Alert>
                ) : (
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "0px 0px 10px 0px",
                    }}
                  >
                    {levels?.map((level) => (
                      <div key={level.id} style={{ marginTop: "4px" }}>
                        <Level
                          name={level.name}
                          description={level.description}
                          levelId={level.id}
                        />
                      </div>
                    ))}
                  </Stack>
                )}
              </Box>
              <AddLevel/>
              <AddCode/>
              <AllCodes/>
              <Button
                sx={{ width: "100%", mt: "10px", textTransform: "capitalize" }}
                color="success"
                variant="contained"
                onClick={addTimeLineForLevels}
                disabled={selectedLevels.length === 0}
              >
                {isLoading ? (
                  <CircularProgress size={"25px"} />
                ) : (
                  "Add Timeline"
                )}
              </Button>
            </Box>
          )}
        </Card>
      </Box>
    </>
  );
};

export default CourseDetails;
