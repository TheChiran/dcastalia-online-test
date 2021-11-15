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
import DraftsIcon from "@mui/icons-material/Drafts";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
export default function MemberInfoCard() {
  const memberAvatarSectionStyle = {
    backgroundImage: `url(${membershipBG})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
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
                <Avatar
                  src={userAvatar}
                  alt="User Image"
                  style={{ width: "120px", height: "120px" }}
                />
              </Grid>
              <Grid item lg={12} md={12}>
                <h2>John Doe</h2>
                <p>
                  <img src={crownIcon} alt="Crown Icon" /> Premium Member
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Divider style={{ width: "80%", margin: "0 auto" }} />
          <Grid container direction="column" alignItems="flex-start">
            <Grid item lg={12} md={12}>
              <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Matches" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Account Settings" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
