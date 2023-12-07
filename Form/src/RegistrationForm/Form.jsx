import React from 'react'
import App from '../App'

function Form() {
  return (
    <div class="Form">
        <div className="Registration"><b>Registration</b></div>
        
        <form action="form.php">
            <div class="Details">
             <div class="Form-details">
           <span class="details">Full Name</span>
            <input type="text" class="input" placeholder="Enter your name"/>
        </div>
        <div class="Form-details">
            <span class="details">Username</span>           
                <input type="text" class="input" placeholder="Enter your user name"/>
        </div>
        <div class="Form-details">
            <span class="details">Email</span>
            <input type="text" class="input" placeholder="Enter your email"/>
        </div>
        <div class="Form-details">
            <span class="details">Phone Number</span>
            <input type="text" class="input" placeholder="Enter your number"/>
        </div>
        <div class="Form-details">
            <span class="details">Password</span>
            <input type="text" class="input" placeholder="Enter your password"/>
        </div>
        <div class="Form-details">
            <span class="details">Confirm Password</span>           
            <input type="text" class="input" placeholder="Confirm your password"/>
        </div>
    </div>
        <div class="gender_details">
        <span class="gender">Gender</span>
            <div class="category">
                <div class="gendert">
            <input type="radio" id="male" name="gender"/>
            <label for="male">Male</label>
        </div>
        <div class="gendert">
            <input type="radio" id="female" name="gender"/>
            <label for="female">Female</label>
        </div>
        <div class="gendert">
            <input type="radio" id="other" name="gender"/>
            <label for="other">Prefer not to say</label>
        </div>
        </div>
        </div>

        <div class="button">
            <input type="submit" value="Register"/>
        </div>
    
        </form>
    </div>
           
        
   
  )
}

export default Form