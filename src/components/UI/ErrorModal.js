import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import "./errormodal.scss";

const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onOkay} />;
  };

  const Modal = (props) => {
    return (
      <Card passClass="modal">
        <header className="header">{props.title}</header>

        <div className="content">{props.message}</div>

        <footer className="actions">
          <Button onClick={props.onOkay}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onOkay={props.onOkay} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onOkay={props.onOkay}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
