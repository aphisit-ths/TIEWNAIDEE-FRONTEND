import React, { useState } from "react";
import MainPage from "./components/mainpage";
import ScrollButton from "./components/scrolltotop";

import "./app.scss";
import { motion } from "framer-motion/dist/framer-motion";
function App() {
  const [searchData, setSearchData] = useState("");
  function handleChange(event) {
    event.preventDefault();
    setSearchData(event.target.value);
  }
  return (
    <div className="App">
      <motion.h3 animate={{ opacity: [0, 1] }}>เที่ยวไหนดี</motion.h3>

      <div className="input-area">
        <motion.input
          animate={{ opacity: [0, 1] }}
          type="text"
          placeholder={"หาที่เที่ยวแล้วไปกัน.."}
          name="input"
          onChange={handleChange}
          value={searchData}
        />
        {searchData ? (
          <div onClick={() => setSearchData("")} className="clear-input">
            <p>X</p>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
      <MainPage searchData={searchData} setSearchData={setSearchData} />
      <ScrollButton></ScrollButton>
    </div>
  );
}

export default App;
