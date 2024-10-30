import { useEffect, useState } from "react";
import { TBanner } from "../../type/Types";
import axios from "axios";
import Container from "../container/Container";
import styled from "./banner.module.css"

function Banner() {
  const [banner, setBanner] = useState<TBanner[]>();

  useEffect(() => {
    axios.get("http://localhost:8890/aboutUs").then((res) => {
      setBanner(res.data);
    });
  }, []);

  console.log(banner);
  return (
    <div>
      <Container>
        <div className={styled.Banners}>

        <div className={styled.Bannerslide} >
          <img src="/partnerLogo/abb.jpg" alt="" />
          <img src="/partnerLogo/ASTRUM.webp" alt="" />
          <img src="/partnerLogo/blumotix.webp" alt="" />
          <img src="/partnerLogo/EAE.webp" alt="" />
          <img src="/partnerLogo/EISOUND.webp" alt="" />
          <img src="/partnerLogo/GIRA.webp" alt="" />
          <img src="/partnerLogo/GVS.webp" alt="" />
          <img src="/partnerLogo/INTERRA.webp" alt="" />
          <img src="/partnerLogo/MDT.webp" alt="" />
          <img src="/partnerLogo/MERTEN.webp" alt="" />
          <img src="/partnerLogo/SCHNEIDER.webp" alt="" />
          <img src="/partnerLogo/SIEMENS.webp" alt="" />
          <img src="/partnerLogo/MEAN WELL.webp" alt="" />
          <img src="/partnerLogo/HDL.webp" alt="" />
          <img src="/partnerLogo/KNX.webp" alt="" />
          <img src="/partnerLogo/WHD.webp" alt="" />
          <img src="/partnerLogo/ZENNIO.webp" alt="" />



        </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
