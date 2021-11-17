import { Grid } from "@mui/material";
import React from "react";
import ContentCards from "./Sub-Components/ContentCards";
import MemberInfoCard from "./Sub-Components/MemberInfoCard";
import SearchInput from "./Sub-Components/SearchInput";
import card1icon from "./../assets/card1ICON.svg";
import card1bg from "./../assets/card1bg.png";
import card2icon from "./../assets/card2Icon.svg";
import card2bg from "./../assets/card2bg.png";
import card3icon from "./../assets/Card3icon.svg";
import card3bg from "./../assets/card3bg.png";
import MembershipCard from "./Sub-Components/MembershipCard";
import FeaturedProfiles from "./Sub-Components/FeaturedProfiles";
import { styled } from "@mui/system";
const cardData = [
  {
    iconUrl: card1icon,
    bgURL: card1bg,
    countNumber: "1,099",
    numberContent: "Interests Remaining",
  },
  {
    iconUrl: card2icon,
    bgURL: card2bg,
    countNumber: "1,020",
    numberContent: "Matched Profiles",
  },
  {
    iconUrl: card3icon,
    bgURL: card3bg,
    countNumber: "1,057",
    numberContent: "Favorites Remaining",
  },
];
export default function Contents() {
  const ContentsGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto;
    padding: 25px 0;
  `;
  const ContentCardGrid = styled(Grid)`
    margin-bottom: 15px;
  `;
  return (
    <ContentsGrid container direction="row" spacing="2">
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <MemberInfoCard />
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <SearchInput />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={1} md={1} />
      <Grid item lg={8} md={8}>
        <Grid container direction="column" spacing="2">
          <ContentCardGrid item lg={12} md={12}>
            <ContentCards data={cardData} />
          </ContentCardGrid>
          <Grid item lg={12} md={12}>
            <Grid container direction="row" spacing="2">
              <Grid item lg={6} md={6} xs={12} sm={12}>
                <MembershipCard />
              </Grid>
              <Grid item lg={1} md={1} />
              <Grid item lg={5} md={5} xs={12} sm={12}>
                <FeaturedProfiles />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ContentsGrid>
  );
}
