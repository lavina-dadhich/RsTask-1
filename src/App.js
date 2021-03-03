import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Page from "./components/page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';


function App (){
  const topLink = [
    {
      linkTitle: "Dashboard",
      linkURL: "/admin",
    },
    {
      linkTitle: "Starred",
      linkURL: "/admin",
    },
    {
      linkTitle: "Send email",
      linkURL: "/admin",
    },
    {
      linkTitle: "Drafts",
      linkURL: "/admin",
    },
  ]
  const planSection = [

    {
      linkTitle: "Vision, Values & Mission",
      linkURL: "/admin",
    },
    {
      linkTitle: "Financial Measures",
      linkURL: "/admin",
    },
    {
      linkTitle: "Our Offer",
      linkURL: "/admin",
    },
    {
      linkTitle: "Pest Analysis",
      linkURL: "/admin",
    },
    {
      linkTitle: "Swot Analysis",
      linkURL: "/admin",
    },
    {
      linkTitle: "Goals & Objectives",
      linkURL: "/admin",
    },
    {
      linkTitle: "Strategies",
      linkURL: "/admin",
    },
    {
      linkTitle: "Section 9",
      linkURL: "/admin",
    },
    {
      linkTitle: "Section 10",
      linkURL: "/admin",
    },
  ]
  return (
    <Router>
       <Header topArray={topLink} bottomArray={planSection}/>
       <Page/>
        <Switch>
          <Route ></Route>
          <Switch>
          <Route path="/" exact component={Page} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login-up" component={Login} />
        </Switch>
        </Switch>
    </Router>
  );
}

export default App;
