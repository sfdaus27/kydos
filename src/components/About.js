import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyContainer, Sticky } from "react-sticky";
import "./About.css";

export class About extends React.Component {
  render() {
    return (
      <div class="aboutContainer">
        <StickyContainer>
          <Sticky disableCompensation>
            {({ style }) => (
              <div style={style}>
                <Navbar />
              </div>
            )}
          </Sticky>
          <div class="aboutContent">
            <div class="backgroundAbout"></div>
            <div class="contentAbout1"></div>
            <div class="contentAbout2">
              <div class="logoAbout">
                <img
                  src="https://cdn.discordapp.com/attachments/312173234663718913/730353407465881620/kydoslogo.png"
                  alt="kydos logo"
                />
              </div>
              <div class="textAbout">
                <p>
                  Evoked by contextual processing In attentional orienting &
                  concentration of luscious Idea in unrevealing situation that
                  leads to an inescapable frustation. Good karma give us a try
                  to break it out, and get it all out. As a wise man once said,
                  from a tiny spark may burst a mighty flame. With a fiery
                  desire and flowery pleasure, came out from the underground
                  scope filled with passion and compassion, Poshbrain loads
                  entirety that could reach for a vertical insight through
                  matter, as days go by. Perplexion and deliberation, ego and
                  denial, disillusion and altercation, solitude and love,
                  devotion and abomination, underrate and appreciate, highs and
                  lows. All these things originate whole Poshbrain eclectic
                  identity. Poshbrain has been a go-to for its kind since it
                  started in late 2015, offering bunch of ritzy designed goods
                  and swanky selections of colorway. We representing the verve
                  of eccentric, edgy clothiers and whatnot. The whole seasons
                  inspired by a perpetual journey of love and emotional roller
                  coaster ride.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </StickyContainer>
      </div>
    );
  }
}
