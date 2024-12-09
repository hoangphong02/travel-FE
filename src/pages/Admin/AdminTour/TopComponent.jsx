import React from "react";
import { Button } from "react-bootstrap";

const TopComponent = ({ handleShowModalActions }) => {
  return (
    <div className="body">
      <h3>Manage Tour list</h3>
      <div>
        <Button onClick={() => handleShowModalActions("add")}>ADD</Button>
      </div>
    </div>
  );
};

export default TopComponent;
