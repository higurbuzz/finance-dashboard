import { useState } from "react";
import Box from "../Box/Box";
import BoxTitle from "../BoxTitle/BoxTitle";
import "./AddCard.css";
import { useTranslation } from "react-i18next";

const AddCard = () => {
  const { t } = useTranslation();
  const [cardType, setCardType] = useState("classic");
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [validThru, setValidThru] = useState("");
  const [isPending, setIsPending] = useState(false);

  const formatCardNumber = (number) => {
    const match = number.match(/.{1,4}/g); // Match groups of 1 to 4 digits
    return match ? match.join(" ") : number;
  };

  const handleCardNumberChange = (e) => {
    let rawValue = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (/^\d{0,16}$/.test(rawValue)) {
      setCardNumber(formatCardNumber(rawValue));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    let additionalFields = {};
    switch (cardType) {
      case "travel":
        additionalFields = {
          background:
            "linear-gradient(120deg, rgba(76,73,237,1) 0%, rgba(10,6,244,1) 100%)",
          textColor: "#FFFFFF",
          labelColor: "rgba(255, 255, 255, 0.7)",
          isColored: true,
        };
        break;
      case "premium":
        additionalFields = {
          background:
            "linear-gradient(120deg, rgba(255,223,0,1) 0%, rgba(255,140,0,1) 100%)",
          textColor: "#000000",
          labelColor: "rgba(0, 0, 0, 0.7)",
          isColored: true,
        };
        break;
      case "business":
        additionalFields = {
          background:
            "linear-gradient(120deg, rgba(0,0,0,1) 0%, rgba(128,128,128,1) 100%)",
          textColor: "#FFFFFF",
          labelColor: "rgba(255, 255, 255, 0.7)",
          isColored: true,
        };
        break;
      case "student":
        additionalFields = {
          background:
            "linear-gradient(120deg, rgba(0,180,81,1) 0%, rgba(0,131,70,1) 100%)",
          textColor: "#FFFFFF",
          labelColor: "rgba(255, 255, 255, 0.7)",
          isColored: true,
        };
        break;
      default:
        break;
    }

    const creditCard = {
      balance: 1000,
      cardHolder,
      validThru,
      cardNumber,
      ...additionalFields,
    };

    setTimeout(() => {
      fetch("http://localhost:8000/credit-cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creditCard),
      }).then(() => {
        setIsPending(false);
        setCardType("classic");
        setCardHolder("");
        setCardNumber("");
        setValidThru("");
        window.location.reload();
      });
    }, 1000);
  };

  return (
    <div>
      <BoxTitle title={t("add_new_card")} />
      <Box>
        <p>{t("card_desc")}</p>
        <div className="card-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label>{t("card_type")}</label>
              <select
                required
                value={cardType}
                onChange={(e) => setCardType(e.target.value)}
              >
                <option value="classic">{t("classic")}</option>
                <option value="travel">{t("travel")}</option>
                <option value="premium">{t("premium")}</option>
                <option value="business">{t("business")}</option>
                <option value="student">{t("student")}</option>
              </select>
            </div>

            <div>
              <label>{t("name_on_card")}</label>
              <input
                type="text"
                required
                value={cardHolder}
                placeholder="Eddy Cusuma"
                onChange={(e) => setCardHolder(e.target.value)}
              />
            </div>

            <div>
              <label>{t("card_number")}</label>
              <input
                type="tel"
                inputMode="numeric"
                maxLength="19"
                minLength="16"
                required
                value={cardNumber}
                placeholder="xxxx xxxx xxxx xxxx"
                onChange={handleCardNumberChange}
              />
            </div>

            <div>
              <label>{t("expiration_date")}</label>
              <input
                type="month"
                required
                value={validThru}
                onChange={(e) => setValidThru(e.target.value)}
              />
            </div>

            <div>
              {!isPending && <button>{t("add_card")}</button>}
              {isPending && <button disabled>{t("adding_wait")}</button>}
            </div>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default AddCard;
