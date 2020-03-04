const express = require("express");
const cors = require("cors");
const itemList = require("./itemList");
const app = express();
const { grandExchange } = require("osrs-api");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/getitem", (req, res) => {
  if (req.query.search in itemList) {
    const id = itemList[req.query.search];
    grandExchange
      .getItem(id)
      .then(item => {
        grandExchange
          .getGraph(id)
          .then(graph => {
            const dataPoints = [];
            let i = 0;
            for (key in graph.average) {
              const newPoint = {
                x: i,
                y: graph.average[key]
              };
              i += 1;
              dataPoints.push(newPoint);
            }
            item.dataPoints = dataPoints;
            res.json(item);
          })
          .catch(console.log);
      })
      .catch(console.error);
  }
});

app.listen(5000, () => console.log("server started on port 5000..."));
