import React from "react";
import { Grid, makeStyles, Card, CardContent } from "@material-ui/core";
import "./css/BlockChain.css";
import NavBar from "./NavBar";
import blockChain from "../Img/BlockChain.png";
import application from "../Img/Application.png";
import project from "../Img/Projrct.png";
import Footer from "../components/Footer.jsx";
import Air from "../Img/air.png";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

const useStyles = makeStyles({
  img: {
    position: "relative",
    top: "6.964vw",
    left: "2.381vw",
    width: "45.179vw",
    height: "45.179vw",
  },

  heading: {
    position: "relative",
    top: "17.024vw",
    color: "#ffff",
    left: "8.631vw",
    textShadow: "0px 0px 30px #FFF8F8",
  },

  para: {
    left: "8.869vw",
    top: "13.369vw",
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
    top: "8.333vw",
    left: "7.560vw",
    textShadow: "0px 0px 30px #FFF8F8",
  },

  para1: {
    fontSize: "1.429vw",
    position: "relative",
    left: "7.745vw",
    top: "6vw",
  },
  img1: {
    position: "relative",
    width: "26.488vw",
    height: "23.810vw",
    top: "10vw",
    left: "8.988vw",
  },
  PLAY: {
    position: "relative",
    textShadow: "0px 0px 30px #FFF8F8",
    color: "#ffff",
    textAlign: "center",
    top: "14.881vw",
    fontSize: "3.571vw",
  },
  card11111: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "16.131vw",
    left: "9.048vw",
  },
  card22222: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "16.131vw",
    left: "5.051vw",
  },
  card33333: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "16.131vw",
    left: "1.301vw",
  },
  card44444: {
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
  footer: {
    position: "relative",
    top: "",
  },
  c: {
    height: "182.250vw",
  },
});

export default function BlockChain() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.c} id="c">
        <NavBar />

        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h1 className={classes.heading} id="h1">
                Build Anything <br /> On Biworld <br /> Blockchain
              </h1>
              <p className={classes.para} id="p">
                The most secure, flexible and scalable <br />
                blockchain platform.Developed by <br />
                developers and for developers.
              </p>
              <button className={classes.btn} id="button" type="button">
                START NOW
              </button>
            </Grid>
            <Grid item xs={6}>
              <img className={classes.img} src={blockChain} />
            </Grid>
            <Grid item xs={6}>
              <img className={classes.img1} src={application} />
            </Grid>
            <Grid item xs={6}>
              <h1 className={classes.heading1} id="h11">
                Develop Advanced
                <br />
                Application
              </h1>
              <p className={classes.para1} id="h5">
                Join a thriving ecosystem of experienced developers <br />
                and enthusiastic community members. Build your <br />
                projects, products and applications with confidence on <br />
                the Biworld Blockchain.
              </p>
            </Grid>
            <Grid item xs={12}>
              <h1 className={classes.PLAY}>
                Connecting the Physical and <br /> Digital Worlds
              </h1>
            </Grid>
            <Grid item xs={3}>
              <Card
                id="card11111"
                className={classes.card11111}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="real">
                  <h1>CREATE A DAPP</h1>
                  <p>
                    Create your own Dapp with our developer-friendly Integrated
                    Development Environment.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                id="card22222"
                className={classes.card22222}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="real">
                  <h1>LAUNCH A TOKEN</h1>
                  <p>
                    Launch your own token build on next-generation Biworlds home
                    blockchain.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                id="card33333"
                className={classes.card33333}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="real">
                  <h1>GO CROSS-CHAIN</h1>
                  <p>
                    Convert crypto-assets two-way between Biworld Chain,
                    Ethereum, BSC, and more.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                id="card44444"
                className={classes.card44444}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="real">
                  <h1>MAKE SMART CONTRACTS</h1>
                  <p>
                    You can trade your crypto assets on decentralized exchanges.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <h1 className="nextGen">
                A Launchpad for <br />
                Next-Gen <br />
                Project
              </h1>
              <p className="nexttext">
                Biworld built an ever-growing ecosystem of privacy-protecting{" "}
                <br />
                platforms, cross-chain bridges and exchanges, and far-reaching{" "}
                <br />
                Dapps. Join the global community of developers launching the
                next <br />
                generation of decentralized projects on Biworld.
              </p>
            </Grid>
            <Grid item xs={6}>
              <img className="roket" src={project} />
              <img className="aircraft" src={Air} />
            </Grid>
            <Grid item xs={12}>
              <h1 className={classes.support}>Supported Networks</h1>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>
  );
}
