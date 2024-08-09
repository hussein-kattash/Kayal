import { useState } from "react";
import "./login.css";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from '@mui/material/Alert';
import LoginIcon from '@mui/icons-material/Login';
import { useAuthentication } from "../../hooks/useAuthentication";
export default function Login() {
  const [adminInfo, setAdminInfo] = useState({
    user: "",
    phone: "",
  });
  const { error, loading, adminLogin } = useAuthentication(adminInfo);
  const [validate, setValidate] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!adminInfo.user || !adminInfo.phone) {
      setValidate(true);
    } else {
      adminLogin();
    }
  };
  return (
    <div className="LogIn-page">
      <div className="LogIn-form-page">
        <form>
          <div className="logo">Sign In</div>
          <div className="username">
            <input
              type="text"
              value={adminInfo.user}
              onChange={(event) =>
                setAdminInfo({ ...adminInfo, user: event.target.value })
              }
              placeholder="Username"
            />
            {!adminInfo.user && validate && (
              <p className="error">username is required</p>
            )}
          </div>
          <div className="password">
            <input
              type="password"
              value={adminInfo.phone}
              onChange={(event) =>
                setAdminInfo({ ...adminInfo, phone: event.target.value })
              }
              placeholder="Password"
            />
            {adminInfo.phone.length < 8 && validate && (
              <p className="error"> password must be more than 8 </p>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop:"30px"
            }}
          >
            <LoadingButton
              startIcon={<LoginIcon />}
              loading={loading}
              loadingPosition="start"
              style={{width:'80%', padding:'10px'}}
              variant="outlined"
              color="primary"
              onClick={handleSubmit}
            >
              Login
            </LoadingButton>
          </div>
          { error && ( 
            <Alert style={{width:'80%', margin:"30px auto"}} severity="error">
              User not found
            </Alert>
        )}
        </form>
      </div>
      <span className="square square-tl"></span>
      <span className="square square-tr"></span>
      <span className="square square-bl"></span>
      <span className="square square-br"></span>
      <span className="star star1"></span>
      <span className="star star2"></span>
    </div>
  );
}
