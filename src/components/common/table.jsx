import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, onSort, sortColumn, data, onDetail }) => {
  //   const { columns, onSort, sortColumn, data } = props;

  return (
    <table className="table table-bordered">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} onDetail={onDetail} />
    </table>
  );
};

export default Table;
