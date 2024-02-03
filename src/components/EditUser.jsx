import React,{useState,useEffect,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useParams } from 'react-router-dom';
import {UserContext} from '../utils/UserContextComponent'
function EditUser() {
  let {user,setUser} = useContext(UserContext)
let params = useParams() // this will return a object

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")

  let navigate = useNavigate() //this will return a function
    
  const findIndex = (id)=>{
    for(let i=0; i<user.length;i++)
    {
      if(id === user[i].id)
      return i
    }
  }
    const handleEdit = ()=>{
      let id = Number(params.id)
      let index = findIndex(id)
      let newArray = [...user] // deep copy, achieve inmutability
        newArray.splice(index,1,{
          id,
          name,
          email,
          mobile,
          batch
        })
        setUser(newArray)
        navigate(`/dashboard`)
    }
    // const getUserData = ()=>
    // let id = Number(params.id)
    // useEffect(()=>{
    //   getUserData()
    // },[])
      
     const getUserData = ()=>{
      let id = Number(params.id)
      let index = findIndex(id)
     
     setName(user[index].name)
     setEmail(user[index].email)
     setMobile(user[index].mobile)
     setBatch(user[index].batch)
    }


     useEffect(()=>{
      getUserData()
     },[])
     //useEffect - triggers before component rendering
     //useEffect without dependency array - triggers before component rendering and during state changes
    //   useEffect(()=>{
    //    console.log("Use Effect without Dependency Array")
    //  })

     //useEffect with empty dependency array -  trippers before component rendering only for first time
    //  useEffect(()=>{
    //   console.log("Use Effect with Empty Dependency Array")
    //  },[])
      
     //useEffect with dependency array - triggeres before component rendering and specified state change
    //  useEffect(()=>{
    //    console.log("Use Effect with Dependency Array")
    //  },(batch))


    return <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">EditUser</h1>
        </div>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter your mobile Number" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Batch name" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" onClick={()=>handleEdit()}>
        Submit
      </Button>
    </Form>
      </div>
    </div>
  </div>
}
export default EditUser