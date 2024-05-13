import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const IsValidate = () => {
    let isProceed = true;
    let errorMessage = "Please enter the value in ";

    if (!email) {
      isProceed = false;
      errorMessage += "Email";
    }
    if (!password) {
      isProceed = false;
      errorMessage += " Password";
    } else if (password.length < 6) {
      // Check if password is less than 6 characters
      isProceed = false;
      errorMessage += " Password must be at least 6 characters";
    }
    if (currentState === "Sign Up" && !name) {
      isProceed = false;
      errorMessage += " Name";
    }
    if (!isChecked) {
      // Check if checkbox is checked
      isProceed = false;
      errorMessage = "Please fill the Checkbox";
    }

    if (!isProceed) {
      toast.warning(errorMessage);
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      isProceed = false;
      toast.warning("Please enter a valid email");
    }
    return isProceed;
  };

  const handleLoginOrSignUp = (e) => {
    e.preventDefault();
    if (!IsValidate()) {
      return;
    }

    if (currentState === "Login") {
      console.log("Login: ", { email, password });
      toast.success("Login successful!");
    } else {
      console.log("Sign Up: ", { name, email, password });

      // Make a POST request to JSON Server API endpoint
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("User created successfully:", data);
          toast.success("User created successfully!");
        })
        .catch((error) => {
          console.error("Error creating user:", error);
          toast.error("Error creating user. Please try again later.");
          
        });
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleLoginOrSignUp}>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? null : (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            
          />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPopup;
