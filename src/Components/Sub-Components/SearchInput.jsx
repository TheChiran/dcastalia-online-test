import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { COLORS } from "../../helpers/constants";
export default function SearchInput() {
  const RounderSearchInput = styled(TextField)`
    fieldset {
      border-radius: 50px;
    }
  `;
  const ColoredIcon = styled(SearchIcon)`
    color: ${COLORS.color3};
  `;
  return (
    <RounderSearchInput
      variant="outlined"
      fullWidth
      placeholder="Search Profile With ID"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <ColoredIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
