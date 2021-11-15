import { Grid } from "@mui/material";
import React from "react";
import Contents from "../Components/Contents";
import Header from "../Components/Header";

export default function DashboardLayout() {
  return (
    <Grid container direction="column" spacing="1">
      <Grid item lg={12} md={12}>
        <Header />
      </Grid>
      <Grid style={{ width: "80%", margin: "0 auto" }} item lg={12} md={12}>
        <Contents />
      </Grid>
      <Grid item lg={12} md={12}></Grid>
    </Grid>
  );
}
