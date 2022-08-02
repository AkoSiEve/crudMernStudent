import React from "react";
import Nav from "./component/Navbar/Navbar";
import { BrowserRouter as Router,Routes as Switch,Route } from "react-router-dom";
import StudentList from "./component/StudentList";
import StudentView from "./component/StudentView";
import StudentEdit from "./component/StudentEdit";
import StudentAdd from "./component/StudentAdd";

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route path="/" element={<StudentList />}></Route>
          <Route path="/view/:id" element={<StudentView />}></Route>
          <Route path="/edit/:id" element={<StudentEdit />}></Route>
          <Route path="/add" element={<StudentAdd />}></Route>
          
        </Switch>
      </Router>
    </>
  )
}

export default App