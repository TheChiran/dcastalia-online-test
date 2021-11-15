import React from "react";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import jugoljatra from "../../assets/jugol-jatra.svg";
import userAvatar from "../../assets/user-avatar.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { COLORS } from "./../../helpers/constants.js";
export default function HeaderHead() {
  const styles = {
    padding: "1em 5em",
    borderBottom: `1px solid ${COLORS.color7}`,
  };
  const buttonStyles = {
    borderRadius: "2em",
    padding: "0.5em 2em",
    borderColor: COLORS.color1,
    color: COLORS.color1,
  };
  const iconStyles = {
    color: COLORS.color1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const horizontalDivStyles = {
    height: "100%",
    borderLeft: `1px solid ${COLORS.color7}`,
  };
  const userSectionContentStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.color1,
  };
  return (
    <Grid container spacing="2" style={styles}>
      <Grid item lg={8} md={8}>
        <img src={jugoljatra} alt="Jugol Jatra Logo" />
      </Grid>
      <Grid item lg={4} md={4}>
        <Grid container justifyContent="flex-end" spacing="2">
          <Grid style={userSectionContentStyles} item lg={3} md={3}>
            <Button style={buttonStyles} variant="outlined">
              Upgrade
            </Button>
          </Grid>
          <Grid item lg={1} md={1} style={iconStyles}>
            <NotificationsNoneIcon />
          </Grid>
          <Grid item lg={1} md={1} style={iconStyles}>
            <MailOutlineIcon />
          </Grid>
          <Grid item lg={6} md={6} style={horizontalDivStyles}>
            <Grid container direction="row" spacing="1">
              <Grid style={userSectionContentStyles} item lg={4} md={4}>
                <Typography variant="p" component="p">
                  Hello John!
                </Typography>
              </Grid>
              <Grid style={userSectionContentStyles} item lg={4} md={4}>
                <Avatar alt="User Avatar Icon" src={userAvatar} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
