import React, { useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Grid,
  Typography,
} from "@mui/material";
import jugoljatra from "../../assets/jugol-jatra.svg";
import userAvatar from "../../assets/user-avatar.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { COLORS } from "./../../helpers/constants.js";
import { Box, styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "./NavLinks";
import { StyleToCenterWithFlex } from "../../helpers/CommonStyles";
export default function HeaderHead() {
  const ContainerGrid = styled(Grid)`
    padding: 1em 5em;
    border-bottom: 1px solid ${COLORS.color7};

    @media only screen and (max-width: 890px) {
      .logo-section {
        max-width: 40%;
      }
      .content {
        max-width: 60%;
      }
    }
    @media only screen and (max-width: 768px) {
      padding: 16px 16px;
      .avatar-div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15%;
        visibility: visible;
      }
      .content {
        display: flex;
      }
      .logo-section: {
        text-align: center;
      }
      .content .content-container {
        justify-content: flex-end;
      }
      .content .content-container .upgrade-btn,
      .user {
        display: none;
      }
    }
  `;
  const CustomButton = styled(Button)`
    border-radius: 2em;
    padding: 0.5em 2em;
    border-color: ${COLORS.color1};
    color: ${COLORS.color1};
  `;
  const IconDiv = styled(Grid)`
    color: ${COLORS.color1};
    display: flex;
    align-items: center;
    justify-content: center;
  `;
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
  const MenuDiv = styled("div")`
    width: 0;
    visibility: hidden;
  `;
  const [anchor, setAnchor] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAnchor(open);
  };
  const upgradeButton = (
    <UserSectionGrid className="upgrade-btn" item lg={3} md={3}>
      <CustomButton variant="outlined">Upgrade</CustomButton>
    </UserSectionGrid>
  );
  const userAvatarImage = <Avatar alt="User Avatar Icon" src={userAvatar} />;
  const userWelcome = (message) => (
    <Typography variant="p" component="p">
      {message}
    </Typography>
  );
  const CustomDivider = styled(Divider)`
    margin: 25px 0;
  `;
  const DrawerDiv = styled("div")`
    width: 90%;
    margin: 0 auto;
  `;
  const DrawerUserAvatarDiv = styled("div")`
    flex-direction: column;
    ${StyleToCenterWithFlex}
  `;
  return (
    <ContainerGrid container spacing="2">
      <MenuDiv className="avatar-div">
        <Avatar onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Avatar>
        <Drawer anchor="left" open={anchor} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
              margin: "15px 0",
              textAlign: "center",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <DrawerDiv>
              <DrawerUserAvatarDiv>
                {userAvatarImage}
                {userWelcome("Hello John")}
              </DrawerUserAvatarDiv>
              <CustomDivider />
              <NavLinks row={false} />
              <CustomDivider />
              {upgradeButton}
            </DrawerDiv>
          </Box>
        </Drawer>
      </MenuDiv>
      <Grid className="logo-section" item lg={8} md={8} sm={12} xm={12}>
        <img src={jugoljatra} alt="Jugol Jatra Logo" />
      </Grid>
      <Grid className="content" item lg={4} md={4} xs={4} sm={4}>
        <Grid className="content-container" container justifyContent="flex-end">
          {upgradeButton}
          <IconDiv className="notification-icon" item lg={1} md={1}>
            <NotificationsNoneIcon />
          </IconDiv>
          <IconDiv className="mail-icon" item lg={1} md={1}>
            <MailOutlineIcon />
          </IconDiv>
          <UserGrid className="user" item lg={7} md={7} sm={7} xs={12}>
            <Grid container direction="row" spacing="1">
              <UserSectionGrid item lg={4} md={4}>
                {userWelcome("Hello John")}
              </UserSectionGrid>
              <UserSectionGrid item lg={4} md={4}>
                {userAvatarImage}
              </UserSectionGrid>
            </Grid>
          </UserGrid>
        </Grid>
      </Grid>
    </ContainerGrid>
  );
}
