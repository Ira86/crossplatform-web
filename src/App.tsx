import React, { useState } from "react";
import "./App.css";
import { CreateUser } from "./components/CreateUser";
import { UserList } from "./components/UserComponent/UserList";

function App() {
  const [showUserList, setShowUserList] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button
            style={{
              backgroundColor: showUserList ? "purple" : "white",
              color: showUserList ? "white" : "purple",
              margin: "10px",
            }}
            className="submitButton"
            onClick={() => setShowUserList(false)}
          >
            Skapa användare
          </button>
          <button
            style={{
              backgroundColor: showUserList ? "white" : "purple",
              color: showUserList ? "purple" : "white",
              margin: "10px",
            }}
            className="submitButton"
            onClick={() => setShowUserList(true)}
          >
            Lista användare
          </button>
          {showUserList ? <UserList /> : <CreateUser />}
        </div>
      </header>
    </div>
  );
}

export default App;
