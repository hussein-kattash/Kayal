import { useState } from "react";
import apiClient from "../services/api-client";

export const useDeleteLevel = (levelId)=>{
    const [loading, setLoading] = useState(false);

    const deleteLevel = async ()=> {
        
        setLoading(true);
        try {
          const response = await apiClient.delete(`/Al-amin/manager/courses/delete/${levelId}`);
          return response.status;
        } catch (error) {
             console.error(error)
        } finally {
          setLoading(false);
        }
      };

      return {loading, deleteLevel};
}