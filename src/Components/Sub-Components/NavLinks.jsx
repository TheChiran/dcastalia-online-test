import React from "react";
import { Button, Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import { COLORS } from "../../helpers/constants";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function NavLinks({ center = false }) {
  const justifyContentValue = center === true ? "center" : "flex-end";
  const NavbarGrid = styled(Grid)`
    width: 90%;
    margin: 0 auto;

    .MuiBox-root:nth-of-type(1) .MuiButton-root {
      color: ${COLORS.color3};
    }
  `;
  const CustomButton = styled(Button)`
    color: ${COLORS.color1};
  `;
  return (
    <NavbarGrid container spacing="1" justifyContent={justifyContentValue}>
      <Box>
        <CustomButton>HOME</CustomButton>
      </Box>
      <Box>
        <CustomButton>PREMIUM PLANS</CustomButton>
      </Box>
      <Box>
        <CustomButton>SEARCH</CustomButton>
      </Box>
      <Box>
        <CustomButton>ABOUT US</CustomButton>
      </Box>
      <Box>
        <CustomButton>
          HELP CENTER <KeyboardArrowDownIcon />
        </CustomButton>
      </Box>
      <Box>
        <CustomButton>CONTACT US</CustomButton>
      </Box>
    </NavbarGrid>
  );
}
