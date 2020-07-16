import * as React from "react";
import {useContext, useState} from "react";
import Dropzone from "react-dropzone";
import {ImageFullInfoContext} from "../dialogs/UploadDialog";

const ImageDropZone: React.FC = () => {
  const {image, setImage} = useContext(ImageFullInfoContext);
  const [labelText, setLabelText] = useState("Add image");
  const {view} = image;

  const addFilesToDropZone = (files) => {
    const file = files[0]; // from all files take only first view and validate it
    if (file.type.indexOf("image") === 0) {
      setImage(file);
    } else {
      setLabelText("Sorry, only images allowed. Try another file.");
    }
  };

  const renderFileImage = () => (
    <div className={"Dropzone__image"} >
      <img src={URL.createObjectURL(view)} alt={view.path} className={"Dropzone__imagePreview"}/>
    </div>
  );

  return (
    <div className={"Dropzone__wrapper"}>
      <Dropzone onDrop={addFilesToDropZone}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="Dropzone">
            <input {...getInputProps()} />
            {!view && <div className="Label">{labelText}</div>}
            {view && renderFileImage()}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default ImageDropZone;
