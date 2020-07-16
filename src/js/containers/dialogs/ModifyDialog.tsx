import * as React from "react";
import {useState} from "react";
import {connect} from "react-redux";
import Dialog from "../../components/Dialog";
import {updateDetailsPopupFlag} from "../../store/actions/actions";
import {getSelectedImage} from "../../store/reducer/appReducer";
import ImageForm from "../form/ImageForm";
import {ImageModel} from "../../store/models/ImageModel";
import {ImageFullInfoContext} from "./UploadDialog";
import {deleteImage, updateImageDetails} from "../../requests/requests";

const ModifyDialog = (props) => {
  const [details, setNextDetails] = useState(props.image.details);

  const setDetails = ({target}) => {
    setNextDetails({...details, [target.name]: target.value})
  };

  const handleSubmit = () => {
    props.submit(details);
  };

  const handleDelete = () => {
    props.delete(details.id);
  };

  const imageFullInfo = {image: new ImageModel(props.image.view, details), setImage: () => { return; }, setDetails};
  return (
    <ImageFullInfoContext.Provider value={imageFullInfo}>
      <Dialog header={"Image details"}
              content={<ImageForm />}
              onCancel={props.cancel}
              onSubmit={handleSubmit}
              isLoading={props.isDeleting}
              submitButtonLabel={"Update"}
              isSubmitDisabled={props.submitDisabled}
              customButtonLabel={"Delete"}
              onCustomAction={handleDelete}
      />
    </ImageFullInfoContext.Provider>
  )
};

const mapStateToProps = (state) => ({
  image: getSelectedImage(state)
});

const mapDispatchToProps = (dispatch) => ({
  cancel: () => dispatch(updateDetailsPopupFlag(false)),
  submit: (details) => dispatch(updateImageDetails(details)),
  delete: (id) => dispatch(deleteImage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyDialog);