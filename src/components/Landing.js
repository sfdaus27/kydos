import React from "react";
import "./Landing.css";

export class Landing extends React.Component {
  render() {
    return (
      <div class="containerWelcome">
        <div class="wrapperLogo">
          <div class="divLogo">
            <img
              src="https://cdn.discordapp.com/attachments/312173234663718913/727526310699729017/k.png"
              className="img-responsive"
              alt="K"
            />
            <img
              src="https://cdn.discordapp.com/attachments/312173234663718913/727526359072768170/y.png"
              className="img-responsive"
              alt="Y"
            />
            <img
              src="https://cdn.discordapp.com/attachments/312173234663718913/727526334800199680/d.png"
              className="img-responsive"
              alt="D"
            />
            <img
              src="https://cdn.discordapp.com/attachments/312173234663718913/727526416375087104/o.png"
              className="img-responsive"
              alt="O"
            />
            <img
              src="https://cdn.discordapp.com/attachments/312173234663718913/727526384041459782/s.png"
              className="img-responsive"
              alt="S"
            />
          </div>
          <div class="divBotLogo">
            <p class="logoTxt">To Each Person for All Occasions</p>
          </div>
        </div>
      </div>
    );
  }
}
