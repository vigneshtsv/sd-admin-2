import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function AddUser({user,setUser}) {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")
  let navigate = useNavigate()
    const handleCreate = ()=>{
        let id = user.length?user[user.length-1].id+1 : 1 //fetch the last index element.id+1 or if array is empty
        let newArray = [...user] // deep copy, achieve inmutability
        newArray.push({
          id,
          name,
          email,
          batch,
          mobile
        })
        setUser(newArray)
        navigate(`/dashboard`)
    }

    return <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <div className="container-fluid">
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" placeholder="Enter your mobile Number" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Batch name" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" onClick={()=>handleCreate()}>
        Submit
      </Button>
    </Form>
      </div>
    </div>
  </div>
}
export default AddUser