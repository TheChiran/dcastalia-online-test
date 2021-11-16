import React from "react";
import { Divider, Grid } from "@mui/material";
import { styled } from "@mui/system";
import jugolJatraLogo from "./../assets/jugol-jatra.svg";
import { StyleToCenterWithFlex } from "../helpers/CommonStyles";
import NavLinks from "./Sub-Components/NavLinks";
import SocialMedia from "./Sub-Components/SocialMedia";
import FooterCopyRightContent from "./Sub-Components/FooterCopyRightContent";

export default function Footer() {
  const Div = styled("div")`
    width: 80%;
    margin: 0 auto;
  `;
  const Image = styled("div")`
    ${StyleToCenterWithFlex}
  `;
  const Navigation = styled("div")`
    margin: 45px 0 0 0;
  `;
  const CustomDiv = styled(Grid)`
    margin: 25px 0;
  `;
  return (
    <Div>
      <Grid container direction="column" spacing="1">
        <Grid item lg={12} md={12}>
          <Image>
            <img src={jugolJatraLogo} alt="Jugol Jatra Logo" />
          </Image>
        </Grid>
        <Navigation item lg={12} md={12}>
          <NavLinks center />
        </Navigation>
        <Divider />
        <CustomDiv item lg={12} md={12}>
          <SocialMedia />
        </CustomDiv>
        <CustomDiv item lg={12} md={12}>
          <FooterCopyRightContent />
        </CustomDiv>
      </Grid>
    </Div>
  );
}
