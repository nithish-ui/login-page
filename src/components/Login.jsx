import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@example.com" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="bg-blue-800 h-2"></div>
        <div className="bg-blue-600 h-2"></div>
        <div className="bg-blue-400 h-2"></div>
        <div className="mb-4 text-center">
          <button className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-full w-3/4">
            LOGIN
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              className="shadow border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              className="shadow border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-end mb-4">
            <a className="text-teal-400 hover:text-teal-500 font-bold text-sm" href="#">
              Forgot Password?
            </a>
          </div>
          <button
            className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-4 px-8 rounded-full w-full"
            type="button"
            onClick={handleLogin}
          >
          
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
