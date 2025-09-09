import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 
function Capitanprotected({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token"); 
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      navigate("/capitanlogin");
    }
  }, [navigate]);
  if (isAuth === null) {
    return <p>Loading...</p>;
  }
  return <>{children}</>;
}
export default Capitanprotected;
