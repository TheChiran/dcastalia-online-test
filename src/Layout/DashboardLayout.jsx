import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Header from "../Components/Header";
import Contents from "../Components/Contents";
import { COLORS } from "../helpers/constants";

export default function DashboardLayout() {
  const ContentsDiv = styled("div")`
    background: ${COLORS.color7};
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
      <Grid item lg={12} md={12}>
        {/* footer section */}
      </Grid>
    </Grid>
  );
}
