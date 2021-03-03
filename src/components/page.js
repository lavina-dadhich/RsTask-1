import React from "react";
import "../components/header.css";
import { Link } from 'react-router-dom';

function Page() {
  return (
    <div>
      <div className="main">
        <h2>page login/sign  up</h2>
        <Link to="/login-up">
          <button>Login up</button>
        </Link>
        <br></br>
        <Link to="/sign-up">
          <button>Sign up</button>
        </Link> 
      </div>
    </div>
  );
}

export default Page;
