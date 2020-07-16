import * as React from "react";

interface LoaderCircle {
  size: "s" | "m";
}

export const LoaderCircle: React.FC<LoaderCircle> = ({size}) => {
  return (
    <div className={`Loader Loader--${size}`}>
      <svg className="Loader__circle" viewBox="0 0 72 72">
        <circle className="Loader__path" cx="36" cy="36" r="30"></circle>
      </svg>
    </div>
  );
};

export const GlobalLoader = () => {
  return (
    <div className={"Overlay is-active"}>
      <LoaderCircle size={"m"}/>
    </div>
  );
};
