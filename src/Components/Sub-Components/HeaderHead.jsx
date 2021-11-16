import React from "react";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import jugoljatra from "../../assets/jugol-jatra.svg";
import userAvatar from "../../assets/user-avatar.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { COLORS } from "./../../helpers/constants.js";
import { styled } from "@mui/system";
export default function HeaderHead() {
  const ContainerGrid = styled(Grid)`
    padding: 1em 5em;
    border-bottom: 1px solid ${COLORS.color7};
  `;
  const CustomButton = styled(Button)`
    border-radius: 2em;
    padding: 0.5em 2em;
    border-color: ${COLORS.color1};
    color: ${COLORS.color1};
  `;
  const iconStyles = {
    color: COLORS.color1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const UserGrid = styled(Grid)`
    height: 100%;
    border-left: 1px solid ${COLORS.color7};
  `;
  const UserSectionGrid = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.color1};
  `;
  return (
    <ContainerGrid container spacing="2">
      <Grid item lg={8} md={8} sm={12} xm={12}>
        <img src={jugoljatra} alt="Jugol Jatra Logo" />
      </Grid>
      <Grid item lg={4} md={4} xs={12} sm={12}>
        <Grid container justifyContent="flex-end" spacing="2">
          <UserSectionGrid item lg={3} md={3}>
            <CustomButton variant="outlined">Upgrade</CustomButton>
          </UserSectionGrid>
          <Grid item lg={1} md={1} style={iconStyles}>
            <NotificationsNoneIcon />
          </Grid>
          <Grid item lg={1} md={1} style={iconStyles}>
            <MailOutlineIcon />
          </Grid>
          <UserGrid item lg={6} md={6}>
            <Grid container direction="row" spacing="1">
              <UserSectionGrid item lg={4} md={4}>
                <Typography variant="p" component="p">
                  Hello John!
                </Typography>
              </UserSectionGrid>
              <UserSectionGrid item lg={4} md={4}>
                <Avatar alt="User Avatar Icon" src={userAvatar} />
              </UserSectionGrid>
            </Grid>
          </UserGrid>
        </Grid>
      </Grid>
    </ContainerGrid>
  );
}
