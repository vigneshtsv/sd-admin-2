import React,{useState} from'react'
export const UserContext = React.createContext()

function UserContextComponent({children}) {
  let [user, setUser] = useState([
    {
      id: 1,
      name: "Vignesh",
      email: "vignesh@gmail.com",
      mobile: "9830284872",
      batch: "B53",
    },
    {
      id: 2,
      name: "Hari",
      email: "hari@gmail.com",
      mobile: "9838564792",
      batch: "B53",
    },
    {
      id: 3,
      name: "Sabari",
      email: "sabari@gmail.com",
      mobile: "9858528472",
      batch: "B53",
    },
    {
      id: 4,
      name: "naganathan",
      email: "naga@gmail.com",
      mobile: "985648472",
      batch: "B53",
    },
  ]);
  return <UserContext.Provider value = {{user,setUser}}>
  {children}
  </UserContext.Provider>
}

export default UserContextComponent
