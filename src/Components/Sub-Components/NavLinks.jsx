import React from "react";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { COLORS } from "../../helpers/constants";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function NavLinks({ center = false }) {
  const justifyContentValue = center === true ? "center" : "flex-end";
  const navbarStyles = {
    width: "90%",
  };
  const buttonColor = {
    color: COLORS.color1,
  };
  return (
    <Grid
      style={navbarStyles}
      container
      spacing="1"
      justifyContent={justifyContentValue}
    >
      <Box>
        <Button style={buttonColor}>HOME</Button>
      </Box>
      <Box>
        <Button style={buttonColor}>PREMIUM PLANS</Button>
      </Box>
      <Box>
        <Button style={buttonColor}>SEARCH</Button>
      </Box>
      <Box>
        <Button style={buttonColor}>ABOUT US</Button>
      </Box>
      <Box>
        <Button style={buttonColor}>
          HELP CENTER <KeyboardArrowDownIcon />
        </Button>
      </Box>
      <Box>
        <Button style={buttonColor}>CONTACT US</Button>
      </Box>
    </Grid>
  );
}
