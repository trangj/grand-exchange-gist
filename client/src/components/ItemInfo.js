import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Graph from "./Graph";

const ItemInfo = ({ item, data }) => {
  const {
    name,
    icon_large,
    description,
    members,
    current,
    day30,
    day90,
    day180
  } = item;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <img src={icon_large} alt={name} />
              <Typography variant="h5">{name}</Typography>
              <Typography variant="body2">{description}</Typography>
              <Typography variant="body2">{members}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5">Current Price</Typography>
              {current ? (
                <>
                  <Typography variant="body2">{current.price}</Typography>
                  <Typography variant="body2">{current.trend}</Typography>
                </>
              ) : null}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5">30 Days</Typography>
              {day30 ? (
                <>
                  <Typography variant="body2">{day30.change}</Typography>
                  <Typography variant="body2">{day30.trend}</Typography>
                </>
              ) : null}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5">90 Days</Typography>
              {day90 ? (
                <>
                  <Typography variant="body2">{day90.change}</Typography>
                  <Typography variant="body2">{day90.trend}</Typography>
                </>
              ) : null}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5">120 Days</Typography>
              {day180 ? (
                <>
                  <Typography variant="body2">{day180.change}</Typography>
                  <Typography variant="body2">{day180.trend}</Typography>
                </>
              ) : null}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Graph data={data} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemInfo;
