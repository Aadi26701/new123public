import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./x-j-x-wbf-so2f0-icon.module.css";

type XJXWbfSo2f0IconType = {
  /** Style props */
  xJXWbfSo2f0AlignContent?: Property.AlignContent;
};

const XJXWbfSo2f0Icon: NextPage<XJXWbfSo2f0IconType> = ({
  xJXWbfSo2f0AlignContent,
}) => {
  const xJXWbfSo2f0IconStyle: CSS.Properties = useMemo(() => {
    return {
      alignContent: xJXWbfSo2f0AlignContent,
    };
  }, [xJXWbfSo2f0AlignContent]);

  return (
    <img
      className={styles.xjxwbfso2f0Icon}
      alt=""
      src="/xjxwbfso2f0@2x.png"
      style={xJXWbfSo2f0IconStyle}
    />
  );
};

export default XJXWbfSo2f0Icon;
