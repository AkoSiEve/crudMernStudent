import React, { useState } from 'react'
import { Container,Form,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const StudentAdd = () => {

  const navigate = useNavigate()

    //declaring state
    const [student,setStudent] = useState({
        firstname:'',
        lastname:'',
        age:''
    })

    const onChangeHandling = (event) => {
        event.preventDefault()
        const {name,value} = event.target
        
        setStudent((data)=>{
            return {
                ...data,
                [name]:value
            }
        })
    }

    const onClickHandling = async () => {
        try{
            const studentPost = await axios.post(`http://localhost:8000/api/student`,student)
            console.log(studentPost)
            if(studentPost.status===201){
                alert('successfully added')
                navigate('/')
            }
        }catch(err){
            console.log(err.message)
        }
    }

  return (
    <>
      <Container style={{ padding: "20px" , width:"70%"}}>
        <h3>Add student</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              placeholder="firstname"
              onChange={onChangeHandling}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              placeholder="lastname"
              onChange={onChangeHandling}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>age</Form.Label>
            <Form.Control
              type="text"
              name="age"
              placeholder="age"
              onChange={onChangeHandling}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={onClickHandling}>add student</Button>
        <Button variant="primary" onClick={()=>navigate(-1)}>back</Button>
      </Container>
    </>
  )
}

export default StudentAdd