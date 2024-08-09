import { useState } from "react";
import apiClient from "../services/api-client";

export const useDeleteCourse = (courseId)=>{
    const [loading, setLoading] = useState(false);

    const deleteCourse = async ()=> {
        
        setLoading(true);
        try {
          const response = await apiClient.delete(`/Al-amin/manager/courses/delete/${courseId}`);
          return response.status;
        } catch (error) {
             console.error(error)
        } finally {
          setLoading(false);
        }
      };

      return {loading, deleteCourse};
}