import * as React from "react";
import {connect} from "react-redux";
import Button from "./Button";

interface DialogProps {
  header: any;
  content: any;
  isLoading?: boolean;
  onCancel: () => void;
  onCustomAction?: () => void;
  onSubmit?: () => void;
  submitButtonLabel?: string;
  customButtonLabel?: string;
  isSubmitDisabled?: boolean;
  withoutForm?: boolean;
}

const Dialog = (props: DialogProps) => {
  const {customButtonLabel, submitButtonLabel, isLoading = false, isSubmitDisabled = false} = props;
  return (
    <div className={"Dialog__wrapper"}>
      <div className={`Dialog__container${props.withoutForm ? " Dialog__container--small" : ""}`}>
        <div className={"Dialog"}>
          <div className={"Dialog__header"}>
            <label>{props.header}</label>
            <span className={"Dialog__close"} onClick={props.onCancel}>×</span>
          </div>
          <div className={"Dialog__content"}>{props.content}</div>
          <div className={"Dialog__actions"}>
            {customButtonLabel && <Button type={"secondary"}
                                          label={customButtonLabel}
                                          onClick={props.onCustomAction}/>}
            {submitButtonLabel && <Button type={"primary"}
                                          label={submitButtonLabel}
                                          onClick={props.onSubmit}
                                          isLoading={isLoading}
                                          disabled={isSubmitDisabled}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
