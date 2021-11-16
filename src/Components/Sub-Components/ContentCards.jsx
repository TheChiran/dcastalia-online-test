import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

export default function ContentCards({ data }) {
  const cardStyle = {
    background: "linear-gradient(245.65deg, #6B207C -5.91%, #C82F68 65.58%)",
    color: "#fff",
    borderRadius: "1.1em",
  };
  const ImageDiv = styled("div")`
    text-align: center;
  `;
  const CustomizedCardContent = styled(CardContent)`
  background-position: center,
  background-repeat: no-repeat,
  background-size: cover,
  `;
  const CardNumberValue = styled("h2")`
    text-align: center;
  `;
  const CardContentValue = styled("p")`
    text-align: center;
  `;

  return (
    <Grid container direction="row" spacing="3">
      {data.map((content) => {
        return (
          <Grid item lg={4} md={4} xs={12}>
            <Card style={cardStyle}>
              <CustomizedCardContent
                style={{
                  background: `url(${content.bgURL})`,
                }}
              >
                <Grid
                  alignItems="center"
                  container
                  direction="column"
                  spacing="2"
                >
                  <Grid item lg={4} md={4}>
                    <ImageDiv>
                      <img src={content.iconUrl} alt="Card Icon" />
                    </ImageDiv>
                    <CardNumberValue>{content.countNumber}</CardNumberValue>
                    <CardContentValue>{content.numberContent}</CardContentValue>
                  </Grid>
                </Grid>
              </CustomizedCardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
