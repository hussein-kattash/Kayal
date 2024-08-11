import { useState, useContext} from "react";
import apiClient from "../services/api-client";
import { LevelsContext } from "../context/LevelsContext";

export const useFetchLevelsForOneCourse = ()=>{
  const {setLevels} = useContext(LevelsContext)
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function getAllLevels(courseId) {
        setLoading(true);
        try {
            const response = await apiClient.get(`/Al-amin/manager/levels/get-all/${courseId}`);
            setLevels(response.data.data)
          } catch (error) {
            setError(error.response.data.message)
          } finally {
            setLoading(false);
          }
      }

      return {error, loading, getAllLevels}
}