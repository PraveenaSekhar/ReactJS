import React from "react";
import './style.css';

const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

interface SignUpProps {
   name?: any;
   value?: any;
}
interface SignUpState {
   username: string,
   email: string,
   password: string,
   errorName: string,
   errorEmail: string,
   errorPassword: string
}

export class SignUp extends React.Component<SignUpProps, SignUpState>
{
   constructor(props: SignUpProps) {
      super(props);
      const initialState = {
         username: '',
         email: '',
         password: '',
         errorName:"",
         errorEmail: "",
         errorPassword: ""        
      }
      this.state = initialState;
      this.userNameChange = this.userNameChange.bind(this);
      this.emailChange = this.emailChange.bind(this);
      this.passwordChange = this.passwordChange.bind(this);

   }

   userNameChange = (e: any) => {
      this.setState({ username: e.target.value });
      console.log("UserName==>" + e.target.value);
   }

   emailChange = (e: any) => {
      this.setState({ email: e.target.value });
      console.log("Email==>" + e.target.value);
   }

   passwordChange = (e: any) => {
      this.setState({ password: e.target.value });
      console.log("Password==>" + e.target.value);
   }

   clearErrmsg=()=>{
      this.setState({ errorName: "" });
      this.setState({ errorEmail: "" });
      this.setState({ errorPassword: "" });
   }

   handleSubmit = (event: any) => {
      event.preventDefault();
    const {username,email,password}=this.state;
    console.log("username =====>"+username);

      if (username === "") {
         this.setState({ errorName: "Please Enter Name" });
      } 
      if (email === "") {
         this.setState({ errorEmail: "Please Enter Email" });
      } 
      if (password === "") {
         this.setState({ errorPassword: "Please Enter password" });
      } 
   }

   render() {
      const {errorName,errorEmail,errorPassword}=this.state;
      return (
         <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>Sign Up</h2>
               <form>
                  <div className='fullName'>
                     <label htmlFor="fullName">Full Name</label>
                     <input type='text' name='fullName' 
                     onKeyUpCapture={this.clearErrmsg}
                     onChange={this.userNameChange} />
                  </div>
                  <span style={{ color: "red" }}>{errorName}</span>
                  <div className='email'>
                     <label htmlFor="email">Email</label>
                     <input type='email' name='email' onChange={this.emailChange}
                     onKeyUpCapture={this.clearErrmsg} />
                  </div>
                  <span style={{ color: "red" }}>{errorEmail}</span>
                  <div className='password'>
                     <label htmlFor="password">Password</label>
                     <input type='password' name='password' 
                     onChange={this.passwordChange} 
                     onKeyUpCapture={this.clearErrmsg}/>
                  </div>
                  <span style={{ color: "red" }}>{errorPassword}</span>
                  <div className='submit'>
                     <button onClick={this.handleSubmit}>Register Me</button>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}

