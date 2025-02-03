// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email == "admin@example.com" && password == "password") {
//       navigate("/users");
//     } else {
//       alert("Invalid credentials!");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2 class="login">Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <label class="Forgot-Password">Forgot Password  </label>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "password") {
      navigate("/users");
    } else {
      alert("Invalid credentials!");
    }
  };
  return (
    <div className="login-container">
      {" "}
      <div class="header-bar"></div>{" "}
      <div class="form-container">
        {" "}
        <h2 class="login">Login</h2>{" "}
        <form onSubmit={handleLogin} class="">
          {" "}
          <label>Email</label>{" "}
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />{" "}
          <label>Password</label>{" "}
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />{" "}
          <a href="#" class="forgot-password">
            Forget Password
          </a>{" "}
          <button type="submit" class="loginBtn">
            Login
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};
export default Login;
