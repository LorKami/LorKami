import React from "react";
import "./Footerv2.css";

import Discord from "../../images/discord2.png";
import Twitter from "../../images/twitter2.png";
import FooterImage from "../../images/gozu1.png";

const Footerv2 = () => {
  return (
    <div>
      
      <div className="Footer">
        <div className="FooterConainter">
          <div className="LeftSocial">
            <div className="SocialText">
              <p>PAGINA PERSONAL DE LORKAMI</p>
            </div>
            <div className="SocialButton">

              <div className="Button">
                <div className="ImageButton">
                <a href="">
                  <img src={Discord}></img>
                </a>
                </div>
                  <p>DISCORD</p>
              </div>

              <div className="Button">
                <div className="ImageButton">
                <a href="">
                  <img src={Twitter}></img>
                </a>
                </div>
                  <p>TWITTER</p>
              </div>

            </div>
          </div>
          <div className="CenterImage">
            <div className="ImageCentered">
                <img src={FooterImage}></img>
            </div>
            <div className="CenterCopy">
              <p>© 2024 | LorKami</p>
            </div>
          </div>
          <div className="RightText">
            <div className="RightContent">
            <p>
            En cada paso de mi camino, he invertido esfuerzo y dedicación para tejer un tapiz de recuerdos inolvidables. En mi página web personal, anhelo plasmar la belleza de mis vivencias y las joyas de la amistad, creando un espacio donde mis esfuerzos se entrelacen con la calidez de los lazos compartidos ❤️
            </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footerv2;
