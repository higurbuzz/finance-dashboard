import { useState } from "react";
import Box from "../Box/Box";
import BoxTitle from "../BoxTitle/BoxTitle";
import "./AddCard.css";

const AddCard = () => {
  const [cardType, setCardType] = useState();
  const [cardHolder, setCardHolder] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [cardExpire, setCardExpire] = useState();

  return (
    <div>
      <BoxTitle title="Add New Card" />
      <Box>
        <p style={{ color: "#718EBF" }}>
          Credit Card generally means a plastic card issued by Scheduled
          Commercial Banks assigned to a Cardholder, with a credit limit, that
          can be used to purchase goods and services on credit or obtain cash
          advances.
        </p>
        <div className="card-form">
          <form>
            <div>
              <label>Card Type</label>
              <input
                type="text"
                required
                value={cardType}
                placeholder="Classic"
              />
            </div>

            <div>
              <label>Name On Card</label>
              <input
                type="text"
                required
                value={cardHolder}
                placeholder="My Cards"
              />
            </div>

            <div>
              <label>Card Number</label>
              <input
                type="tel"
                inputmode="numeric"
                maxlength="19"
                required
                value={cardType}
                placeholder="xxxx xxxx xxxx xxxx"
              />
            </div>

            <div>
              <label>Expiration Date</label>
              <input type="date" placeholder="25 January 2025" />
            </div>

            <div>
              <button className="add-card-button">Add Card</button>
            </div>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default AddCard;
