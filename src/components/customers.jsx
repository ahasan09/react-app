import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import CustomersTable from "./customersTable";
import { getCustomers, getSex } from "../services/fakeCustomerService";
import { paginate } from "../utils/paginate";
import SearchBox from "./common/searchBox";
import { orderBy } from "lodash";
import { Link } from "react-router-dom";

class Customers extends Component {
  state = {
    customers: [],
    sex: [],
    selectedItem: null,
    searchQuery: "",
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "FirstName", order: "asc" }
  };

  componentDidMount() {
    const allSex = [{ _id: 0, name: "All" }, ...getSex()];
    this.setState({
      customers: getCustomers(),
      sex: allSex
    });
  }

  handleDelete = customer => {
    const customers = this.state.customers.filter(c => c._id !== customer._id);
    this.setState({ customers });
  };

  handleLike = customer => {
    // let customers = [...this.state.customers];
    // let c = customers.find(c => c._id === customer._id);
    // c.Liked = !c.Liked;
    // this.setState({ customers });

    const customers = [...this.state.customers];
    const index = customers.indexOf(customer);
    customers[index] = { ...customers[index] };
    customers[index].Liked = !customers[index].Liked;
    this.setState({ customers });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleOnItemSelect = item => {
    this.setState({ selectedItem: item, searchQuery: "", currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleItemDetail = item => {
    console.log(item);
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedItem: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      customers: allCustomers,
      selectedItem,
      sortColumn,
      searchQuery
    } = this.state;

    let filtered = allCustomers;
    if (searchQuery)
      filtered = allCustomers.filter(c =>
        c.firstName.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedItem && selectedItem._id > 0)
      filtered = allCustomers.filter(c => c.sex.name === selectedItem.name);

    // const filtered =
    //   selectedItem && selectedItem._id > 0
    //     ? allCustomers.filter(c => c.sex.name === selectedItem.name)
    //     : allCustomers;

    const sorted = orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const customers = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: customers };
  };

  // handleCreate=()=>{
  //   this.props.history.push("/customers/new");
  // };

  render() {
    const { length: count } = this.state.customers;
    const {
      currentPage,
      pageSize,
      sex,
      selectedItem,
      sortColumn,
      searchQuery
    } = this.state;

    if (count === 0) {
      return <p>There are no customers in the database.</p>;
    }

    const { totalCount, data: customers } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={sex}
            selectedItem={selectedItem}
            onItemSelect={this.handleOnItemSelect}
          />
        </div>
        <div className="col">
          {/* <button
      type="submit"
      onClick={this.handleCreate}
      className="btn btn-primary"
    >
      Create
    </button> */}
          <Link
            to="customers/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Customer
          </Link>
          <p>Showing {totalCount} customers in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <CustomersTable
            customers={customers}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
            onDetail={this.handleItemDetail}
          />
          <Pagination
            itemsCount={totalCount}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Customers;
