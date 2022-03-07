import { useEffect, useRef, useState } from "react";
import { useCrytoList, useCrytoListSet } from "../Hooks/CrytoListProvider";
import CryptoItem from "./CrytpItem/CrytoItem";
export default function CryptoListContainer() {
  const [expanded, setExpanded] = useState("panel1");
  const [list, setList] = useState([]); //THis shale come from search bar
  // const [test, setTest] = useState({
  //   "BTC-USD": 0,
  //   "ETH-USD": 0,
  //   "DOGE-USD": 0,
  //   "SHIB-USD": 0,
  // });
  const test = useCrytoList();
  const setTest = useCrytoListSet();
  console.log(typeof setTest);
  let a = test;

  const ws = useRef();

  useEffect(() => {
    ws.current = new WebSocket("wss://ws-feed.exchange.coinbase.com");
    setList(["BTC-USD", "ETH-USD", "DOGE-USD", "SHIB-USD"]);

    return () => {
      let unsubMsg = {
        type: "unsubscribe",
        product_ids: list,
        channels: ["ticker"],
      };
      let unsub = JSON.stringify(unsubMsg);

      ws.current.send(unsub);
    };
  }, []);

  const handleChange = (panel) => (event, newExpanded) => {
    if (panel === "up") {
      setExpanded(false);
    }

    if (newExpanded) {
      setExpanded(panel);
    } else {
      return;
    }
  };
  const start = () => {
    let message = {
      type: "subscribe",
      product_ids: list,
      channels: ["ticker"],
    };
    //data exists then check it and update
    //new data..add to object state(data)
    let jsonMessage = JSON.stringify(message);

    ws.current.send(jsonMessage);

    ws.current.onmessage = (e) => {
      let data = JSON.parse(e.data);

      a[data.product_id] = data.price;

      if (data.type !== "ticker") {
        return;
      }
      let temp = { ...test };
      temp[data.product_id] = data.price;
      setTest(temp);
    };
  };
  const stop = () => {
    let unsubMsg = {
      type: "unsubscribe",
      product_ids: list,
      channels: ["ticker"],
    };
    let unsub = JSON.stringify(unsubMsg);

    ws.current.send(unsub);
  };
  return (
    <>
      <button className="text-white bg-green-800" onClick={start}>
        Start ....
      </button>
      <button className="text-white bg-red-800" onClick={stop}>
        stop ....
      </button>
      <div className="mt-10 flex justify-center">
        <div className="w-5/6">
          {list.map((cur, index) => (
            <CryptoItem
              key={index}
              index={cur}
              expanded={expanded}
              handleChange={handleChange}
              price={test}
            />
          ))}
        </div>
      </div>
    </>
  );
}
