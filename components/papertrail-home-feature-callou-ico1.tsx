import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./papertrail-home-feature-callou-ico1.module.css";

type PapertrailHomeFeatureCallouIco1Type = {
  /** Style props */
  papertrailHomeFeatureCallLeft?: Property.Left;
};

const PapertrailHomeFeatureCallouIco1: NextPage<
  PapertrailHomeFeatureCallouIco1Type
> = ({ papertrailHomeFeatureCallLeft }) => {
  const papertrailHomeFeatureCallouIconStyle: CSS.Properties = useMemo(() => {
    return {
      left: papertrailHomeFeatureCallLeft,
    };
  }, [papertrailHomeFeatureCallLeft]);

  return (
    <img
      className={styles.papertrailHomeFeatureCallouIcon}
      alt=""
      src="/papertrailhomefeaturecalloutthumbs-aggregate-1@2x.png"
      style={papertrailHomeFeatureCallouIconStyle}
    />
  );
};

export default PapertrailHomeFeatureCallouIco1;
