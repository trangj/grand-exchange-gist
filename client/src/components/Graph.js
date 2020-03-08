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
import { Typography, Button, ButtonGroup } from "@material-ui/core";

const Graph = ({ data, updateData }) => {
  const [hint, setHint] = useState({});
  const [domain, setDomain] = useState(0);

  const mySIPrefixFormatter = (value, index, scale, tickTotal) => {
    return `${scale.tickFormat(tickTotal, ".2s")(value)}`; // -> e.g. 1.2kWh
  };

  return (
    <>
      <Typography variant="h5">Price History</Typography>
      <ButtonGroup>
        <Button onClick={() => setDomain(0)}>180 Days</Button>
        <Button onClick={() => setDomain(60)}>120 Days</Button>
        <Button onClick={() => setDomain(90)}>90 Days</Button>
        <Button onClick={() => setDomain(150)}>30 Days</Button>
      </ButtonGroup>
      <XYPlot
        animation
        height={600}
        width={1200}
        margin={{ left: 50, right: 50 }}
        xDomain={[domain, 179]}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis tickFormat={mySIPrefixFormatter} />
        <LineSeries
          data={data}
          onNearestXY={(datapoint, event) => setHint(datapoint)}
        />
        <Hint value={hint} />
      </XYPlot>
    </>
  );
};

export default Graph;
