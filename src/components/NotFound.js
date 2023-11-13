import React from "react";
import { Link } from "react-router-dom";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div className={`${styles.margin_top} text-center`}>
      <Asset
        src={NoResults}
        message="Sorry, the page you're looking for doesn't exist."
      />
      <Link  to={"/"}>Click here to return to the Homepage.</Link>
    </div>
  );
};

export default NotFound;
