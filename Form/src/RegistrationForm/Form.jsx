import React from 'react'
import App from '../App'

function Form() {
  return (
    <div className="Form">
        <div className="Registration"><b>Registration</b></div>
        
        <form action="form.php">
            <div className="Details">
             <div className="Form-details">
           <span className="details">Full Name</span>
            <input type="text" className="input" placeholder="Enter your name"/>
        </div>
        <div className="Form-details">
            <span className="details">Username</span>           
                <input type="text" className="input" placeholder="Enter your user name"/>
        </div>
        <div className="Form-details">
            <span className="details">Email</span>
            <input type="text" className="input" placeholder="Enter your email"/>
        </div>
        <div className="Form-details">
            <span className="details">Phone Number</span>
            <input type="text" className="input" placeholder="Enter your number"/>
        </div>
        <div className="Form-details">
            <span className="details">Password</span>
            <input type="text" className="input" placeholder="Enter your password"/>
        </div>
        <div className="Form-details">
            <span className="details">Confirm Password</span>           
            <input type="text" className="input" placeholder="Confirm your password"/>
        </div>
    </div>
        <div className="gender_details">
        <span className="gender">Gender</span>
            <div className="category">
                <div className="gendert">
            <input type="radio" id="male" name="gender"/>
            <label for="male">Male</label>
        </div>
        <div className="gendert">
            <input type="radio" id="female" name="gender"/>
            <label for="female">Female</label>
        </div>
        <div className="gendert">
            <input type="radio" id="other" name="gender"/>
            <label for="other">Prefer not to say</label>
        </div>
        </div>
        </div>

        <div className="button">
            <input type="submit" value="Register"/>
        </div>
    
        </form>
    </div>
           
        
   
  )
}

export default Form