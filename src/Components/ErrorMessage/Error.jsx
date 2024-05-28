import React, { useState } from "react";
import styles from "./Error.module.css";

const Error = (props) => {
  return <p className={styles.errorMessage}>{props.text}</p>;
};

export default Error;
