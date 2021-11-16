import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import {
  CommonBoxShadow,
  StyleToCenterWithFlex,
} from "../helpers/CommonStyles";
import HeaderHead from "./Sub-Components/HeaderHead";
import NavLinks from "./Sub-Components/NavLinks";

export default function Header() {
  const CustomGrid = styled(Grid)`
    ${CommonBoxShadow}
  `;
  const CustomNavLinks = styled(Grid)`
    ${StyleToCenterWithFlex}
  `;
  return (
    <CustomGrid container direction="column">
      <Grid item lg={12} md={12}>
        <HeaderHead />
      </Grid>
      <CustomNavLinks item lg={12} md={12}>
        <NavLinks />
      </CustomNavLinks>
    </CustomGrid>
  );
}
