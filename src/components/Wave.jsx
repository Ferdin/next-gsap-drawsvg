import React from "react";

const count = 200; // number of dots
const size = 65; // diameter of dots
const distanceFactor = 1.7; // distance for before/after pseudo dots (not used here, but can be adapted)
const delayFactor = 0.05; // delay between each dot animation
const durationBasic = 2; // base duration
const durationFactor = 0; // duration increment per dot (0 for same duration)

const colors = [
  "#BF365A",
  "#223673",
  "#197339",
  "#F2D43D",
  "#F25430",
  "#BF365A",
];

const Wave = () => {
  // Generate styles for dots dynamically:
  const dots = [];
  for (let i = 1; i <= count; i++) {
    const left = ((i - 1) * 100) / count + "vw";
    const animationDuration = durationBasic + i * durationFactor + "s";
    const animationDelay = (i * delayFactor) / 10 + "s";
    const colorIndex = i % colors.length;
    const backgroundColor = colors[colorIndex];

    dots.push(
      <div
        key={i}
        className="dot"
        style={{
          left,
          width: size,
          height: size,
          backgroundColor,
          animationDuration,
          animationDelay,
          bottom: "50%",
          position: "absolute",
          borderRadius: "50%",
          opacity: 0.65,
          transform: `translateY(100px)`,
          filter: "none",
          animationTimingFunction: "cubic-bezier(.39,0,.6,.99)",
          animationName: "downUp",
          animationIterationCount: "infinite",
        }}
      />
    );
  }

  return (
    <>
      <style>
        {`
          @keyframes downUp {
            0% {
              transform: translate3d(0, 100px, 0) scale(1);
              opacity: 0.65;
            }
            50% {
              transform: translate3d(0, -100px, 0) scale(0.4);
              opacity: 1;
            }
            100% {
              transform: translate3d(0, 100px, 0) scale(1);
              opacity: 0.65;
            }
          }
          body, html, #root {
            margin: 0; padding: 0; height: 100%; width: 100%;
            overflow-x: hidden;
          }
          .container {
            position: relative;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background: #111;
          }
        `}
      </style>

      <div className="container">{dots}</div>
    </>
  );
};

export default Wave;
