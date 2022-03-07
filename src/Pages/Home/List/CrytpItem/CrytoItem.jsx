import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import BitcoinLogo from "../../../../assests/bitcoin-btc-logo.svg";
import { useState } from "react";

export default function CryptoItem({ index, handleChange, expanded, price }) {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <Accordion
        expanded={expanded === index}
        onChange={handleChange(index)}
        sx={{
          // "& .Mui-expanded": {
          //   backgroundColor: "red",
          // },
          borderRadius: "0.5rem",
          backgroundColor: expanded === index ? "#1B2239" : "#0E152C",
          "& .MuiAccordian-root": {
            border: "0px",
          },
        }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className=" w-full flex justify-between p-4">
            <div className="flex">
              <div className="w-10 mr-3 items-center flex">
                <img src={BitcoinLogo} alt="bitcoin" />
              </div>
              <div>
                <div className="text-xl text-white">Bitcoin</div>
                <div className="text-sm text-secondarytext">BTC</div>
              </div>
            </div>
            <div>
              <div className="text-xl text-white">{price[index]}</div>
              <div className="text-sm text-green-400">Change Price</div>
            </div>
            {!(expanded === index) && (
              <div className="flex justify-around w-6/12">
                {" "}
                <div>
                  <div className="text-xl text-green-400">{index}</div>
                  <div className="text-sm text-secondarytext">1 h</div>
                </div>
                <div>
                  <div className="text-xl text-white">Volume</div>
                  <div className="text-sm text-secondarytext">volume</div>
                </div>
              </div>
            )}
            {expanded === index && (
              <div className="flex justify-between w-6/12 ">
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton
                    sx={{
                      color: "#8080AA",
                      border: "none",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                    }}
                    value="1h"
                    aria-label="left aligned"
                  >
                    1H
                  </ToggleButton>
                  <ToggleButton
                    sx={{
                      color: "#8080AA",
                      border: "none",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                    }}
                    value="24h"
                    aria-label="centered"
                  >
                    24H
                  </ToggleButton>
                  <ToggleButton
                    sx={{
                      color: "#8080AA",
                      border: "none",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                    }}
                    value="7d"
                    aria-label="right aligned"
                  >
                    7D
                  </ToggleButton>
                  <ToggleButton
                    sx={{
                      color: "#8080AA",
                      border: "none",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                    }}
                    value="30d"
                    aria-label="justified"
                  >
                    30D
                  </ToggleButton>
                  <ToggleButton
                    sx={{
                      color: "#8080AA",
                      border: "none",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                    }}
                    value="6m"
                    aria-label="justified"
                  >
                    6M
                  </ToggleButton>
                  <ToggleButton
                    sx={{
                      color: "#8080AA",
                      border: "none",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                    }}
                    value="1y"
                    aria-label="justified"
                  >
                    1Y
                  </ToggleButton>
                </ToggleButtonGroup>

                <button onClick={handleChange("up")}>
                  <KeyboardArrowUpIcon
                    fontSize="large"
                    sx={{ color: "#8080AA" }}
                  />
                </button>
              </div>
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is Expanded</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
