import { Grid } from "@mui/material";
import React from "react";
import HeaderHead from "./Sub-Components/HeaderHead";

export default function Header() {
  return (
    <Grid container direction="column">
      <Grid item lg={12} md={12}>
        <HeaderHead />
      </Grid>
      <Grid item lg={12} md={12}></Grid>
    </Grid>
  );
}
