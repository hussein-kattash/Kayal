import Login from "./pages/LoginPage";
import HomePages from "./pages/HomePages";
import CoursesPage from "./pages/CoursesPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import AddCoursePage from "./pages/AddCoursePage";
import CourseDetails from "./pages/CourseDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth loginPath="/login">
                <HomePages />
              </RequireAuth>
            }
          />
          <Route
            path="/courses"
            element={
              <RequireAuth loginPath="/login">
                <CoursesPage />
              </RequireAuth>
            }
          />
           <Route
            path="/addcourse"
            element={
              <RequireAuth loginPath="/login">
                <AddCoursePage />
              </RequireAuth>
            }
          />
          <Route
            path="/courses/:id"
            element={
              <RequireAuth loginPath="/login">
                <CourseDetails/>
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
