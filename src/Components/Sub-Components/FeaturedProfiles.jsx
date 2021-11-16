import { Avatar, Card, CardContent, Divider, Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { COLORS } from "../../helpers/constants";
import User1Img from "./../../assets/profileUser1.png";
import User2Img from "./../../assets/profileUser2.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "@mui/material/Chip";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
export default function FeaturedProfiles() {
  const Header = styled("h2")`
    color: ${COLORS.color1};
    font-weight: 450;
  `;
  const CustomCard = styled(Card)`
    border-radius: 12px;
    &:not(:first-child) {
      margin-top: 25px;
    }
  `;
  const CustomAvatar = styled(Avatar)`
    width: 80px;
    height: 80px;
  `;
  const CustomDivider = styled(Divider)`
    margin: 15px 0;
  `;
  const TitleDiv = styled("div")`
    display: flex;

    span:nth-of-type(1) {
      width: 90%;
      font-weight: 500;
    }
    span:nth-of-type(2) {
      width: 10%;
      color: ${COLORS.color6};
    }
  `;
  const CustomChip = styled(Chip)`
    color: ${COLORS.color3};
    border-radius: 5px;
  `;
  const UserInformation = styled("div")`
    color: ${COLORS.color1};
    margin: 15px 0;
    span {
      display: inline-block;
    }
  `;
  const Footer = styled(Grid)`
    text-align: center;
    span {
      color: ${COLORS.color3};
      transition: 0.5s;
    }
    span:hover {
      cursor: pointer;
    }
  `;
  const data = [
    {
      id: 123456,
      age: 23,
      name: "Faria Rahman Mou",
      height: "5 Feet 3 Inches",
      city: "Dhaka,Bangladesh",
      dist: "Rajshahi, Bangladesh",
      imgURL: User1Img,
    },
    {
      id: 123456,
      age: 23,
      name: "Rafia Irani Tripty",
      height: "5 Feet 3 Inches",
      city: "Dhaka,Bangladesh",
      dist: "Feni, Bangladesh",
      imgURL: User2Img,
    },
  ];
  return (
    <Grid container direction="column" spacing="2">
      <Grid item lg={12} md={12}>
        <Header>Featured Profiles</Header>
      </Grid>
      <Grid item lg={12} md={12}>
        {data.map((user) => {
          return (
            <CustomCard>
              <CardContent>
                <Grid container direction="column" spacing="1">
                  <Grid item lg={12} md={12}>
                    <Grid container direction="row" spacing="1">
                      <Grid item lg={4}>
                        <CustomAvatar
                          src={user.imgURL}
                          alt="User Profile Image"
                        />
                      </Grid>
                      <Grid item lg={8}>
                        <TitleDiv>
                          <span className="header">{user.name}</span>
                          <span className="icon">
                            <MoreVertIcon />
                          </span>
                        </TitleDiv>
                        <CustomChip label={`ID: ${user.id}`} />
                        <UserInformation>
                          <span>
                            {user.age} Years, {user.height}
                          </span>
                          <span>{user.city}</span>
                          <span>From: {user.dist}</span>
                        </UserInformation>
                      </Grid>
                    </Grid>
                  </Grid>
                  <CustomDivider />
                  <Grid item lg={12} md={12}>
                    <Footer
                      container
                      direction="row"
                      spacing="1"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item lg={4} md={4}>
                        <span>
                          <SendOutlinedIcon />
                        </span>
                      </Grid>
                      <Grid item lg={4} md={4}>
                        <span>
                          <MailOutlineOutlinedIcon />
                        </span>
                      </Grid>
                      <Grid item lg={4} md={4}>
                        <span>
                          <FavoriteBorderOutlinedIcon />
                        </span>
                      </Grid>
                    </Footer>
                  </Grid>
                </Grid>
              </CardContent>
            </CustomCard>
          );
        })}
      </Grid>
    </Grid>
  );
}
