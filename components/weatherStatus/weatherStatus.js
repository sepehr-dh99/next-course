import { Image } from "next";

import styles from "./weatherStatus.module.css";

const WeatherStatus = ({ image, title, value, imageHeight, imageWidth }) => {
  return (
    <section className={styles.statusSection}>
      <div className={styles.titleSection}>
        {/* <Image src={image} height={imageHeight} width={imageWidth} /> */}
        <h3 className={styles.statusHeading}>{title}</h3>
      </div>
      <span className={styles.statusValue}>{value}</span>
    </section>
  );
};

export default WeatherStatus;
