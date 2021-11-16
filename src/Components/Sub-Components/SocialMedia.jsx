import React from "react";
import { Avatar, Grid } from "@mui/material";
import { RiFacebookFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { styled } from "@mui/system";

export default function SocialMedia() {
  const CustomAvatar = styled(Avatar)`
    background: linear-gradient(180deg, #4c1f83 0%, #6b207c 100%);
  `;
  return (
    <Grid
      container
      direction="row"
      spacing="1"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Grid
          container
          direction="row"
          spacing="1"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item lg={1} md={2} sm={2} xs={2}>
            <CustomAvatar>
              <RiFacebookFill />
            </CustomAvatar>
          </Grid>
          <Grid item lg={1} md={2} sm={2} xs={2}>
            <CustomAvatar>
              <BsWhatsapp />
            </CustomAvatar>
          </Grid>
          <Grid item lg={1} md={2} sm={2} xs={2}>
            <CustomAvatar>
              <IoLogoInstagram />
            </CustomAvatar>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
