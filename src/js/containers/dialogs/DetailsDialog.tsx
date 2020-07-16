import * as React from "react";
import {connect} from "react-redux";
import Dialog from "../../components/Dialog";
import ImageWithTooltip from "../../components/ImageWithTooltip";
import {getSelectedImage} from "../../store/reducer/appReducer";
import {updateDetailsPopupFlag} from "../../store/actions/actions";

const DetailsDialog = (props) => {
  return <Dialog header={""}
                 content={<ImageWithTooltip image={props.image} />}
                 onCancel={props.cancel}
                 isLoading={props.isDeleting}
                 withoutForm
  />;
};

const mapStateToProps = (state) => ({
  image: getSelectedImage(state)
});

const mapDispatchToProps = (dispatch) => ({
  cancel: () => dispatch(updateDetailsPopupFlag(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsDialog);