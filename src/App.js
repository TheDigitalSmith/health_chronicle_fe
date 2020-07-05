import React from "react";
import NavigationBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import UserProfile from "./Pages/UserProfile/UserProfile";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Switch>
        <Route path="/me" component={UserProfile}></Route>
        <Route path="/" component={Homepage}></Route>
      </Switch>
      {/* <UserProfile></UserProfile> */}
      {/* <Homepage></Homepage> */}
      <Footer></Footer>
    </>
  );
}

export default App;
