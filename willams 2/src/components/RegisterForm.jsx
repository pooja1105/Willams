import React, { useState } from "react";
import "./css/RegisterForm.css";
import { Grid, makeStyles } from "@material-ui/core";
import ball from "../Img/loginimg.png";
import logo from "../Img/logo.png";
import { Link, useHistory } from "react-router-dom";
const useStyles = makeStyles({
  entersponser: {
    boxShadow: "0px 0px 11px #C75CD3",
    borderRadius: "100px",
    position: "relative",
  },
  Username: {
    boxShadow: "0px 0px 11px #C75CD3",
    borderRadius: "100px",
    position: "relative",
    top: "1.190vw",
  },
  input: {
    position: "relative",
    top: "2.190vw",
  },
  input1: {
    position: "relative",
    top: "3.190vw",
  },
  input2: {
    position: "relative",
    top: "4.190vw",
  },
  Phone: {
    boxShadow: "0px 0px 11px #C75CD3",
    borderRadius: "100px",
    position: "relative",
    top: "5.190vw",
  },

  line: {
    position: "relative",
    top: "2.5vw",
    color: "#ffffff",
    fontSize: "12px",
  },

  submit: {
    boxShadow: "0px 0px 11px #C75CD3",
    borderRadius: "100px",
    position: "relative",

    top: "7.50vw",
  },
  platform: {
    position: "relative",
    top: "10vw",
    left: "7.619vw",
    color: "#ffff",
  },
  color: {
    color: "red",
    fontSize: "0.833vw"

  },
});


export default function RegisterForm() {
  const classes = useStyles();
  const [user,setUser]=useState("");
  const [userErr,setUserErr]=useState(false);
  const [password,setpassword]=useState("");
  const [passErr,setpassErr]=useState(false);
  const [CpassErr,CsetpassErr]=useState(false);
  const [userLogin , setUserLogin]=useState(false);
  const [passLogin , setPassLogin]=useState(false);
  const [firstname , setfirstname]=useState(false);
  const [nameErr,setNameErr]=useState(false);
  const [nameErr1,setNameErr1]=useState(false);
  const [email,setEmail]=useState(false);
  const [phoneErr,setPhoneErr]=useState(false);

  let history = useHistory();
  function userHandler(e) {
    let item=e.target.value;
    let regularExpression= /^[a-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
    if (regularExpression.test(item) )
    {
      console.log("valid");
      setUserErr(false);
  
    }
    else{
      console.log("invalid");
      setUserErr(true);
    }  
  }


  function passHandler(e1) {
    let item1 = e1.target.value;
    let regularpassExpression= /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/
    if(regularpassExpression.test(item1))
    {
      console.warn("valide");
      setpassErr(false);
      setPassLogin(true);
    }
    else{
      console.log("invalid");
      setpassErr(true);
    }
  }
  function passCHandler(e2) {
    let item2 = e2.target.value;
    let regularCpassExpression= /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/
    if(regularCpassExpression.test(item2))
    {
      console.warn("valide");
      CsetpassErr(false);
      setPassLogin(true);
    }
    else{
      console.log("invalid");
      CsetpassErr(true);
    }
    var pw1 = document.getElementById("pass1").value;  
    var pw2 = document.getElementById("c-pass").value; 
    if(pw1 == "") {  
      console.log("invalid");
      setpassErr(true);
    }  
    if(pw2 == "") {  
      console.log("invalid");
      CsetpassErr(true);
    }   
    if(pw1 != pw2) {  
      console.log("invalid");
      CsetpassErr(true);
    }
    else {  

    }  
  }
  function nameHandler1(e3) {
    let item=e3.target.value;
    let regularNameExpression= /^([A-Z][a-z]*).{3,20}$/
    if(regularNameExpression.test(item)){
      setfirstname(true);
      setNameErr(false);
      
    } 
    else{
      setfirstname(false);
      setNameErr(true);
    }
  }
  function nameHandler2(e) {
    let item=e.target.value;
    let regularNameExpression= /^([A-Z][a-z]*).{3,20}$/
    if(regularNameExpression.test(item)){
      setfirstname(true);
      setNameErr1(false);
      
    } 
    else{
      setfirstname(false);
      setNameErr1(true);
    }
  }
  function emailHandler(e) {
    let item=e.target.value;
    let regularExpression= /^[a-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
    if (regularExpression.test(item) )
    {
      console.log("valid");
      setEmail(false);
    }
    else{
      console.log("invalid");
      setEmail(true);
    }  
  }
  function phonenumber(){
    var num = document.getElementById("Country").value;
    if(num === '1'){
      var phone = document.getElementById("sponser11").value;
      if(phone === null){
        
      }
      else if(phone === 0){
       
      }

    }
    if(num === '91'){
      let indregularExpression= /{^\+?[0-9-]+$}/;
      var phone = document.getElementById("sponser11").value;
      if(phone === null){
        setPhoneErr(true);
      }
      else if(phone.length >9){
        setPhoneErr(false);
      }
      else{
        setPhoneErr(true);
      }
      
    }
    if(num === '86'){
      
    }
    if(num === '55'){
      
    }
    if(num === '90'){
      
    }

  }
  
  return (
    <div className="background">
      <img className="logoo" src={logo} />
      <div className="allpage">
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <img className="img" src={ball} />
            <h1 className="welcome">
              Welcome to <br />
              <span className="chain">Bitechchain</span>
            </h1>
          </Grid>
          <Grid item xs={6}>
            <form>
              <h1 className="text">REGISTER</h1>
              <h5 className="ttext">Fill the details below.</h5>
              <div className="mb-3">
                <input
                  type="user"
                  className={classes.entersponser}
                  id="sponser"
                  placeholder="Sponsor"
                />
              </div>
              <div className="mb-3">
                <input
                  type="Username"
                  className={classes.Username}
                  id="Username"
                  placeholder="Username"
                  onChange={userHandler}
                /><br/><br/> <br/> {userErr ? <span className={classes.color}>User Not Valid</span> : ""}

                <div className={classes.input} id="names">
                  <input type="First Name" placeholder="First Name" onChange={nameHandler1}/>
                  {nameErr? <span className={classes.color}>Invalid Name</span> : ""}
                  <input
                    className="last"
                    type="Last Name"
                    placeholder="Last Name"
                    onChange={nameHandler2}
                  /><br/>{nameErr1? <span className={classes.color}>Invalid Last Name</span> : ""}
                </div>
                <div className={classes.input1} id="names">
                  <input type="email" placeholder="Email Address"  onChange={emailHandler}/>
                  {email ? <span className={classes.color}>Email Not Valid</span> : ""}
                  <input
                  id="pass1"
                    className="last"
                    type="Password"
                    placeholder="Password"
                    onChange={passHandler}
                  /> <br/>{passErr ? <span className={classes.color}>Invalid Password</span> : ""}
                </div><br />
            
                <div className={classes.input2} id="names">
                  <input
                  id="c-pass"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={passCHandler}
                  />
                  {CpassErr ? <span className={classes.color}>Confirm Password Not Match</span> : ""}
                  <select name="countryCode" id="Country">
                    <option Selected>Select Country</option>
                    <option data-countryCode="US" value="1">
                      USA (+1)
                    </option>
                    <option data-countryCode="IND" value="91">
                      IND (+91)
                    </option>
                    <option data-countryCode="CN" value="86">
                      China (+86)
                    </option>
                    <option data-countryCode="BR" value="55">
                      Brazil (+55)
                    </option>
                    <option data-countryCode="TR" value="90">
                      Turkey (+90)
                    </option>
                  </select>
                </div><br/>

                <div>
                  <input
                    type="Phone"
                    className={classes.Phone}
                    id="sponser11"
                    placeholder="Phone Number"
                    onChange={phonenumber}
                  />
                </div>
              </div>
             
              <div>
              {phoneErr ? <span className={classes.color}>Please Enter Valid Number</span> : ""}
                <Link to="/">
                  <button className={classes.submit} id="btn">
                    REGISTER
                  </button>
                </Link>
              </div>
              <Link to="/">
                <div className={classes.platform} style={{ display: "flex" }}>
                  <div>New on our platform?</div>
                  <div className="regis">Register</div>
                </div>
              </Link>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
