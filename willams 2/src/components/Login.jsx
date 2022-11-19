import React, { useState } from "react";
import "./css/Login.css";
import { Grid, makeStyles } from "@material-ui/core";
import ball from "../Img/loginimg.png";
import logo from "../Img/logo.png";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  enteruser: {
    boxShadow: "0px 0px 11px #C75CD3",
    borderRadius: "100px",
    position: "relative",
  },
  password: {
    boxShadow: "0px 0px 11px #C75CD3",
    borderRadius: "100px",
    position: "relative",
    top: "1.190vw",
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
    top: "4.583vw",
  },

  colors:{
    color: "red",
    fontSize: "0.833vw"
  },

  platform: {
    position: "relative",
    top: "6.845vw",
    left: "7.619vw",
    color: "#ffff",
    "@media(max-width:1040px)": {
      position: "relative",
      left: "2.619vw",
    },
    "@media(max-width:820px)": {
      position: "relative",
      left: "0.619vw",
      fontSize: "10px",
    },
  },
});
export default function Login() {
  const classes = useStyles();
  const [user,setUser]=useState("");
  const [password,setpassword]=useState("");
  const [userErr,setUserErr]=useState(false);
  const [passErr,setpassErr]=useState(false);
  const [submit,setSubmit]=useState(false);
  const [userLogin , setUserLogin]=useState(false);
  const [passLogin , setPassLogin]=useState(false);
  const [checked, setChecked] = useState(false);

  
  let history = useHistory();

function userHandler(e) {
  let item=e.target.value;
  let regularExpression= /^[a-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
  if (regularExpression.test(item) )
  {
    console.log("valid");
    setUserErr(false);
    setUserLogin(true);
  }
  else{
    console.log("invalid");
    setUserErr(true);
  }
  
}
function passHandler(e) {
  let item=e.target.value;
  let regularpassExpression= /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/
  if(regularpassExpression.test(item))
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
const handleCheckBox = event => {
  if( event.target.checked ){
     setChecked(true);
  }
  else{
   
  }
};
function lsubmit(){
  if(userLogin === true && passLogin === true && checked === true ){
    setSubmit(true);
    
    console.log(submit,"Submit");
    history.push('/about-us');
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
            <form
              onSubmit={() => {
                passHandler();
                userHandler();
              }}
            >
              <h1 className="text">Login</h1>
              <h5 className="ttext">
                Sign in using your username and password
              </h5>
              <div className="mb-3">
                <input
                  type="user"
                  className={classes.enteruser}
                  id="user"
                  placeholder="Enter your username"
                  onChange={userHandler}
                />
                <br />
                <br /> {userErr ? <span className={classes.colors}>User Not Valid</span> : ""}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className={classes.password}
                  id="password"
                  placeholder="Enter your password"
                  onChange={passHandler}
                />
                <br />
                <br /> {passErr ? <span className={classes.colors}>Invalid Password</span> : ""}
              </div>
              <div className="mb-3">
                <div className={classes.line}>
                  <input
                    type="checkbox"
                    onChange={handleCheckBox}
                  />
                  <label htmlFor="customCheck1">Remember me</label>
                  <label className="fpass11">Forgot password ?</label>
                </div>
              </div>
              <div>
                {/* <Link to="/about-us"> */}{" "}
                <button
                  type="submit"
                  className={classes.submit}
                  id="btn"
                  onClick={lsubmit}
                >
                  Login
                </button>
                {/* </Link> */}
              </div>
              <Link to="/signup">
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
