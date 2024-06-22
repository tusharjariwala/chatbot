import React, { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useDispatch, useSelector } from "react-redux";
import userDetails from "./hook/userDetails";

import { Spinner } from "./Common/Loader/Styled";
import { setLoading, setUser } from "./components/redux/user/user.reducer";

const App = () => {
  const dispatch = useDispatch();
  const { isLogging, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setLoading(true));
    const unState = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await userDetails(user.uid, dispatch);
      } else {
        dispatch(setUser({ isLogging: false }));
      }
      dispatch(setLoading(false));
    });
    return () => {
      unState();
    };
  }, [dispatch]);

  const PrivateRoutes = () => {
    return isLogging ? <Outlet /> : <Navigate to="/login" />;
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
