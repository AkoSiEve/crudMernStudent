import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentList = () => {
  //delacring state
  const [student, setStudentList] = useState([]);

  //studentlist get function
  const fetchStudentList = async () => {
    try {
      const student = await axios.get("http://localhost:8000/api/student");
      // console.log(student.data.student)
      setStudentList(student.data.student);
    } catch (err) {
      console.log(err.message);
    }
  };

  // terminate
  useEffect(() => {
    fetchStudentList();
  }, []);

  //student delete function
  const deleteStudentById = async (id) => {
    try {
      const student = await axios.delete(
        `http://localhost:8000/api/student/${id}`
      );
      if (student.status === 204) {
        fetchStudentList();
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Container style={{ padding: "20px", width: "70%" }}>
        <div className="d-flex flex-row-reverse">
          <Link to="/add">
            <Button variant="primary" style={{ margin: "5px" }}>
              Add Student
            </Button>
          </Link>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>firstnameq</th>
              <th>lastname</th>
              <th>age</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <Link to="/view">
                  <Button variant="primary">view</Button>
                </Link>
                <Link to='/edit'>
                  <Button variant="warning">edit</Button>
                </Link>
                <Button variant="danger">delete</Button>
              </td>
            </tr> */}
            {student.map((st, index) => (
              <tr key={index}>
                <td>{++index}</td>
                <td>{st.firstname}</td>
                <td>{st.lastname}</td>
                <td>{st.age}</td>
                <td>
                  <Link to={`/view/${st._id}`}>
                    <Button variant="primary">view</Button>
                  </Link>

                  <Link to={`/edit/${st._id}`}>
                    <Button variant="warning">edit</Button>
                  </Link>

                  <Button
                    variant="danger"
                    onClick={() => deleteStudentById(st._id)}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default StudentList;
