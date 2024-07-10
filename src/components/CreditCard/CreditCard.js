import "./CreditCard.css";

const CreditCard = ({ item }) => {
  return (
    <div
      className="credit-card"
      style={item.isColored && { color: "white", background: item.background }}
    >
      <div className="card-balance">
        <span style={{ color: item.labelColor }}>Balance</span>
        <h3>${item.balance}</h3>
      </div>
      <div className="card-details-row">
        <div className="card-details">
          <span style={{ color: item.labelColor }}>CARD HOLDER</span>
          <h4>{item.cardHolder}</h4>
        </div>
        <div className="card-details">
          <span style={{ color: item.labelColor }}>VALID THRU</span>
          <h4>{item.validThru}</h4>
        </div>
        <div></div>
      </div>
      {item.isColored ? (
        <div className="card-bottom-colored" />
      ) : (
        <div className="card-bottom" />
      )}
      <div className="card-number">{item.cardNumber}</div>
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
