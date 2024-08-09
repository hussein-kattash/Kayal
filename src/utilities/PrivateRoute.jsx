import { Navigate } from 'react-router-dom'


function PrivateRoute({ children }) {
  const storedToken = localStorage.getItem("authToken");

  if (!storedToken) {
    return <Navigate to="/login"/>
  }
  return children
}
export default PrivateRoute;