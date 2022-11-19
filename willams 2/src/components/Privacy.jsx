import { Box, Card, CardContent } from "@mui/material";
import React from "react";
import "./css/Privacy.css";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    background: "rgba(255, 255, 255, 0.07)",
    width: {
      xs: "87.38%",
      sm: "87.38%",
      md: "87.38%",
      lg: "87.38%",
    },
    height: "85%",
    position: "absolute",
    left: "6.31%",
    right: "6.31%",
    top: "4.84%",
    bottom: "14.45%",
  },
  card2: {
    width: {
      xs: "84.38%",
      sm: "84.38%",
      md: "84.38%",
      lg: "84.38%",
    },
    position: "relative",
    height: "100%",
    top: "256px",
  },
  footer: {
    position: "relative",
    top: "195.619vw",
    "@media(max-width:1340px)": {
      position: "relative",
      top: "200.619vw",
    },
    "@media(max-width:870px)": {
      position: "relative",
      top: "220.619vw",
    },
    "@media(max-width:660px)": {
      position: "relative",
      top: "240.619vw",
    },
  },
});

export default function Privacy() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Box className="cardbacks">
        <Card className={classes.root} id="card1">
          <CardContent>
            <h1>Privacy Policy</h1>
            <Card className={classes.card2} id="card2">
              <p>
                This Privacy Policy governs the manner in which Biworld
                technologies collect, use, maintain and disclose information
                collected from the users (each person, one "User") of the
                website https:biworld.io ("Website"). This Privacy Policy
                applies to the Website and all products and services offered by
                Biworld. You have the right to access Biworld websites without
                telling us who you are and without disclosing any information
                about yourself. However, there are times when we need
                information from you.
              </p>
              <br />
              <p>
                Biworld does not rent, sell or share personal information about
                you with other people or unaffiliated companies except:
              </p>
              <ul>
                <li>To provide the products or services you have requested.</li>
                <li>When we have your permission or in the following cases:</li>
                <li>
                  We provide information to trusted organizations working on
                  behalf of or with Biworld under strict confidentiality
                  agreements. These organizations may use your personal
                  information to help Biworld communicate with you about offers
                  from Biworld and our marketing partners. However, these
                  companies do not have any independent rights to share or
                  further disseminate this information.
                </li>
                <li>
                  We respond to subpoenas, court orders or legal process either
                  to establish or exercise our legal rights or to defend against
                  legal claims.
                </li>
                <li>
                  We believe it is necessary to share information to
                  investigate, prevent or take action against any illegal
                  activity, suspected fraud, situations involving potential
                  threats for the physical safety of any person or as otherwise
                  required by law.
                </li>
              </ul>
              <h2>Personally Identifiable Information</h2>
              <p>
                We may collect personally identifiable information from "Users"
                in a variety of ways, including, but not limited to, when a User
                visits our website, contacts us on the website, places order,
                sign up for a newsletter, respond to a survey, fill out a form,
                and get involved with the activities, services, features or
                other resources we offer on our Website. Users may be asked, as
                appropriate, for their name, email address, mailing address and
                telephone number. However, users may access our Website
                anonymously. We will only collect personally identifiable
                information from Users if they voluntarily submit such
                information to us.
              </p>
              <h2>Web browser cookies</h2>
              <p>
                Our website may use "cookies" to enhance the User experience. A
                user's web browser places cookies on their hard drive for
                record-keeping purposes and sometimes to track information about
                them. Users can choose to set their web browser to refuse
                cookies or to notify you when a cookie is being sent. If they
                do, be aware that some parts of the Site may not function
                properly.
              </p>
              <h2>How we use the information we collect</h2>
              <p>
                Biworld may collect and use the User's personal information for
                the following purposes:
              </p>
              <ul>
                <li>
                  To improve customer service, the information you provide will
                  help us more effectively respond to your customer service
                  requests and support needs.
                </li>
                <li>
                  To improve our Website, we may use the feedback you provide to
                  improve our products and services.
                </li>
                <li>
                  To send periodic emails, we may use email addresses to send
                  Users information and updates regarding their orders. It can
                  also be used to respond to their requests, questions and/or
                  other requests. If a User decides to opt-in to our mailing
                  list, they will receive an email that may include company
                  news, updates, related product or service information, etc. If
                  at any time the User wishes to unsubscribe from future emails,
                  we will include unsubscribe instructions at the bottom of each
                  email.
                </li>
              </ul>
              <h2>How we protect your information</h2>
              <p>
                We put in place appropriate data collection, storage and
                processing practices and security measures to protect against
                unauthorized access, alteration, disclose or destroy personal
                information, usernames, passwords, transaction information and
                data stored on your Website. The exchange of sensitive and
                private data between the Website and its Users takes place over
                an SSL secured communication channel and is encrypted and
                protected with a digital signature. Our website also complies
                with PCI vulnerability standards to create the safest possible
                environment for Users.
              </p>
              <h2>Share your personal information</h2>
              <p>
                We do not sell, trade or rent users' personally identifiable
                information to others. We may share general aggregate
                demographic information that is not linked to any personally
                identifiable information regarding visitors and users with our
                business partners, branches, trusted advertiser for the above
                purposes.
              </p>
              <h2>Links to non-Biworld websites</h2>
              <p>
                Biworld may provide links to third party websites for your
                convenience and information. If you access such links through
                the Biworld website, you will leave the Biworld website. Biworld
                does not control such websites or their security practices,
                which may differ from Biworld's practices.We do not endorse or
                make any representations about third party websites. Personal
                data that you choose to provide or collect by these third
                parties, including any social media sites featured on our
                website, is not covered by Biworld's Privacy Policy. We
                encourage you to review the privacy policy of any website before
                submitting your personal information. We may also provide social
                media features on our website that allow you to share Biworld
                information with your social networks and interact with Biworld
                on various social media sites. Your use of these features may
                result in the collection or sharing of information about you,
                depending on the features. We encourage you to review the
                privacy policies and settings on the social media sites you
                interact with to ensure that you understand the information that
                may be shared by those sites.
              </p>
              <h2>Comply with the Children's Online Privacy Protection Act</h2>
              <p>
                Protecting the privacy of young children is especially
                important. For that reason, we never collect or maintain
                information on our Website from people we actually know are
                under the age of 13 and no part of our website is structured to
                attract anyone under the age of 13.
              </p>
              <h2>Changes to this privacy policy</h2>
              <p>
                Biworld reserves the right to update this privacy policy at any
                time. We will post any Policy changes on this page and, if those
                changes are material, we will provide a more prominent notice
                (including, for some services, notification via email about
                Policy changes).We will also keep previous versions of this
                Policy in an archive for your review. We encourage Users to
                regularly check this page for any changes to stay updated on how
                we are helping to protect the personal information we collect.
                You acknowledge and agree that it is your responsibility to
                periodically review this privacy policy and be aware of
                amendments.
              </p>
              <h2>Your acceptance of these terms</h2>
              <p>
                By using this Website, you mean that you accept this policy. If
                you do not agree with this policy, please do not use our
                Website. Your continued use of the Website after posting changes
                to this policy will be deemed your acceptance of such changes.
              </p>
              <h2>Contact us</h2>
              <p>
                If you have any questions about this Privacy Policy, the
                operations of this website, or your transactions with this
                website, please contact us at: contact@biworld.io
              </p>
            </Card>
          </CardContent>
        </Card>
      </Box>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>
  );
}
