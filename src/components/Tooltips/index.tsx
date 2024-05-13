import React from "react";
import ReactTooltip from "react-tooltip";

const Tooltips: React.FC = () => {
  return (
    <>
      <ReactTooltip id="toggleTheme" effect="solid">
        <span>Toggle theme</span>
      </ReactTooltip>

      <ReactTooltip id="add" effect="solid">
        <span>Add new student</span>
      </ReactTooltip>

      <ReactTooltip id="link" effect="solid">
        <span>Open in new tab</span>
      </ReactTooltip>

      <ReactTooltip id="edit" effect="solid">
        <span>Edit student</span>
      </ReactTooltip>

      <ReactTooltip id="delete" effect="solid">
        <span>Delete student</span>
      </ReactTooltip>
    </>
  );
};

export default Tooltips;
