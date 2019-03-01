import React from "react";

const ListGroup = ({
  items,
  onItemSelect,
  valueProperty,
  textProperty,
  selectedItem
}) => {
  // const {
  //   items,
  //   onItemSelect,
  //   valueProperty,
  //   textProperty,
  //   selectedItem
  // } = props;

  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          className={
            item === selectedItem
              ? "clickable list-group-item active"
              : "clickable list-group-item"
          }
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
