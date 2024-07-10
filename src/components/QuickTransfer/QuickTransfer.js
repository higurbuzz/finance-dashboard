import "./QuickTransfer.css";
import React, { useState } from "react";
import Box from "../Box/Box";
import BoxTitle from "../BoxTitle/BoxTitle";

const QuickTransfer = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSendClick = () => {
    console.log("Send amount:", amount);
  };

  return (
    <div className="quick-transfer">
      <BoxTitle title="Quick Transfer" />
      <Box>
        <div className="recipients">
          <div className="recipient">
            <img src="../../assets/pp-livia.png" />
            <div>
              <div className="recipient-name">Livia Bator</div>
              <div className="recipient-title">CEO</div>
            </div>
          </div>

          <div className="recipient">
            <img src="../../assets/pp-randy.png" />
            <div>
              <div className="recipient-name">Randy Press</div>
              <div className="recipient-title">Director</div>
            </div>
          </div>

          <div className="recipient">
            <img src="../../assets/pp-workman.png" />
            <div>
              <div className="recipient-name">Workman</div>
              <div className="recipient-title">Designer</div>
            </div>
          </div>

          <button className="next-button">
            <img src="../../assets/next-icon.svg" alt="Next" />
          </button>
        </div>
        <div className="transfer">
          <div className="transfer-text">Write Amount</div>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="525.50"
          />
          <button onClick={handleSendClick} className="send-button">
            Send
            <img src="../../assets/send-icon.svg" alt="Send" />
          </button>
        </div>
      </Box>
    </div>
  );
};

export default QuickTransfer;
