const Formulario = (props) => {

  const {data, setData} = props;
  
  const change = (e) => {
    setData ({
      ...data,
    [e.target.name]: e.target.value
    
    }
  );
  }

  const  nameError = (e) => {
    if (e.length <= 0){
      return ""
    } else if (e.length < 3){
      return <p className="error">Must be least 2 characters</p>
    } else {
      return ""
    }
}

const  emailError = (e) => {
  if (e.length <=0){
  return ""
  } else if(e.length < 6){
  return <p className="error">Must be least 5 characters</p>
  } else{
    return ""
  }
}

const  passwordError = (e) => {
if (e.length <= 0){
return ""
} else if (e.length < 8)
return <p className="error">Must be least 8 characters</p>
else{
  return ""
} 
}

const  errorConfirmPassword = (e) => {
if (e.length <= 0){
return ""
} else if (e.length < 8)
return <p className="error">Must be least 8 characters</p>
else{
return ""
} 
}

const  matchPasswords = (e) => {
if (data.confirmPassword.length === 0){
return ""
}  else if (data.confirmPassword !== data.Password){
return <p className="error"> Password must match </p>
} else{
return ""
}
}


  return (
    <>
      <form>
        <div className='Formulario'>
          <label>Name</label>
          <input type="text" name="Name"  onChange={change}/>
        </div>
        {nameError(data.Name)}
        <div>
          <label>Last Name</label>
          <input type="text" name= "LastName" onChange={change}/>
        </div>
        {nameError(data.LastName)}
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name= "Email" onChange={change}/>
        </div>
        {emailError(data.Email)}
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name= "Password" onChange={change}/>
        </div>
        {passwordError(data.Password)}
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name= "confirmPassword" onChange={change}/>
        </div>
        {errorConfirmPassword(data.confirmPassword)} {matchPasswords(data.confirmPassword)}
      </form>
    </>
  )
}

export default Formulario