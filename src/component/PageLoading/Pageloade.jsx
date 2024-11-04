//import { useEffect, useState } from "react";
import styles from "./Pageloader.module.css";
//import PropTypes from "prop-types";
import LoadingImage from "../../assets/loader.svg";

const PageLoader = () => {
  return (
    <div className={styles.pagecontainer}>
      <div className={styles.overlay}>
        <img
          src={LoadingImage}
          alt="Loading"
          className={styles.loadingimage}
        />
      </div>
    </div>
  );
};

export default PageLoader;
