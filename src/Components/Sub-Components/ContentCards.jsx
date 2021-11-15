import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
export default function ContentCards({ data }) {
  const cardStyle = {
    background: "linear-gradient(245.65deg, #6B207C -5.91%, #C82F68 65.58%)",
    color: "#fff",
    borderRadius: "1.1em",
  };
  return (
    <Grid container direction="row" spacing="3">
      {data.map((content) => {
        return (
          <Grid item lg={4} md={4}>
            <Card style={cardStyle}>
              <CardContent
                style={{
                  background: `url(${content.bgURL})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Grid
                  alignItems="center"
                  container
                  direction="column"
                  spacing="2"
                >
                  <Grid item lg={4} md={4}>
                    <div style={{ textAlign: "center" }}>
                      <img src={content.iconUrl} alt="Card Icon" />
                    </div>
                    <h3 style={{ textAlign: "center" }}>
                      {content.countNumber}
                    </h3>
                    <p style={{ textAlign: "center" }}>
                      {content.numberContent}
                    </p>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
