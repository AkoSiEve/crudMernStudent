import React, { useEffect, useState } from "react";
import { Container,Form,Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

const StudentView = () => {

    const _id = useParams();
    const navigate = useNavigate()
    //declaring state
    const [student,setStudent] = useState({
        firstname:'',
        lastname:'',
        age:''
    })

    const fetchStudentById = async () =>{
        try{
            const id = _id.id
            const student = await axios.get(`http://localhost:8000/api/student/${id}`)
            setStudent(student.data.student)
        }catch(err){
            console.log(err.message)
        }
    }
    useEffect(()=>{
        fetchStudentById()
    })

  return (
    <>
      <Container style={{ padding: "20px" , width:"70%"}}>
        <h3>view student</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Firstname</Form.Label>
            <Form.Control type="text" value={student.firstname} placeholder="firstname" disabled/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword" >
            <Form.Label>Lastname</Form.Label>
            <Form.Control type="text" value={student.lastname} placeholder="lastname" disabled/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>age</Form.Label>
            <Form.Control type="text" value={student.age} placeholder="age" disabled/>
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={()=>navigate(-1)}>back</Button>
      </Container>
    </>
  )
}

export default StudentView