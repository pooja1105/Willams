import React from "react";
import { Grid, makeStyles, Card, CardContent, Avatar } from "@material-ui/core";
import "./css/AboutUs.css";
import NavBar from "./NavBar";
import Camera from "../Img/camera.png";
import arrow from "../Img/Arrow.png";
import arrow2 from "../Img/Arrow2.png";
import arrow3 from "../Img/Arrow3.png";
import project from "../Img/Projrct.png";
import Footer from "../components/Footer.jsx";
import Air from "../Img/air.png";
import Ball from "../Img/ball.png";
import Smallball from "../Img/smallball.png";
import avatar1 from "../Img/Avatar1.png";
import avtar2 from "../Img/Avtar2.png";
import avtar3 from "../Img/Avtar3.png";
import avtar4 from "../Img/Avtar4.png";
import avtar5 from "../Img/Avtar5.png";

const useStyles = makeStyles({
  img: {
    position: "relative",
    top: "17.964vw",
    left: "14.262vw",
    width: "27.024vw",
    height: "27.024vw",
  },

  heading: {
    position: "relative",
    top: "17.024vw",
    color: "#ffff",
    left: "18.155vw",
    textShadow: "0px 0px 30px #FFF8F8",
  },

  para: {
    left: "10.476vw",
    top: "16.369vw",
  },
  btn: {
    filter: "drop-shadow(0px 13px 27px rgba(0, 0, 0, 0.25))",
    borderRadius: "100px",
    left: "8.988vw",
    top: "13.095vw",
    fontSize: "0.833vw",
  },

  heading1: {
    position: "relative",
    top: "17.698vw",
    left: "11.560vw",
    textShadow: "0px 0px 30px #FFF8F8",
  },

  para1: {
    fontSize: "1.429vw",
    position: "relative",
    left: "7.745vw",
    top: "16.100vw",
  },
  img1: {
    position: "relative",
    width: "14.979vw",
    height: "5.566vw",
    top: "4vw",
    left: "12vw",
  },
  img4: {
    position: "relative",
    width: "10.173vw",
    height: "15.114vw",
    left: "-5vw",
    top: "17vw",
  },

  img3: {
    position: "relative",
    width: "25.075vww",
    height: "16.327vw",
    left: "12.868vw",
    top: "22.143vw",
  },

  PLAY: {
    position: "relative",
    textShadow: "0px 0px 30px #FFF8F8",
    color: "#ffff",
    textAlign: "center",
    top: "14.881vw",
    fontSize: "3.571vw",
  },
  card1111111: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "16.131vw",
    left: "9.048vw",
  },
  card2222222: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "16.131vw",
    left: "5.051vw",
  },
  card3333333: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "16.131vw",
    left: "1.301vw",
  },
  card4444444: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "16.131vw",
    left: "-2.807vw",
  },
  img2: {
    position: "relative",
    left: "8.869vw",
    top: "24.167vw",
    width: "32.500vw",
    height: "31.190vw",
  },
  support: {
    position: "relative",
    textShadow: "0px 0px 30px #FFF8F8",
    color: "#ffff",
    textAlign: "center",
    fontSize: "3.571vw",
    top: "27.795vw",
  },
  ball: {
    width: "27.917vw",
    height: "24.923vw",
    position: "relative",
    top: "26.429vw",
    left: "6.874vw",
  },
  smallball: {
    width: "15.789vw",
    height: "14.182vw",
    top: "10vw",
    position: "relative",
    right: "-47.619vw",
  },
  welcome: {
    position: "relative",
    textAlign: "center",
    color: "#ffff",
    textShadow: "0px 0px 30px #FFF8F8",
    fontWeight: "53.571vw",
    fontSize: "2.381vw",
  },
  welcomep: {
    position: "relative",
    color: "#ffff",
    textAlign: "center",
    fontSize: "1.429vw",
    fontWeight: "23.810vw",
    lineHeight: "2.560vw",
  },
  us: {
    position: "relative",
    letterSpacing: "0.18em",
    color: "#FFFFFF",
    left: "22.321vw",
    top: "19vw",
    opacity: "0.8",
    fontSize: "1.786vw",
  },

  uss: {
    position: "relative",
    letterSpacing: "0.18em",
    color: "#FFFFFF",
    left: "16vw",
    top: "19vw",
    opacity: "0.8",
    fontSize: "1.786vw",
  },
  avatar1: {
    width: "14.286vw",
    height: "27.083vw",
    background: "#6E2373",
    borderRadius: "7.619vw",
    left: "9.464vw",
    position: "relative",
    top: "21.488vw",
  },
  cardd1: {
    margin: "0 1vw",
  },
});

export default function AboutUs() {
  const classes = useStyles();
  return (
    <>
      <div className="Background">
        <NavBar />

        <div className="ball">
          <img className={classes.ball} src={Ball} />
          <img className={classes.smallball} src={Smallball} />
          <h1 className={classes.welcome}>
            Welcome to <br /> Bitechchain
          </h1>
          <p className={classes.welcomep}>
            Biworld believes in connecting the world with the power of the
            blockchain <br />
            Internet of Things. It opens a new portal for all its community
            members <br />
            for accessing next generation platforms and products.
          </p>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h2 className={classes.us}>ABOUT US</h2>
            <h1 className={classes.heading} id="h1">
              Our Vision
            </h1>
            <p className={classes.para} id="p">
              Through Biworld's own home blockchain, we aim to build a
              transparent <br />
              ecosystem. From the past few decades the government and
              corporations <br />
              track every transaction details and have access to all data.
              breaches <br />
              the fundamental right to have privacy. With Biworld we can
              re-architect <br />
              our world with data ownership, safety and security as a basic
              principle <br />
              benefit people and community.
            </p>
          </Grid>
          <Grid item xs={6}>
            <img className={classes.img} src={Camera} />
          </Grid>
          <Grid item xs={6}>
            <img className={classes.img3} src={arrow3} />
            <img className={classes.img4} src={arrow2} />
            <img className={classes.img1} src={arrow} />
          </Grid>
          <Grid item xs={6}>
            <h2 className={classes.uss}>ABOUT US</h2>
            <h1 className={classes.heading1} id="h11">
              Our Mission
            </h1>
            <p className={classes.para1} id="h5">
              Our mission is to provide everyone a one-stop platform <br />
              for Decentralized Finance ecosystem with Biworld <br />
              home blockchain, exchanges, blockchain-based games <br />
              and social media platform.
            </p>
          </Grid>
          <Grid item xs={12}>
            <h1 className={classes.PLAY}>Ecosystem</h1>
          </Grid>
          <Grid item xs={3}>
            <Card
              id="card1111111"
              className={classes.card1111111}
              style={{
                borderRadius: "31.58px",
                boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                color: "#ffff",
              }}
            >
              <CardContent className="reals">
                <h1>GLOBAL PLATFORM</h1>
                <p>
                  We are the fastest growing global community with innovative
                  state of the art Blockchain IOT technology.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              id="card2222222"
              className={classes.card2222222}
              style={{
                borderRadius: "31.58px",
                boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                color: "#ffff",
              }}
            >
              <CardContent className="reals">
                <h1>SAFE AND SECURE</h1>
                <p>
                  We aim to facilitate a trustworthy and secure relationship
                  between all the investors and community members.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              id="card3333333"
              className={classes.card3333333}
              style={{
                borderRadius: "31.58px",
                boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                color: "#ffff",
              }}
            >
              <CardContent className="reals">
                <h1>ECONOMICAL TRANSACTION FEE</h1>
                <p>
                  With the implementation of the latest technology results in
                  seamless, low cost, borderless transaction and financial
                  services to everyone.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              id="card4444444"
              className={classes.card4444444}
              style={{
                borderRadius: "31.58px",
                boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                color: "#ffff",
              }}
            >
              <CardContent className="reals">
                <h1>EASILY ACCESSIBLE</h1>
                <p>
                  Biworld products are easily accessible and create a new
                  opportunity for common people and entrepreneurs.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <h1 className="team">Our Team</h1>
            <p className="teamp">
              Our team is composed of highly talented professionals who are
              experts in building real <br />
              world decentralized platform to support the people globally.
            </p>
          </Grid>
          <Grid item xs={2.4} className={classes.cardd1}>
            <Card
              className={classes.avatar1}
              style={{
                borderRadius: "128px",
                boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                color: "#ffff",
              }}
            >
              <CardContent>
                <img className="arara" src={avatar1} />
                <h1 className="names">Weldon Langosh</h1>
                <h2 className="founder">(Co-Founder)</h2>
                <h3 className="emails">weldon@biworld.io</h3>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={2.4} className={classes.cardd1}>
            <Card
              className={classes.avatar1}
              style={{
                borderRadius: "128px",
                boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                color: "#ffff",
              }}
            >
              <CardContent>
                <img className="arara" src={avtar2} />
                <h1 className="names">Cade Towne</h1>
                <h2 className="founder">(Co-Founder)</h2>
                <h3 className="emails">code@biworld.io</h3>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2.4} className={classes.cardd1}>
            <Card
              className={classes.avatar1}
              style={{
                borderRadius: "128px",
                boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                color: "#ffff",
              }}
            >
              <CardContent>
                <div>
                  <img className="arara" src={avtar3} />
                </div>
                <h1 className="names">Velma Kub</h1>
                <h2 className="founder">(Co-Founder)</h2>
                <h3 className="emails">welma@biworld.io</h3>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2.4} className={classes.cardd1}>
            <Card
              className={classes.avatar1}
              style={{
                borderRadius: "128px",
                boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                color: "#ffff",
              }}
            >
              <CardContent>
                <img className="arara" src={avtar4} />
                <h1 className="names">Raul Lesch</h1>
                <h2 className="founder">(Co-Founder)</h2>
                <h3 className="emails">roul@biworld.io</h3>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2.4} className={classes.cardd1}>
            <Card
              className={classes.avatar1}
              style={{
                borderRadius: "128px",
                boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                color: "#ffff",
              }}
            >
              <CardContent>
                <img className="arara" src={avtar5} />
                <h1 className="names">Thomas Ziemann</h1>
                <h2 className="founder">(Co-Founder)</h2>
                <h3 className="emails">thomas@biworld.io</h3>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>
  );
}
