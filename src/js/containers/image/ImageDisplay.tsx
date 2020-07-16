import * as React from "react";
import {useContext} from "react";
import {ImageFullInfoContext} from "../dialogs/UploadDialog";

const ImageDisplay: React.FC = () => {
  const {image} = useContext(ImageFullInfoContext);
  return (
    <div className={"DetailedImage"}>
      <img src={image.view.src} className={"DetailedImage__view"}/>
    </div>
  );
};

export default ImageDisplay;
