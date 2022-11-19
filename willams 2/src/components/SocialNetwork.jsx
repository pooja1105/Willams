import React from "react";
import { Grid, makeStyles, Card, CardContent } from "@material-ui/core";
import "./css/SocialNetwork.css";
import NavBar from "./NavBar";
import Network1 from "../Img/network1.png";
import Network2 from "../Img/network2.png";
import Network3 from "../Img/network3.png";
import Footer from "../components/Footer.jsx";

const useStyles = makeStyles({
  img: {
    position: "relative",
    top: "12.083vw",
    left: "2.381vw",
    width: "44.464vw",
    height: "30.536vw",
  },

  heading: {
    position: "relative",
    top: "16.964vw",
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
    top: "18.214vw",
    left: "8.929vw",
    textShadow: "0px 0px 30px #FFF8F8",
  },

  para1: {
    fontSize: "1.429vw",
    position: "relative",
    left: "9.345vw",
    top: "15.583vw",
  },
  img1: {
    position: "relative",
    width: "30.774vw",
    height: "26.488vw",
    top: "21.607vw",
    left: "8.988vw",
  },
  PLAY: {
    position: "relative",
    textShadow: "0px 0px 30px #FFF8F8",
    color: "#ffff",
    textAlign: "center",
    top: "22.881vw",
    fontSize: "3.571vw",
  },
  card111111: {
    width: "25.926vw",
    height: "13.810vw",
    position: "relative",
    top: "23vw",
    left: "8.988vw",
  },
  card222222: {
    width: "25.926vw",
    height: "13.810vw",
    position: "relative",
    top: "23vw",
    left: "3.671vw",
  },
  card333333: {
    width: "25.926vw",
    height: "13.810vw",
    position: "relative",
    top: "23vw",
    right: "2vw",
  },

  img2: {
    position: "relative",
    left: "8.929vw",
    top: "35vw",
    width: "34.583vw",
    height: "39.107vw",
  },
});

export default function SocialNetwork() {
  const classes = useStyles();
  return (
    <>
      <div className="background">
        <NavBar />

        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h1 className={classes.heading} id="h1">
                Blockchain <br /> Powered Social
                <br /> Network
              </h1>
              <p className={classes.para} id="p">
                Biworld’s mission is to encourage mindful engagement and <br />
                positive contribution, both online and offline in the world.
              </p>
              <button className={classes.btn} id="button" type="button">
                START NOW
              </button>
            </Grid>
            <Grid item xs={6}>
              <img className={classes.img} src={Network1} />
            </Grid>
            <Grid item xs={6}>
              <img className={classes.img1} src={Network2} />
            </Grid>
            <Grid item xs={6}>
              <h1 className={classes.heading1} id="h11">
                Social Community <br />
                Platform for
                <br /> Creators
              </h1>
              <p className={classes.para1} id="h5">
                The Biworld ecosystem takes the social media <br />
                experience to the next level & allows users to publish <br />
                photo & video content. It's a social networking platform <br />
                to have open conversations & bring people together under the{" "}
                <br />
                principles of freedom, transparency and privacy.
              </p>
            </Grid>
            <Grid item xs={12}>
              <h1 className={classes.PLAY}>
                How is Biworld <br /> Social Media different?
              </h1>
            </Grid>
            <Grid item xs={4}>
              <Card
                id="card111111"
                className={classes.card111111}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="real">
                  <h1>GET REWARDED</h1>
                  <p>
                    With Biworld you can generate <br />
                    reward points by liking, <br />
                    commenting, creating posts, etc.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                id="card222222"
                className={classes.card222222}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="real">
                  <h1>MARKETPLACE</h1>
                  <p>
                    List your items for sale or find <br />
                    and purchase items with our <br />
                    marketplace feature.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                id="card333333"
                className={classes.card333333}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="real">
                  <h1>PRIVACY MATTERS</h1>
                  <p>
                    Everything is protected by <br />
                    using blockchain, you also have <br />
                    a choice to make your profile <br />
                    public or store it safely.
                  </p>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <h1 className="lastheading">
                Download <br /> ios & Android app
              </h1>
              <p className="lasttext">
                Biworld's mobile apps streamline the user experience <br />
                and allows you to be social and earn rewards on the go! <br />
                Start earning from your content.
              </p>
            </Grid>
            <Grid item xs={6}>
              <img className={classes.img2} src={Network3} />
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
