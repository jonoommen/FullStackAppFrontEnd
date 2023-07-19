import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import AddStudent from "./students/AddStudent";
import EditStudent from "./students/EditStudent";
import ViewStudent from "./students/ViewStudent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/addstudent" element={<AddStudent />} />
          <Route exact path="/editstudent/:id" element={<EditStudent />} />
          <Route exact path="/viewstudent/:id" element={<ViewStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
