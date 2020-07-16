import * as React from "react";
import ImageDetails from "./ImageDetails";
import ImageDropZone from "./ImageDropZone";
import ImageDisplay from "../image/ImageDisplay";

interface ImageFormProps {
  isNew?: boolean;
}

const ImageForm: React.FC<ImageFormProps> = ({isNew}) => {
  return (
    <div className={"Form"}>
      <div className={"Form--leftColumn"}>
        {isNew ? <ImageDropZone /> : <ImageDisplay/>}
      </div>
      <div className={"Form--rightColumn"}>
        <ImageDetails />
      </div>
    </div>
  );
};

export default ImageForm;
