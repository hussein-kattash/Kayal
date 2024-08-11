import { useState } from "react";
import apiClient from "../services/api-client";

export const useFetchCodes = ()=>{
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [codes, setCodes] = useState([])

    async function getAllCodes(courseId) {
        setLoading(true);
        apiClient
          .get(`/Al-amin/manager/codes/get-all/${courseId}`)
          .then((res) => {
            setCodes(res.data.data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.response.data.message);
            setLoading(false);
          });
      }

      return {error, loading, getAllCodes, codes}
}