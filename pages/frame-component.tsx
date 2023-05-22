import type { NextPage } from "next";
import FixedFiles2 from "../components/fixed-files2";
import styles from "./frame-component.module.css";
const FrameComponent: NextPage = () => {
  return (
    <div className={styles.fixedFiles2Parent}>
      <FixedFiles2 />
    </div>
  );
};

export default FrameComponent;
