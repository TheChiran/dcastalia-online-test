import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Header from "../Components/Header";
import Contents from "../Components/Contents";

export default function DashboardLayout() {
  const ContentsDiv = styled("div")`
    width: 80%;
    margin: 0 auto;
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
