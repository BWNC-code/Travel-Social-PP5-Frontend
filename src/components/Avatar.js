import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 45, text }) => {
  return src ? (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  ) : null;
};

Avatar.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  text: PropTypes.string,
};

export default Avatar;
