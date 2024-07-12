import "./CreditCard.css";
import { useTranslation } from "react-i18next";

const CreditCard = ({ item }) => {
  const { t } = useTranslation();

  const maskCardNumber = (number) => {
    return number.slice(0, 4) + " **** **** " + number.slice(-4);
  };

  const formatValidThru = (date) => {
    const [year, month] = date.split("-");
    return `${month}/${year.slice(-2)}`;
  };

  return (
    <div
      className="credit-card"
      style={{ color: item.textColor, background: item.background }}
    >
      <div className="card-balance">
        <span style={{ color: item.labelColor }}>{t("balance")}</span>
        <h3>${item.balance}</h3>
      </div>
      <div className="card-details-row">
        <div className="card-details">
          <span style={{ color: item.labelColor }}>{t("card_holder")}</span>
          <h4>{item.cardHolder}</h4>
        </div>
        <div className="card-details">
          <span style={{ color: item.labelColor }}>{t("valid_thru")}</span>
          <h4>{formatValidThru(item.validThru)}</h4>
        </div>
        <div></div>
      </div>
      {item.isColored ? (
        <div className="card-bottom-colored" />
      ) : (
        <div className="card-bottom" />
      )}
      <div className="card-number">{maskCardNumber(item.cardNumber)}</div>
      <div className="card-chip">
        {item.isColored ? (
          <img src="../../assets/card-chip.svg" alt="Chip" />
        ) : (
          <img src="../../assets/card-chip-dark.svg" alt="Chip Dark" />
        )}
      </div>
      <div className="card-logo">
        {item.isColored ? (
          <img src="../../assets/mastercard.svg" alt="Mastercard" />
        ) : (
          <img src="../../assets/mastercard-dark.svg" alt="Mastercard Dark" />
        )}
      </div>
    </div>
  );
};

export default CreditCard;
