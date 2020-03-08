import React, { useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import ItemInfo from "./components/ItemInfo";
import "./App.css";
import { Container, TextField, LinearProgress } from "@material-ui/core";
import AutoComplete from "@material-ui/lab/Autocomplete";
import itemSuggestions from "./itemSuggestions";

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

  return (
    <>
      <NavBar />
      <Container>
        <form onSubmit={handleSubmit} style={{ margin: "2rem 0rem 2rem 0rem" }}>
          <AutoComplete
            freeSolo
            options={itemSuggestions}
            onChange={(event, value) => setSearch(value)}
            renderInput={params => (
              <TextField
                {...params}
                label="Search"
                placeholder="Search for an item..."
                variant="outlined"
                fullWidth
              />
            )}
          />
        </form>
        {loading ? <LinearProgress /> : null}
        {Object.entries(item).length === 0 ? null : (
          <ItemInfo item={item} data={data} />
        )}
      </Container>
    </>
  );
}

export default App;
