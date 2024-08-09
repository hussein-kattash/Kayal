import { createContext, useState } from "react";

export const CoursesContext = createContext({
  courses: [],
  setCourses: () => {},
});

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  return (
    <CoursesContext.Provider value={{ setCourses, courses }}>
      {children}
    </CoursesContext.Provider>
  );
};
