// components/Login.js
// components/Login.js
// import React, { useState, useContext } from "react";
// import { AuthContext } from "./AuthContext";

// const Login = () => {
//   const [password, setPassword] = useState("");
//   const { login } = useContext(AuthContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(password);
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-black text-white">
//       <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded">
//         <h2 className="mb-4">Login</h2>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="p-2 mb-4 w-full"
//           placeholder="Enter password"
//         />
//         <button type="submit" className="bg-green-500 px-4 py-2 rounded">
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// components/Login.js
import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(password);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-900 to-green-600 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded shadow-lg transform transition-transform duration-500 ease-in-out"
        style={{ animation: "fadeIn 1s ease-in-out forwards" }}
      >
        <h2 className="mb-4 text-2xl font-bold text-center animate-fadeIn">
          Login
        </h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 w-full rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-500 animate-fadeIn"
          placeholder="Enter password"
          style={{ animationDelay: "0.5s" }}
        />
        <button
          type="submit"
          className="bg-green-500 px-4 py-2 rounded w-full transition-transform duration-500 ease-in-out transform hover:scale-105 animate-fadeIn"
          style={{ animationDelay: "1s" }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
