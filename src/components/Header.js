import React from "react";
import "../components/header.css";
import { useLocation } from "react-router-dom";
function Header(props) {
  //  const [toggle, setToggle] = useState(false);

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="sidenav">
      {props.topArray.map((item) => (
        <a href="/" key={item.id}>
          {item.linkTitle}
        </a>
      ))}
      {location.pathname === "/sign-up"
        ? props.bottomArray.map((item) => (
            <a href="/" key={item.id}>
              {item.linkTitle}
            </a>
          ))
        : ""}
    </div>
  );
}

export default Header;
