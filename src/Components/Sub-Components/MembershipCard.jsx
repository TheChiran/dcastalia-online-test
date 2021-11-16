import React from "react";
import { Button, Card, CardContent, Divider } from "@mui/material";
import { styled, css } from "@mui/system";
import MembershipBg from "./../../assets/membershipcardbg.png";
import { COLORS } from "../../helpers/constants";
import MemberBadgeIcon from "./../../assets/memberBadgeIcon.svg";
import MembershipCardList from "./MembershipCardLists";
const styleToCenterWithFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderSection = styled("div")`
  background-image: url(${MembershipBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
`;
const Header = styled("h3")`
  color: ${COLORS.color1};
  font-weight: 450;
  margin: 0 auto;
  text-align: center;
`;
const HexagonShapedDiv = styled("div")`
  margin: 25px 0;
  width: 100%;
  ${styleToCenterWithFlex}
`;
const HexagonShape = styled("div")`
  position: relative;
  width: 120px;
  height: 69.28px;
  background-color: #e9e9e9;
  margin: 34.64px 0;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: 34.64px solid #e9e9e9;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: 34.64px solid #e9e9e9;
  }
`;
const ImageDiv = styled("div")`
  ${styleToCenterWithFlex}
  img {
    width: 50px;
    height: 50px;
  }
`;
const Content = styled("h4")`
  font-weight: 450;
  color: ${COLORS.color3};
  ${styleToCenterWithFlex}
`;
const Date = styled("p")`
  color: ${COLORS.color4};
  ${styleToCenterWithFlex}
`;
const CustomizedDivider = styled(Divider)`
  margin: 25px 0px;
`;
const ViewPlansDiv = styled("div")`
  ${styleToCenterWithFlex}
`;
const ViewPlansButton = styled(Button)`
  background: ${COLORS.color3};
  text-transform: capitalize;
  padding: 8px 25px;
  border-radius: 20px;
`;
const ListData = [
  { id: 1, value: "2000 Express Interests" },
  { id: 2, value: "2000 Contact Info view" },
  { id: 3, value: "2000 Add to Favorites" },
  { id: 4, value: "2000 Gallery Photo Upload" },
];
export default function MembershipCard() {
  return (
    <Card>
      <CardContent>
        <HeaderSection>
          <Header>Current Membership</Header>
          <HexagonShapedDiv>
            <HexagonShape>
              <ImageDiv>
                <img src={MemberBadgeIcon} alt="Member Badge Icon" />
              </ImageDiv>
            </HexagonShape>
          </HexagonShapedDiv>
          <Content>Premium Member</Content>
          <Date>Valid Till: 30-Aug-2021</Date>
        </HeaderSection>
        <MembershipCardList data={ListData} />
        <CustomizedDivider />
        <ViewPlansDiv>
          <ViewPlansButton variant="contained">View Plans</ViewPlansButton>
        </ViewPlansDiv>
      </CardContent>
    </Card>
  );
}
