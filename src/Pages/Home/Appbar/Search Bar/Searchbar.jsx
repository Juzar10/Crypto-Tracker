import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function Searchbar() {
  const [crytoAvailable, setCrytoAvailable] = useState([]);
  const url = "https://api.pro.coinbase.com";
  let pairs = [];
  useEffect(() => {
    const apiCall = async () => {
      await fetch(url + "/products")
        .then((res) => res.json())
        .then((data) => (pairs = data));

      let filtered = pairs.filter((pair) => {
        if (pair.quote_currency === "USD") {
          return pair;
        } else return false;
      });

      filtered = filtered.sort((a, b) => {
        if (a.base_currency < b.base_currency) {
          return -1;
        }
        if (a.base_currency > b.base_currency) {
          return 1;
        }
        return 0;
      });

      setCrytoAvailable(filtered);
    };
    apiCall();

    return () => {};
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={crytoAvailable}
      getOptionLabel={(crytoAvailable) => crytoAvailable.base_currency}
      sx={{
        width: 380,
        height: 50,
        "& .MuiInputLabel-root": {
          color: "#4F4F64",
        },
        "&:hover .MuiInputLabel-root": {
          color: "#4F4F64",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#4F4F64",
        },
        "& .MuiOutlinedInput-input": {
          color: "white",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#8C8CBD",
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#4F4F64",
            borderWidth: "2px",
          },
        },
      }}
      renderInput={(params) => <TextField {...params} label="Search.." />}
    />
  );
}
