import React, {useState, useEffect} from 'react'

const App = () => {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch(import.meta.env.VITE_API + '/users')
      .then(res => res.json())
      .then(result => {
        setUsers(result)
      })
  }, [])
  return (
    <div>
      <ul>
        {users.map((user)=>(
          <li>{user.id} {user.name} {user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default App