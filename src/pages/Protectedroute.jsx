import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // install with: npm i js-cookie

function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token"); // 👈 read token from cookies

    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      navigate("/userlogin");
    }
  }, [navigate]);

  if (isAuth === null) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
}

export default ProtectedRoute;

