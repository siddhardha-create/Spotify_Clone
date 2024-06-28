// import React, { useContext } from "react";
// import Sidebar from "./components/Sidebar";
// import Player from "./components/Player";
// import Display from "./components/Display";
// import { PlayerContext } from "./components/Playercontext";

// const App = () => {
//   const { audioRef, track } = useContext(PlayerContext);
//   return (
//     <div className="h-screen bg-black">
//       <div className="h-[90%] flex">
//         <Sidebar />
//         <Display />
//       </div>
//       <Player />
//       <audio ref={audioRef} src={track.file} preload="auto"></audio>
//     </div>
//   );
// };

// export default App;

// App.js
// App.js
import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./components/Playercontext";
import { AuthContext } from "./components/AuthContext";
import Login from "./components/Login";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
