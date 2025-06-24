"use client";

import styles from "./PaperMario.module.scss";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(useGSAP, DrawSVGPlugin);

function PaperMario() {
  const [size, setSize] = useState(300);

  const marioRedRef = useRef(null);
  const marioGreenRef = useRef(null);
  const marioSkinRef = useRef(null);

  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        width: size,
        height: size,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  }, [size]);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 4, ease: "power1.inOut" },
    });

    // Drawing paths animation
    tl.fromTo(marioRedRef.current, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
      .fromTo(
        marioGreenRef.current,
        { drawSVG: "0% 0%" },
        { drawSVG: "0% 100%" },
        "-=4"
      )
      .fromTo(
        marioSkinRef.current,
        { drawSVG: "0% 0%" },
        { drawSVG: "0% 100%" },
        "-=2"
      );

    // Create tl2: fill animations
    const tl2 = gsap.timeline({
      defaults: { duration: 1, ease: "power1.inOut" },
      onComplete: () => {
        setSize(600);
      },
    });

    tl2
      .to(marioRedRef.current, { fill: "#f8461c" }, 0)
      .to(marioGreenRef.current, { fill: "#9e8317" }, 0)
      .to(marioSkinRef.current, { fill: "#ffbf7b" }, 0);

    // Add tl2 to play *after* tl ends
    tl.add(tl2, "-=2.5"); // No offset = starts right after `tl` ends
  }, []);

  return (
    <div>
      <svg
        ref={svgRef}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 300 300"
        xmlSpace="preserve"
        width={size}
        height={size}
      >
        <g>
          <path
            ref={marioGreenRef}
            className={styles.st0}
            d="M101.01,21h81.65v16.33h48.99v16.33c-10.88,0-21.77,0-32.66,0v16.33h32.66v16.33h16.33v16.33
                        c-5.44,0-10.89,0-16.33,0v16.33c-5.44,0-10.89,0-16.33,0v16.33c-10.88,0-21.77,0-32.66,0v16.33h48.99v16.33h16.33v65.32
                        c-10.88,0-21.77,0-32.66,0v16.33h16.33v16.33h16.33V279c-21.77,0-43.55,0-65.32,0c0-9.8,0-19.6,0-29.39c-5.44,0-10.89,0-16.33,0
                        c0-5.44,0-10.89,0-16.33c-10.88,0-21.77,0-32.66,0v16.33c-5.44,0-10.89,0-16.33,0V279c-21.77,0-43.55,0-65.32,0
                        c0-4.35,0-8.71,0-13.06h16.33c0-5.44,0-10.89,0-16.33h16.33c0-5.44,0-10.89,0-16.33c-10.88,0-21.77,0-32.66,0
                        c0-21.77,0-43.55,0-65.32h16.33c0-5.44,0-10.89,0-16.33h16.33c0-5.44,0-10.89,0-16.33h16.33c0-5.44,0-10.89,0-16.33
                        c-10.88,0-21.77,0-32.66,0c0-16.33,0-32.66,0-48.99h16.33c0-10.88,0-21.77,0-32.66h16.33C101.01,31.89,101.01,26.44,101.01,21z"
          />
          <path
            ref={marioRedRef}
            className={styles.st1}
            d="M101.01,21h81.65v16.33h48.99v16.33c-48.98,0-97.98,0-146.96,0c0-5.44,0-10.89,0-16.33h16.33
                        C101.01,31.89,101.01,26.44,101.01,21z M117.34,135.3h16.33v32.66h32.66c0-5.44,0-10.89,0-16.33h16.33v32.66h16.33
                        c-0.07,10.09,0,32.66,0,32.66h16.33v32.66h-48.99v-16.33c0,0-21.77,0-32.66,0v16.33c-16.33,0-32.66,0-48.99,0
                        c0-10.88,0-21.77,0-32.66h16.33c0-10.88,0-21.77,0-32.66h16.33C117.34,167.96,117.34,151.63,117.34,135.3z"
          />
          <path
            ref={marioSkinRef}
            className={styles.st2}
            d="M133.67,53.66h32.66v32.66h16.33v16.33c-5.44,0-10.89,0-16.33,0v16.33h48.99v16.33c-38.1,0-76.21,0-114.3,0
                        c0-10.88,0-21.77,0-32.66h32.66c0-5.44,0-10.89,0-16.33c-5.44,0-10.89,0-16.33,0c0-5.44,0-10.89,0-16.33h16.33
                        C133.67,64.54,133.67,59.1,133.67,53.66z M182.66,53.66h16.33v16.33h32.66v16.33h16.33v16.33c-16.33,0-32.66,0-48.99,0
                        c0-5.44,0-10.89,0-16.33c-5.44,0-10.89,0-16.33,0C182.66,75.43,182.66,64.54,182.66,53.66z M84.68,69.99h16.33v32.66
                        c-5.44,0-10.89,0-16.33,0C84.68,91.76,84.68,80.87,84.68,69.99z M52.03,184.29h32.66v16.33h16.33v16.33c-5.44,0-10.89,0-16.33,0
                        v16.33c-10.88,0-21.77,0-32.66,0C52.03,216.95,52.03,200.62,52.03,184.29z M117.34,184.29h16.33v16.33c-5.44,0-10.89,0-16.33,0
                        C117.34,195.18,117.34,189.73,117.34,184.29z M166.33,184.29h16.33v16.33c-5.44,0-10.89,0-16.33,0
                        C166.33,195.18,166.33,189.73,166.33,184.29z M215.32,184.29h32.66v48.99c-10.88,0-21.77,0-32.66,0c0-5.44,0-10.89,0-16.33
                        c-5.44,0-10.89,0-16.33,0c0-5.44,0-10.89,0-16.33h16.33C215.32,195.18,215.32,189.73,215.32,184.29z"
          />
        </g>
      </svg>
    </div>
  );
}

export default PaperMario;
