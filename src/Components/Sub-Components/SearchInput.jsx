import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { COLORS } from "../../helpers/constants";
export default function SearchInput() {
  const RounderSearchInput = styled(TextField)`
    background: #fff;
    border-radius: 50px;
    margin-bottom: 5px;
    fieldset {
      border-radius: 50px;
      border: none;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.08);
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
