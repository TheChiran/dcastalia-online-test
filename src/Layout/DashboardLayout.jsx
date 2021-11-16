import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Header from "../Components/Header";
import Contents from "../Components/Contents";
import { COLORS } from "../helpers/constants";
import Footer from "../Components/Footer";

export default function DashboardLayout() {
  const ContentsDiv = styled("div")`
    background: ${COLORS.color7};
    border-bottom: 2px solid ${COLORS.color3};
    padding: 15px 0;
  `;
  const FooterGrid = styled(Grid)`
    margin: 15px 0;
  `;
  return (
    <Grid container direction="column" spacing="1">
      <Grid item lg={12} md={12}>
        <Header />
      </Grid>
      <Grid item lg={12} md={12}>
        <ContentsDiv>
          <Contents />
        </ContentsDiv>
      </Grid>
      <FooterGrid item lg={12} md={12}>
        <Footer />
      </FooterGrid>
    </Grid>
  );
}
