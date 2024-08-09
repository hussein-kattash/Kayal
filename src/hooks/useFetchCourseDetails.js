import { useState } from "react";
import apiClient from "../services/api-client";

export const useFetchCourseDetails = (id)=>{
    const [error, setError] = useState("");
    const [course, setCourse] = useState();
    const [loading, setLoading] = useState(false);

    function getCourseDetails(){
        setLoading(true);
        apiClient.get(`/Al-amin/manager/courses/get-all-for-category/${id}`)
        .then((res)=>{
            setCourse(res.data.data);
            setLoading(false);
        }).catch((err)=>{
            setError(err.response.data.message);
            setLoading(false);
        })
    }

    return{error, loading, course, getCourseDetails}
}