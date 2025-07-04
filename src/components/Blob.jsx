"use client";

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, MorphSVGPlugin);

//https://www.blobmaker.app/
function Blob() {
  const blobRef1 = useRef(null);
  const blobRef2 = useRef(null);
  const blobRef3 = useRef(null);

  const [size, setSize] = useState(300);

  useGSAP(() => {
    if (blobRef1.current && blobRef2.current && blobRef3.current) {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: { duration: 2, ease: "power1.inOut" },
      });

      tl.to(blobRef1.current, { morphSVG: blobRef2.current })
        .to(blobRef1.current, { morphSVG: blobRef3.current })
        .to(blobRef1.current, { morphSVG: blobRef1.current }); // back to original
    }
  }, []);

  return (
    <div>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        <path
          ref={blobRef1}
          fill="#FF0066"
          d="M60.4,-60.4C74.1,-46.8,78.1,-23.4,74.4,-3.6C70.8,16.2,59.7,32.3,46,41.1C32.3,49.9,16.2,51.2,0.1,51.1C-15.9,50.9,-31.8,49.3,-44.5,40.5C-57.3,31.8,-66.9,15.9,-69.9,-2.9C-72.8,-21.7,-69,-43.5,-56.2,-57.1C-43.5,-70.8,-21.7,-76.4,0.8,-77.2C23.4,-78,46.8,-74.1,60.4,-60.4Z"
          transform="translate(100 100)"
        />
        <path
          ref={blobRef2}
          fill="#FF0066"
          d="M57.5,-56.5C73.7,-41.4,85.4,-20.7,86.2,0.8C86.9,22.2,76.8,44.5,60.6,60.3C44.5,76.1,22.2,85.6,1.8,83.7C-18.6,81.9,-37.2,68.8,-46,53C-54.9,37.2,-54.1,18.6,-51.7,2.4C-49.3,-13.8,-45.4,-27.7,-36.5,-42.8C-27.7,-58,-13.8,-74.5,3.4,-78C20.7,-81.4,41.4,-71.7,57.5,-56.5Z"
          transform="translate(100 100)"
          style={{ visibility: "hidden" }} // Optional: hide the second path
        />
        <path
          ref={blobRef3}
          fill="#FF0066"
          d="M52.2,-46C67.2,-37.1,78.9,-18.5,78.4,-0.5C78,17.6,65.3,35.1,50.2,44.9C35.1,54.7,17.6,56.7,-0.1,56.8C-17.7,56.9,-35.5,55.1,-50.9,45.3C-66.3,35.5,-79.4,17.7,-78.7,0.6C-78.1,-16.5,-63.8,-32.9,-48.3,-41.9C-32.9,-50.8,-16.5,-52.2,1,-53.2C18.5,-54.2,37.1,-54.9,52.2,-46Z"
          transform="translate(100 100)"
          style={{ visibility: "hidden" }}
        />
      </svg>
    </div>
  );
}

export default Blob;
