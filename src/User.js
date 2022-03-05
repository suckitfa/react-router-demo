import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
export default function User() {
    const navigate = useNavigate()
    const go2Home = () => {
        navigate('/')
    }
    const {username} = useParams()

  return (
      <div>
          <h3>Hello,{username}</h3>
          <button onClick={go2Home}>back</button>
      </div>
  )
}
