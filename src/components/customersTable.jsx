import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
// import TableHeader from "./common/tableHeader";
// import TableBody from "./common/tableBody";
import Table from "./common/table";

class CustomersTable extends Component {
  columns = [
    {
      path: "firstName",
      label: "Display Name",
      content: customer => (
        <Link to={`customers/${customer._id}`}>
          {customer.firstName + " " + customer.lastName}
        </Link>
      )
    },
    { path: "sex", label: "Sex", content: item => item.sex.name },
    // { path: "DateOfBirth", label: "Birth Date" },
    { path: "age", label: "Age" },
    { path: "phone", label: "Phone" },
    { path: "income", label: "Income" },
    { path: "address", label: "Address" },
    {
      key: "like",
      content: item => (
        <Like liked={item.liked} onClick={() => this.props.onLike(item)} />
      )
    },
    {
      key: "delete",
      content: item => (
        <button
          type="button"
          onClick={() => this.props.onDelete(item)}
          className="btn btn-danger"
        >
          Delete
        </button>
      )
    },
    {
      key: "detail",
      content: item => <Link to={`customers/${item._id}`}>Details</Link>
    }
  ];

  //   raiseSort = path => {
  //     const sortColumn = { ...this.props.sortColumn };

  //     if (sortColumn.path === path) {
  //       sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
  //     } else {
  //       sortColumn.path = path;
  //       sortColumn.order = "asc";
  //     }

  //     this.props.onSort(sortColumn);
  //   };

  render() {
    // const { customers, onDelete, onLike } = this.props;
    const { customers, onSort, sortColumn, onDetail } = this.props;

    return (
      <div className="table-responsive">
        <Table
          columns={this.columns}
          onSort={onSort}
          sortColumn={sortColumn}
          data={customers}
          onDetail={onDetail}
        />
        {/* <table className="table table-bordered">
          <TableHeader
            columns={this.columns}
            onSort={onSort}
            sortColumn={sortColumn}
          />
          <TableBody data={customers} columns={this.columns} /> */}
        {/* <thead className="thead-dark">
            <tr>
              <th onClick={() => this.raiseSort("FirstName")} scope="col">
                Display Name
              </th>
              <th onClick={() => this.raiseSort("Sex")} scope="col">
                Sex
              </th>
              <th onClick={() => this.raiseSort("DateOfBirth")} scope="col">
                Birth Date
              </th>
              <th onClick={() => this.raiseSort("Age")} scope="col">
                Age
              </th>
              <th onClick={() => this.raiseSort("Phone")} scope="col">
                Phone
              </th>
              <th onClick={() => this.raiseSort("Income")} scope="col">
                Income
              </th>
              <th scope="col">Address</th>
              <th />
              <th />
            </tr>
          </thead> */}
        {/* <tbody>
            {customers.map(customer => (
              <tr key={customer._id}>
                <td>{customer.FirstName + " " + customer.LastName}</td>
                <td>{customer.Sex}</td>
                <td>
                  {new Intl.DateTimeFormat("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit"
                  }).format(customer.DateOfBirth)}
                </td>
                <td>{customer.Age}</td>
                <td>{customer.Phone}</td>
                <td>
                  {new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  }).format(customer.Income)}
                </td>
                <td>{customer.Address}</td>
                <td>
                  <Like
                    liked={customer.Liked}
                    onClick={() => onLike(customer)}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => onDelete(customer)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}
        {/* </table> */}
      </div>
    );
  }
}

export default CustomersTable;
