import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, Timestamp, collection } from "firebase/firestore";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = ({ setActive, setUser,user }) => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    console.log("name value in auth file");
    console.log(e.target.value);
    // setState({ ...state, [e.target.name]: e.target.value });
    setState((prevState) => {
      console.log("Updated state:", {
        ...prevState,
        [e.target.name]: e.target.value,
      });
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const { password, name, confirmPassword } = state;
  const navigate = useNavigate();
  const userID=user?.uid;
  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (!signUp) {
        // console.log("this is in auth details");
        // console.log(userID);
        // console.log(user?.displayName);
        // console.log(user?.email);
        if (email && password) {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          const user = userCredential.user;
          // Access user email directly
          const userEmail = user?.email;

          if (userEmail) {
            console.log("User AuthEmail:", userEmail);
            setUser(user);
            localStorage.setItem("users", JSON.stringify(user));
            setActive("home");
          } else {
            console.error("User email is undefined");
          }
        } else {
          toast.error("All fields are mandatory to fill");
        }
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
        console.log("in auth file checking state name:");
        console.log("State Name:", state.name);
        // Update user profile with the provided name
        await updateProfile(user, {
          displayName: state.name,
        });

        // Assuming you're using Firebase Firestore
        const userDoc = {
          name: state.name, // Use user.displayName if available, otherwise use the provided name
          uid: user.uid,
          email: user.email,
          time: Timestamp.now(),
        };

        const userRef = collection(db, "users");
        await addDoc(userRef, userDoc);

        toast.success("Signup Successfully");
      }

      navigate("/");
    } catch (error) {
      console.error("Authentication error:", error.message);
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
            <form className="row" onSubmit={handleAuth}>
              {signUp && (
                <>
                  <div className="col-12 py-3">
                    <input
                      type="text"
                      className="form-control input-text-box"
                      placeholder="Name"
                      name="name"
                      value={name}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                    <p className="small text-white fw-bold mt-2 pt-1 mb-0">
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
                    <p className="small text-white fw-bold mt-2 pt-1 mb-0">
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
