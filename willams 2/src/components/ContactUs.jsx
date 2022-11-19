import React from "react";
import "./css/ContactUs.css";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  Divider,
} from "@material-ui/core";
import NavBar from "./NavBar";
import call from "../Img/Call.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import faq from "../Img/FAQ.png";
import Footer from "./Footer";

const useStyles = makeStyles({
  img1: {
    position: "relative",
    top: "14.226vw",
    left: "10.871vw",
    height: "22.717vw",
    width: "36.461vw",
  },
  entersponser: {
    boxShadow: "0px 0px 11px #C75CD3",
    borderRadius: "100px",
    position: "relative",
    top: "10.548vw",
    left: "7.881vw",
  },
  Email: {
    boxShadow: "0px 0px 11px #C75CD3",
    borderRadius: "100px",
    position: "relative",
    top: "11.548vw",
    left: "7.881vw",
  },

  Message: {
    boxShadow: "0px 0px 11px #C75CD3",
    borderRadius: "2.604vw",
    position: "relative",
    top: "12.548vw",
    left: "7.881vw",
  },
  Submit: {
    boxShadow: "0px 0px 11px #C75CD3",
    borderRadius: "100px",
    position: "relative",
    top: "13.548vw",
    left: "7.881vw",
  },
  bitechain: {
    boxShadow: "0px 0px 11px #C75CD3",
    borderRadius: "100px",
    position: "relative",
    top: "11.548vw",
    left: "7.881vw",
  },
  emailbutton: {
    position: "relative",
    borderRadius: "100px",
    boxShadow: "0px 0px 11px #C75CD3",
  },

  lastbutton: {
    position: "relative",
    boxShadow: "0px 0px 11px #C75CD3",
    borderRadius: "100px",
  },
});

export default function ContactUs() {
  const classes = useStyles();
  return (
    <div className="backgroundss">
      <NavBar />
      <div>
        <Grid container>
          <Grid item xs={6}>
            <img className={classes.img1} src={call} />
          </Grid>
          <Grid item xs={6}>
            <h1 className="get">
              GET IN TOUCH <br /> WITH US
            </h1>
            <p className="Our">
              Our team is happy to answer any question you have. Fill <br />
              out the form and we'll be in touch as soon as possible.
            </p>
            <div className="mb-3">
              <input
                type="user"
                className={classes.entersponser}
                id="sponser"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="Email"
                className={classes.Email}
                id="Email"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-3">
              <input
                type="Message"
                className={classes.Message}
                id="Message"
                placeholder="Message"
              />
            </div>
            <div className="mb-3">
              <input
                type="Submit"
                className={classes.Submit}
                id="Submit"
                placeholder="Submit"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <h1 className="offices">OUR OFFICES</h1>
            <p className="location">
              Gwedrow House, Off Chapel Hill, Gweek,
              <br />
              Cornwall, TR12 7AQ, UK
            </p>
            <p className="location">
              Noramin Business Center, NO:110 Maslak Sariyer <br />
              Istanbul
            </p>
          </Grid>

          <Grid item xs={3}>
            <h1 className="offices">OUR LIC NO:</h1>
            <p className="location">Lic. No. : 3851783561</p>
          </Grid>

          <Grid item xs={3}>
            <h1 className="offices">EMAL</h1>
            <p className="location">info@bitechchain.io</p>
          </Grid>

          <Grid item xs={3}>
            <h1 className="offices">SOCIAL LINK</h1>
            <WhatsAppIcon className="icons" />
            <TwitterIcon className="icons" />
            <FacebookIcon className="icons" />
            <InstagramIcon className="icons" />
          </Grid>
          <Grid item xs={12}>
            <h1 className="faq">FAQs</h1>
            <p className="faqqp">
              Get quick answers to common questions, or head to the
              documentation to learn more.
            </p>
          </Grid>

          <Grid item xs={6}>
            <div className="mb-4">
              <input
                type="bitechain"
                className={classes.bitechain}
                id="bitechain"
                placeholder="What is Bitechchain?                                                                              +"
              />
            </div>
            <div className="mb-4">
              <input
                type="bitechain"
                className={classes.bitechain}
                id="bitechain"
                placeholder="How is Bitechchain different from others?                                              +"
              />
            </div>
            <div className="mb-4">
              <input
                type="bitechain"
                className={classes.bitechain}
                id="bitechain"
                placeholder="Why should anyone invest in bitechchain?                                            +"
              />
            </div>
            <div className="mb-4">
              <input
                type="bitechain"
                className={classes.bitechain}
                id="bitechain"
                placeholder="What are Bitechchain features?                                                            +"
              />
            </div>
            <div className="mb-4">
              <input
                type="bitechain"
                className={classes.bitechain}
                id="bitechain"
                placeholder="What kind of game you will get to play on bitechchain                         +"
              />
            </div>
            <div className="mb-4">
              <input
                type="bitechain"
                className={classes.bitechain}
                id="bitechain"
                placeholder="How is Bitechchain Social media platform is diffirent
from others?       +"
              />
            </div>
            <div className="mb-4">
              <input
                type="bitechain"
                className={classes.bitechain}
                id="bitechain"
                placeholder="Do all Cryptocurrencies are available in the Bitechchain
                exchange?   +"
              />
            </div>
            <div className="mb-4">
              <input
                type="bitechain"
                className={classes.bitechain}
                id="bitechain"
                placeholder="What to know more about Bitechchain                                                 +"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <img className="imgfaq" src={faq} />
          </Grid>
          <Grid item xs={12}>
            <h1 className="questions">DO YOU HAVE ANY QUESTIONS?</h1>
            <p className="questionspp">
              Please contact us directly by mail or from our contact form.
            </p>
            <div>
              <input
                type="emailbutton"
                className={classes.emailbutton}
                id="emailbutton"
                placeholder="Email Address"
              />
            </div>
            <div>
              <button
                type="lastbutton"
                className={classes.lastbutton}
                id="lastbutton"
              >
                SUBMIT
              </button>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="Foo">
        <Footer />
      </div>
    </div>
  );
}
