import { Grid } from "@mui/material";
import React from "react";
import Header from "../Components/Header";

export default function DashboardLayout() {
  return (
    <Grid container direction="column" spacing="1">
      <Grid item lg={12} md={12}>
        <Header />
      </Grid>
      <Grid item lg={12} md={12}></Grid>
      <Grid item lg={12} md={12}></Grid>
    </Grid>
  );
}
