import React from "react";
import "./css/Exchange.css";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  Divider,
} from "@material-ui/core";
import NavBar from "./NavBar";
import Coin from "../Img/coin.png";
import btcusdt from "../Img/bTCUSDT.png";
import ethusd from "../Img/eTHUSD.png";
import BTCUSDT from "../Img/bTCUSDT.png";
import ETHUSD from "../Img/eTHUSD.png";
import Footer from "../components/Footer.jsx";
import bitcoin from "../Img/bitcoin.png";
import eth from "../Img/ethereum.png";
import bnb from "../Img/bnb.png";
import usdt from "../Img/usdt.png";
import xrp from "../Img/xrp.png";
import Phone from "../Img/phonepng.png";
import { color } from "@mui/system";

const useStyles = makeStyles({
  img: {
    position: "relative",
    top: "13.631vw",
    left: "10.357vw",
    width: "31.071vw",
    height: "31.190vw",
  },

  heading: {
    position: "relative",
    top: "20.655vw",
    color: "#ffff",
    left: "8.631vw",
    textShadow: "0px 0px 30px #FFF8F8",
  },

  para: {
    left: "8.869vw",
    top: "18.369vw",
  },
  btn: {
    filter: "drop-shadow(0px 13px 27px rgba(0, 0, 0, 0.25))",
    borderRadius: "100px",
    left: "8.988vw",
    top: "18vw",
    fontSize: "0.833vw",
  },

  cusdt: {
    position: "relative",
    borderRadius: "0.595vw",
    width: "17.143vw",
    height: "18.988vw",
    top: "20vw",
    left: "12.857vw",
  },
  playpara: {
    position: "relative",
    textAlign: "center",
    color: "#ffff",
    fontSize: "1vw",
    top: "21.881vw",
    left: "-2vw",
  },

  PLAY: {
    position: "relative",
    textShadow: "0px 0px 30px #FFF8F8",
    color: "#ffff",
    textAlign: "center",
    top: "23.881vw",
    fontSize: "3.571vw",
    left: "-5vw",
  },
  card1001: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "40vw",
    left: "9.048vw",
  },
  card2002: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "20.131vw",
    left: "5.051vw",
  },
  card3003: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "20.131vw",
    left: "1.301vw",
  },
  card4004: {
    width: "19.414vw",
    height: "18.452vw",
    position: "relative",
    top: "20.11vw",
    left: "-2.807vw",
  },
});

export default function Exchange() {
  const classes = useStyles();
  return (
    <>
      <div className="background12">
        <NavBar />

        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h1 className={classes.heading} id="h1">
                Build Your <br /> Crypto Portfolio
              </h1>
              <p className={classes.para} id="p">
                Biworld exchange is your one-stop and easiest <br />
                platform to buy and sell cryptocurrency.
              </p>
              <button className={classes.btn} id="button" type="button">
                START NOW
              </button>
            </Grid>
            <Grid item xs={6}>
              <img className={classes.img} src={Coin} />
            </Grid>

            <Grid item xs={3}>
              <img className={classes.cusdt} src={btcusdt} />
            </Grid>

            <Grid item xs={3}>
              <img className={classes.cusdt} src={ethusd} id="cusdt22" />
            </Grid>

            <Grid item xs={3}>
              <img className={classes.cusdt} src={BTCUSDT} id="cusdt33" />
            </Grid>

            <Grid item xs={3}>
              <img className={classes.cusdt} src={ETHUSD} id="cusdt44" />
            </Grid>

            <Grid item xs={12}>
              <h1 className={classes.PLAY}>Biworld is for Everyone</h1>
              <p className={classes.playpara}>
                Everytime is good to make an investment. With Biworld you can
                buy, sell & trade cryptocurrencies with <br />
                confidence, trust & ease. Super easy for both first time
                investors as well as professional traders & world <br />
                class security features ensures your investments are in safe
                hands.
              </p>
            </Grid>
            <table class="w3-table">
              <tr>
                <th className="TRheading">Name</th>
                <th className="TRheading">MKT CAP</th>
                <th className="TRheading">FD MKT CAP</th>
                <th className="TRheading">PRICE</th>
                <th className="TRheading">AVAIL COIN</th>
                <th className="TRheading">TRADED VOL</th>
                <th className="TRheading">CHG%</th>
              </tr>

              <tr>
                <td>
                  <img src={bitcoin} />
                  <span
                    style={{
                      position: "relative",
                      top: "-7px",
                      color: "#FFFFFF",
                    }}
                  >
                    {" "}
                    BTC
                  </span>
                </td>
                <td className="TRheading">378.246B</td>
                <td className="TRheading">414.939B</td>
                <td className="TRheading">19759.00</td>
                <td className="TRheading">19.143M</td>
                <td className="TRheading">19.143M</td>
                <td className="TRheading">
                  <span className="red">-0.18%</span>
                </td>
              </tr>

              <tr>
                <td>
                  <img src={eth} />
                  <span
                    style={{
                      position: "relative",
                      top: "-7px",
                      color: "#FFFFFF",
                    }}
                  >
                    {" "}
                    ETH{" "}
                  </span>
                </td>
                <td className="TRheading">201.671B</td>
                <td className="TRheading">201.671B</td>
                <td className="TRheading">1649.51</td>
                <td className="TRheading">122.261M</td>
                <td className="TRheading">122.261M</td>
                <td className="TRheading">
                  <span className="blue">2.21%</span>
                </td>
              </tr>

              <tr>
                <td>
                  <img src={bnb} />
                  <span
                    style={{
                      position: "relative",
                      top: "-7px",
                      color: "#FFFFFF",
                    }}
                  >
                    {" "}
                    BNB{" "}
                  </span>
                </td>
                <td className="TRheading">67.549B</td>
                <td className="TRheading">69.16B</td>
                <td className="TRheading">279.5</td>
                <td className="TRheading">161.337M </td>
                <td className="TRheading">161.337M </td>
                <td className="TRheading">
                  <span className="blue">0.01%</span>
                </td>
              </tr>

              <tr>
                <td>
                  <img src={usdt} />
                  <span
                    style={{
                      position: "relative",
                      top: "-7px",
                      color: "#FFFFFF",
                    }}
                  >
                    {" "}
                    USDT{" "}
                  </span>
                </td>
                <td className="TRheading">51.796B</td>
                <td className="TRheading">51.796B</td>
                <td className="TRheading">1.00005000</td>
                <td className="TRheading">67.546B</td>
                <td className="TRheading">67.546B</td>
                <td className="TRheading">
                  <span className="red">-0.27%</span>
                </td>
              </tr>

              <tr>
                <td>
                  <img src={xrp} />
                  <span
                    style={{
                      position: "relative",
                      top: "-7px",
                      color: "#FFFFFF",
                    }}
                  >
                    {" "}
                    XRP{" "}
                  </span>
                </td>
                <td className="TRheading">45.094B </td>
                <td className="TRheading">55.9B</td>
                <td className="TRheading">0.33257</td>
                <td className="TRheading">49.646B</td>
                <td className="TRheading">49.646B</td>
                <td className="TRheading">
                  <span className="blue">0.01%</span>
                </td>
              </tr>
            </table>

            <h1 className="trusted">
              The Most Trusted <br /> Cryptocurrency Platform
            </h1>

            <Grid item xs={3}>
              <Card
                id="card1001"
                className={classes.card1001}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="reala">
                  <h1>SAFE & SECURE</h1>
                  <p>
                    Your funds & personal information is completely secured by a
                    blockchain smart contract.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                id="card2002"
                className={classes.card2002}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="reala">
                  <h1>LIGHTNING-QUICK</h1>
                  <p>
                    Trades are executed instantly & confirmed on the blockchain
                    within hours.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                id="card3003"
                className={classes.card3003}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="reala">
                  <h1>Fast Withdrawals</h1>
                  <p>
                    Unlike other platforms, with us is no wait required to
                    withdraw your funds from the exchange.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                id="card4004"
                className={classes.card4004}
                style={{
                  borderRadius: "31.58px",
                  boxShadow: "0px 0px 130px rgba(0, 0, 0, 0.1)",
                  color: "#ffff",
                }}
              >
                <CardContent className="reala">
                  <h1>MOBILE FRIENDLY</h1>
                  <p>
                    We have designed our exchange from the ground up, so you can
                    use it from any device..
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <h1 className="trade">
                Trade On <br /> The Go
              </h1>

              <ul className="lllist">
                <li>View real-time cryptocurrency prices</li>
                <li>
                  Buy and sell BTC, ETH, XRP, OKB and other digital <br />
                  assets with ease
                </li>
                <li>
                  Get live price-change alerts for cryptocurrencies <br />
                  you follow
                </li>
                <li>Check BTC spot, futures and options prices</li>
                <li>
                  Compare cryptocurrency prices across <br />
                  exchanges
                </li>
              </ul>
            </Grid>
            <Grid item xs={6}>
              <img className="mMoObile" src={Phone} />
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
