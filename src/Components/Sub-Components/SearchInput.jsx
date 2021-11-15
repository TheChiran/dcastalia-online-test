import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchInput() {
  return (
    <TextField
      variant="outlined"
      fullWidth
      placeholder="Search Profile With ID"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
