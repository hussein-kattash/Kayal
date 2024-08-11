import { useState } from "react";
import apiClient from "../services/api-client";

export const useAddLevel = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const addLevel = async (params)=>{
        setLoading(true);
        try {
          const response = await apiClient.post(`/Al-amin/manager/levels/add`, params);
          return response.status;
        } catch (error) {
             console.error(error)
             setError(error.response.data)
        } finally {
          setLoading(false);
        }
    }
    return { error, loading, addLevel };
}