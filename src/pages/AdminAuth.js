import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";
  import React, { useState } from "react";
  import { toast } from "react-toastify";
  import { auth } from "../firebase";
  import { useNavigate } from "react-router-dom";
  
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  
  const Auth = ({ setActive, setUser }) => {
    const [state, setState] = useState(initialState);
    const [signUp, setSignUp] = useState(false);
  
    const { email, password, firstName, lastName, confirmPassword } = state;
  
    const navigate = useNavigate();
    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value });
    };
  
    // const handleAdminAuth = async (e) => {
    //     e.preventDefault();
    //     if (email && password) {
    //       try {
    //         const { user } = await signInWithEmailAndPassword(auth, email, password);
    //         setUser(user);
    //         console.log(user?.email); 
    //         console.log("hilo")
    //         // Check if the signed-in user's email matches the specific email
    //         if (user?.email === "21103167@mail.jiit.ac.in") {
    //           // Redirect to "/dashboard"
    //           navigate("/dashboard");
    //         } else {
    //           // If email doesn't match, redirect to "/notfound"
    //           navigate("/annapurna");
    //         }
    //       } catch (error) {
    //         // Handle sign-in errors here (e.g., invalid credentials)
    //         console.error("Sign-in error:", error.message);
    //         // Show an error toast or handle the error in a way that fits your UI
    //       }
    //     } else {
    //       // If email or password is missing, show an error toast
    //       toast.error("All fields are mandatory to fill");
    //     }
    //   };
      const handleAdminAuth = async (e) => {
  e.preventDefault();
  console.log("Handling admin authentication...");
  if (email && password) {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", user?.email);
      setUser(user);
      // Check if the signed-in user's email matches the specific email
      if (user?.email === "deepti1028@gmail.com") {
        // Redirect to "/dashboard"
        console.log("Redirecting to /dashboard");
        navigate("/dashboard");
      } else {
        // If email doesn't match, redirect to "/annapurna"
        console.log("Redirecting to /annapurna");
        navigate("/annapurna");
      }
    } catch (error) {
      // Handle sign-in errors here
      console.error("Sign-in error:", error.message);
    }
  } else {
    // If email or password is missing, show an error toast
    toast.error("All fields are mandatory to fill");
  }
};

  
    return (
      <div className="container-fluid mb-4">
        <div className="container">
          <div className="col-12 text-center">
            <div className="text-center heading py-2">
              {!signUp ? "Sign-In" : "Sign-Up"}
            </div>
          </div>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
              <form className="row" onSubmit={handleAdminAuth}>
                {signUp && (
                  <>
                    <div className="col-6 py-3">
                      <input
                        type="text"
                        className="form-control input-text-box"
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6 py-3">
                      <input
                        type="text"
                        className="form-control input-text-box"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}
                <div className="col-12 py-3">
                  <input
                    type="email"
                    className="form-control input-text-box"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 py-3">
                  <input
                    type="password"
                    className="form-control input-text-box"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                {signUp && (
                  <div className="col-12 py-3">
                    <input
                      type="password"
                      className="form-control input-text-box"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                )}
                <div className="col-12 py-3 text-center">
                  <button
                    className={`btn ${!signUp ? "btn-sign-in" : "btn-sign-up"}`}
                    type="submit"
                  >
                    {!signUp ? "Sign-in" : "Sign-up"}
                  </button>
                </div>
              </form>
              <div>
                {!signUp ? (
                  <>
                    <div className="text-center justify-content-center mt-2 pt-2">
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account ?&nbsp;
                        <span
                          className="link-danger"
                          style={{ textDecoration: "none", cursor: "pointer" }}
                          onClick={() => setSignUp(true)}
                        >
                          Sign Up
                        </span>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center justify-content-center mt-2 pt-2">
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Already have an account ?&nbsp;
                        <span
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "#298af2",
                          }}
                          onClick={() => setSignUp(false)}
                        >
                          Sign In
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Auth;
  