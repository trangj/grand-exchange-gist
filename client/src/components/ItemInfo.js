import React, { useState } from "react";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Hint
} from "react-vis";
import "../../node_modules/react-vis/dist/style.css";
import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";

const ItemInfo = ({ item, data, updateData }) => {
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

  const [hint, setHint] = useState({});

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <img src={icon_large} />
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
              <Typography variant="h5">Price History Over 6 Months</Typography>
              <XYPlot height={600} width={1200}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries
                  data={data}
                  onNearestXY={(datapoint, event) => setHint(datapoint)}
                />
                <Hint value={hint} />
              </XYPlot>
              <Button onClick={updateData}>Refresh</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemInfo;
