import { useState } from "react";
import apiClient from "../services/api-client";

export const useAddTimeLine = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const addTimeLine = async (params, courseId)=>{
        setIsLoading(true);
        try {
          const response = await apiClient.post(`/Al-amin/manager/timelines/add/${courseId}`, params);
          return response.status;
        } catch (error) {
             console.error(error)
             setError(error.response.data)
        } finally {
            setIsLoading(false);
        }
    }
    return { error, isLoading, addTimeLine };
}