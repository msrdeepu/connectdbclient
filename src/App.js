import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";


function App() {
  return (
    <BrowserRouter>
     
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              {/* //logo part */}
              <Navbar.Brand>
                <Link to="/create-student" className="nav-link">
                  CRUD APP
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to="/create-student" className="nav-link">
                  Create Student
                  </Link>
                </Nav>

                <Nav>
                  <Link to="/edit-student/:id" className="nav-link">
                  Edit Student
                  </Link>
                </Nav>

                <Nav>
                  <Link to="/student-list" className="nav-link">
                  Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>

          </Navbar>
        </header>
        
          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<CreateStudent />} />
                  <Route exact path="/create-student" element={<CreateStudent />} />
                  <Route exact path="/edit-student/:id" element={<EditStudent />} />
                  <Route exact path="/student-list" element={<StudentList />} />
                </Routes>
                </div>
              </Col>
            </Row>
          </Container>
      </div>

     
    </BrowserRouter>
  );
}

export default App;
