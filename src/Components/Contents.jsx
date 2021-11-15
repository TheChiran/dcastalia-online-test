import { Grid } from "@mui/material";
import React from "react";

export default function Contents() {
  return (
    <Grid container direction="row" spacing="2">
      <Grid item lg={4} md={4}>
        {/* Member Info Card*/}
      </Grid>
      <Grid item lg={8} md={8}>
        <Grid container direction="column" spacing="2">
          <Grid item lg={12} md={12}></Grid>
          <Grid item lg={12} md={12}>
            <Grid container direction="row" spacing="2">
              <Grid item lg={8} md={8}>
                {/* membership */}
              </Grid>
              <Grid item lg={4} md={4}>
                {/* featured profiles */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
