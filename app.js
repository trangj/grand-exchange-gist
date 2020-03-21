const express = require("express");
const cors = require("cors");
const itemList = require("./itemList");
const app = express();
const { grandExchange } = require("osrs-api");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/getitem", async (req, res) => {
  if (req.query.search in itemList) {
    try {
      const id = itemList[req.query.search];
      const item = await grandExchange.getItem(id);
      const graph = await grandExchange.getGraph(id);
      if (!item || !graph) throw Error("Could not get item or graph");

      const dataPoints = [];
      let i = 0;

      for (key in graph.daily) {
        const newPoint = {
          x: i,
          y: graph.daily[key]
        };
        i += 1;
        dataPoints.push(newPoint);
      }

      item.dataPoints = dataPoints;
      res.status(200).json(item);
    } catch (err) {
      res.status(400);
    }
  }
});

app.listen(5000, () => console.log("server started on port 5000..."));
