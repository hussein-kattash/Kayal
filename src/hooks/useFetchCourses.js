import { useState, useContext} from "react";
import apiClient from "../services/api-client";
import { CoursesContext } from "../context/CoursesContext";

export const useFetchCourses = ()=>{
  const {setCourses} = useContext(CoursesContext)
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function getAllCourses() {
        setLoading(true);
        apiClient
          .get("/Al-amin/manager/courses/get-all")
          .then((res) => {
            setCourses(res.data.data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.response.data.message);
            setLoading(false);
          });
      }

      return {error, loading, getAllCourses}
}