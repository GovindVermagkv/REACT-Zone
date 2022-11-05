import React, { useState } from 'react'

function App() {

  const [formdata,setFormData]=useState({
    userName: "",
    password:""
  })
  // const [data,setData]=useState([])
  const [isSubmit,setIsSubmit]= useState(false)
  const handleChange=(e)=>{
    console.log(e)
    const {name,value}= e.target
    setFormData({...formdata,[name]:value})

  }
  const handleSubmit=(e)=>{
    e.preventDefault()

// setData(data.push(formdata))
if(formdata.userName.length===0 || formdata.password.length===0){
  setIsSubmit(false)
}else{
  setIsSubmit(true)
}

  }
  return (
    <>{isSubmit? <h1>Welcome User {formdata.userName}</h1>: <form >
    <div>
      <label htmlFor='userName'>UserName</label>
      <input onChange={handleChange} type="text" name="userName" id="userName" value={formdata.userName}/>
    </div>
    <div>
      <label htmlFor='password'>password</label>
      <input  onChange={handleChange} type="password" name="password" id="password" value={formdata.password}/>
    </div>
    <button type='submit' onChange={handleSubmit}>Submit</button>
  </form>}</>
   
  )
}

export default App