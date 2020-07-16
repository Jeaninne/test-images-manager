import * as React from "react";
import {connect} from "react-redux";
import {ImageModel} from "../store/models/ImageModel";

interface ImageWithTooltipProps {
  image: ImageModel;
}

const ImageWithTooltip: React.FC<ImageWithTooltipProps> = ({image}) => {
  const color = image.details.color;
  const style = {color, borderColor: color};
  return (
    <div className={"DetailedImage"}>
      <img src={image.view.src} className={"DetailedImage__view"}/>
      {image.details.text && <div className={`Tooltip Tooltip--${image.details.position}`} style={style}>
        <div className={"Tooltip__text"}>{image.details.text}</div>
      </div>}
    </div>
  );
};

export default ImageWithTooltip;
