import * as React from "react";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import {Position} from "../../store/models/ImageDetailsModel";
import Input from "../../components/Input";
import {useContext} from "react";
import {ImageFullInfoContext} from "../dialogs/UploadDialog";


const ImageDetails: React.FC = () => {
  const {image, setDetails} = useContext(ImageFullInfoContext);
  const {details} = image;
  const {text, position, color} = details;
  const options = [Position.LEFT, Position.BOTTOM, Position.RIGHT, Position.TOP];
  return (
    <>
      <div className={"Form__item"}>
        <Textarea label={"Add description"} name={"text"} text={text} setNewValue={setDetails}/>
      </div>
      <div className={"Form__item"}>
        <Select label={"Tooltip position"} name={"position"} options={options} value={position} setNewValue={setDetails}/>
      </div>
      <div className={"Form__item"}>
        <Input label={"Select tooltip color"} name={"color"} value={color} type={"color"} setNewValue={setDetails}/>
      </div>
    </>
  );
};

export default ImageDetails;
