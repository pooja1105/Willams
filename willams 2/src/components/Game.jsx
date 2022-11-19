import { Grid, makeStyles, Card, CardContent } from "@material-ui/core";
import React from "react";
import "./css/Game.css";
import NavBar from "./NavBar";
import Toy from "../Img/toy.png";
import Box from "../Img/box.png";
import king from "../Img/king.png";
import Footer from "../components/Footer.jsx";

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
  card1111: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "16.131vw",
    left: "9.048vw",
  },
  card2222: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "16.131vw",
    left: "5.051vw",
  },
  card3: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "16.131vw",
    left: "1.301vw",
  },
  card4: {
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
  lasttext: {
    position: "relative",
    color: "#ffff",
    top: "40vw",
    left: "10vw",
    fontSize: "1.250vw",
  },
});

export default function Game() {
  const classes = useStyles();
  return (
    <>
      <div className="background22">
        <NavBar />

        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h1 className={classes.heading} id="h1">
                Biworld Gaming <br /> is Premier Crash <br /> Game
              </h1>
              <p className={classes.para} id="p">
                BiworldGaming is a fair gaming platform built on blockchain
                technology. Play and enjoy extremely fun game.
              </p>
              <button className={classes.btn} id="button" type="button">
                START NOW
              </button>
            </Grid>
            <Grid item xs={6}>
              <img className={classes.img} src={Toy} />
            </Grid>
            <Grid item xs={6}>
              <img className={classes.img1} src={Box} />
            </Grid>
            <Grid item xs={6}>
              <h1 className={classes.heading1} id="h11">
                How <br />
                BiworldGaming
                <br /> works?
              </h1>
              <p className={classes.para1} id="h5">
                Biworld Crash Gaming works by showing users a <br />
                multiplier that increases from 1.00X until the game <br />
                “crashes”, or “bursts”. If users cash out at the right time,
                <br />
                they stand a great chance of significantly multiplying <br />
                their wager. BiworlGaming uses blockchain technology <br />
                to crash the game in a way that can be independently <br />
                verified by players to ensure that it’s fair.
              </p>
            </Grid>
            <Grid item xs={12}>
              <h1 className={classes.PLAY}>Play Exited Creash Games</h1>
            </Grid>
            <Grid item xs={3}>
              <Card
                id="card1111"
                className={classes.card1111}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="real">
                  <h1>PLAY ANYTIME ANYWHERE</h1>
                  <p>
                    Crash can be played from the comforts of your home or just
                    about anywhere with a connection to the internet & a smart
                    device. Play to win!
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                id="card2222"
                className={classes.card2222}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="real">
                  <h1>REAL TIME</h1>
                  <p>
                    The multiplier will increase rapidly once you start the game
                    and watch your fortune rise in real time!
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                id="card3"
                className={classes.card3}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="real">
                  <h1>SECURE</h1>
                  <p>
                    Our unique formula makes it fair for both highly
                    conservative play and aggressive high hold play. All games
                    are provably fair.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                id="card4"
                className={classes.card4}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="real">
                  <h1>SOCIAL</h1>
                  <p>
                    Be part of the Biworld community. Invite and play with your
                    friends in real time. Win and beat your opponent.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <img className={classes.img2} src={king} />
            </Grid>
            <Grid item xs={6}>
              <h1 className="lastheading">
                Play for Fun <br /> Play to Win
              </h1>
              <p className={classes.lasttext}>
                We take care of everything, just place a bet <br /> and watch
                the money roll in.
              </p>
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
