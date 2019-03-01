import React from "react";

const Like = ({ liked, onClick }) => {
  // const { liked, onClick } = props;

  let classes = "fa fa-heart";
  if (!liked) classes += "-o";

  return (
    <i
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      ari-hidden="true"
    />
  );
};

export default Like;
