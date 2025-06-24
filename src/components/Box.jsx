"use client";

import styles from "./Box.module.scss";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const basename = "box";

function Box() {
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.to(boxRef.current, {
      rotation: 180,
      x: 100,
      yoyo: true,
      duration: 2,
      repeat: -1,
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles[`${basename}`]} ref={boxRef}></div>;
    </div>
  );
}

export default Box;
