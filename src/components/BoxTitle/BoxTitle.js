import { Link } from "react-router-dom";
import "./BoxTitle.css";

const BoxTitle = ({ title, linkText, link }) => {
  return (
    <div className="box-title">
      <h2>{title}</h2>
      {linkText && <Link to={link}>{linkText}</Link>}
    </div>
  );
};

export default BoxTitle;
