import { CSSProperties, Props, ReactPropTypes } from "react";

interface Dimension {
  height?: string;
  width?: string;
  style?: CSSProperties;
}
export default function Shimmmer({
  height = "16px",
  width = "100%",
  style,
}: Dimension) {
  return (
    <div style={style}>
      <style jsx>{`
        body {
          background-color: white;
        }
        div {
          animation-duration: 1s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: placeHolderShimmer;
          animation-timing-function: linear;
          animation-delay: 0.5s;
          background-color: #ededed;
          background-image: linear-gradient(
            70deg,
            silver 14.36%,
            #d7d6d6 56.29%,
            #ededed 100%
          );
          background-repeat: no-repeat;
          background-size: 244px 104px;
          position: relative;
          height: ${height};
          width: ${width};
          margin: 3px 6px 3px 0px;
        }
        @keyframes placeHolderShimmer {
          0% {
            background-position: calc(0% - 300px) 0;
          }

          20% {
            background-position: calc(0% - 300px) 0;
          }

          80% {
            background-position: calc(100% + 300px) 0;
          }

          100% {
            background-position: calc(100% + 300px) 0;
          }
        }
      `}</style>
    </div>
  );
}
