import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const StudentEdit = () => {

  const _id = useParams();
  const navigate = useNavigate();
  //declare state
  const [student, setStudent] = useState({
    firstname: "jerome",
    lastname: "eva",
    age: "22",
  });
  //get student by Id
  const fetchStudentById = async () => {
    try {
      const id = _id.id;
      const studentGet = await axios.get(`http://localhost:8000/api/student/${id}`);
      setStudent(studentGet.data.student);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchStudentById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const onChangeHandling = (event) => {
    event.preventDefault();
    try {
      const { name, value } = event.target;
      setStudent((preval) => {
        return {
          ...preval,
          [name]: value,
        };
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const onClickHandling = async () => {
    try{
        const id = _id.id;
        const studentPatch = await axios.patch(`http://localhost:8000/api/student/${id}`,student)
        console.log(studentPatch)

        if(studentPatch.status===200){
            alert('succefully update')
            navigate('/')
        }
        
    }catch(err){
        console.log(err.message)
    }
  };

  return (
    <>
      <Container style={{ padding: "20px" , width:"70%" }}>
        <h3>Edit student</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              value={student.firstname}
              placeholder="firstname"
              onChange={onChangeHandling}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              value={student.lastname}
              placeholder="lastname"
              onChange={onChangeHandling}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>age</Form.Label>
            <Form.Control
              type="text"
              name="age"
              value={student.age}
              placeholder="age"
              onChange={onChangeHandling}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={onClickHandling}>
          update
        </Button>
        <Button variant="primary" onClick={() => navigate(-1)}>
          back
        </Button>
      </Container>
    </>
  )
}

export default StudentEdit