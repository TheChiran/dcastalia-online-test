import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { COLORS } from "../../helpers/constants";

export default function FooterCopyRightContent() {
  const ContainerDiv = styled(Grid)`
    text-align: center;
    color: ${COLORS.color6};
  `;
  return (
    <ContainerDiv
      container
      direction="column"
      spacing="1"
      justifyContent="center"
      align-items="center"
    >
      <span>&copy; Jugol Jatra.com {new Date().getFullYear()}</span>
      <span>Designed & Developed by Dcastalia</span>
    </ContainerDiv>
  );
}
