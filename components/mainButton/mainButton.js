import styles from "./mainBotton.module.css";

const MainButton = ({ label, click }) => {
  return (
    <button className={styles.mainButton} onClick={click}>
      {label}
    </button>
  );
};

export default MainButton;
