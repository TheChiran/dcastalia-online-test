import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import userAvatar from "./../../assets/user.png";
import crownIcon from "./../../assets/crown.svg";
import membershipBG from "./../../assets/membership-bg.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled } from "@mui/system";
import { COLORS } from "../../helpers/constants";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
export default function MemberInfoCard() {
  const memberAvatarSectionStyle = {
    backgroundImage: `url(${membershipBG})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const UserAvatar = styled(Avatar)`
    width: 120px;
    height: 120px;
    border: 1px solid ${COLORS.color3};
    padding: 0;
  `;
  const UserName = styled("h2")`
    text-align: center;
    color: ${COLORS.color1};
  `;
  const UserMembershipType = styled("p")`
    color: ${COLORS.color3};
    text-align: center;
  `;
  const LinkList = styled(List)`
    color: ${COLORS.color1};
    &:nth-of-type(1) {
      color: ${COLORS.color3};
    }
  `;
  const data = [
    { id: 1, icon: <DashboardIcon />, text: "Dashboard" },
    { id: 2, icon: <PersonIcon />, text: "My Profile" },
    { id: 3, icon: <EmailIcon />, text: "Messages" },
    { id: 4, icon: <FavoriteBorderOutlinedIcon />, text: "My Matches" },
    { id: 5, icon: <SettingsIcon />, text: "Account Settings" },
  ];
  return (
    <Card>
      <CardContent>
        <Grid
          style={{ margin: "0", padding: "0", paddingBottom: "25px" }}
          container
          direction="column"
          spacing="2"
        >
          <Grid item lg={12} md={12}>
            <Grid
              style={memberAvatarSectionStyle}
              container
              direction="column"
              alignItems="center"
            >
              <Grid item lg={12} md={12}>
                <UserAvatar src={userAvatar} alt="User Image" />
              </Grid>
              <Grid item lg={12} md={12}>
                <UserName>John Doe</UserName>
                <UserMembershipType>
                  <img src={crownIcon} alt="Crown Icon" /> Premium Member
                </UserMembershipType>
              </Grid>
            </Grid>
          </Grid>
          <Divider style={{ width: "80%", margin: "0 auto" }} />
          <Grid container direction="column" alignItems="flex-start">
            <Grid item lg={12} md={12}>
              <LinkList>
                {data.map((content) => {
                  return (
                    <ListItem key={content.id}>
                      <ListItemButton>
                        <ListItemIcon>{content.icon}</ListItemIcon>
                        <ListItemText primary={content.text} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </LinkList>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
