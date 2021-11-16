import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/system";
import { COLORS } from "../../helpers/constants";
export default function MembershipCardList({ data }) {
  const ColoredIcon = styled(CheckCircleIcon)`
    color: ${COLORS.color3};
  `;
  return (
    <List>
      {data.map((content) => {
        return (
          <ListItem key={content.id}>
            <ListItemAvatar>
              <ColoredIcon />
            </ListItemAvatar>
            <ListItemText primary={content.value} />
          </ListItem>
        );
      })}
    </List>
  );
}
