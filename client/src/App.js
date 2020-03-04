import React, { useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import ItemInfo from "./components/ItemInfo";
import { Container, TextField, LinearProgress } from "@material-ui/core";

function App() {
  const [item, setItem] = useState({});
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    setLoading(true);
    e.preventDefault();
    axios
      .get("http://localhost:5000/api/getitem", {
        params: { search: search }
      })
      .then(item => {
        setLoading(false);
        setItem(item.data.item);
        setData(item.data.dataPoints);
      });
  };

  const updateData = () => {
    axios
      .get("http://localhost:5000/api/getitem", {
        params: { search: search }
      })
      .then(item => {
        setItem(item.data.item);
        setData(item.data.dataPoints);
      });
  };

  return (
    <>
      <NavBar />
      <Container>
        <form onSubmit={handleSubmit} style={{ margin: "2rem 0rem 2rem 0rem" }}>
          <TextField
            label="Search"
            placeholder="Search for an item..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </form>
        {loading ? <LinearProgress /> : null}
        {Object.entries(item).length === 0 ? null : (
          <ItemInfo item={item} data={data} updateData={updateData} />
        )}
      </Container>
    </>
  );
}

export default App;
