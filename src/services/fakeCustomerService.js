import { uuidv4 } from "../utils/uuid";

let customers = [
  {
    _id: "8A7FC525-42CA-4C31-8C53-976CB8A31224",
    firstName: "Raju",
    lastName: "Hasan",
    age: 28,
    sex: { _id: "1", name: "Male" },
    dateOfBirth: new Date("1990-09-01"),
    phone: "01711873884",
    address: "West Dhanmondi, Dhaka-1207",
    income: 20000,
    liked: true
  },
  {
    _id: "19DC28B2-E7F0-472B-9DA9-23AB730E5944",
    firstName: "Shaiful",
    lastName: "Islam",
    age: 35,
    sex: { _id: "1", name: "Male" },
    dateOfBirth: new Date("1983-10-05"),
    phone: "01754545043",
    address: "Bokshibazar, Dhaka-1207",
    income: 30000,
    liked: false
  },
  {
    _id: "2DAB3383-CA9F-4D30-A6CD-D4CE3ACF92A6",
    firstName: "Zahidul",
    lastName: "Islam",
    age: 31,
    sex: { _id: "1", name: "Male" },
    dateOfBirth: new Date("1987-09-01"),
    phone: "01711873884",
    address: "Mirpur, Dhaka-1207",
    income: 20000,
    liked: false
  },
  {
    _id: "473CFF74-2F79-484D-AEFD-EA9C2094322A",
    firstName: "Abu",
    lastName: "Zafor",
    age: 30,
    sex: { _id: "1", name: "Male" },
    dateOfBirth: new Date("1988-09-01"),
    phone: "01711873884",
    address: "Keraniganj, Dhaka-1207",
    income: 20000,
    liked: true
  },
  {
    _id: "5C3047F8-6506-43B2-8956-988DCEE37CE6",
    firstName: "Samsunnaher",
    lastName: "Lima",
    age: 19,
    sex: { _id: "2", name: "Female" },
    dateOfBirth: new Date("2001-08-01"),
    phone: "01737792466",
    address: "Azimpur, Dhaka-1207",
    income: 10000,
    liked: false
  },
  {
    _id: "8A7FC525-42CA-4C31-8C53-976CB8A31225",
    firstName: "Hasib",
    lastName: "Hasan",
    age: 28,
    sex: { _id: "1", name: "Male" },
    dateOfBirth: new Date("1990-09-01"),
    phone: "01711873884",
    address: "West Dhanmondi, Dhaka-1207",
    income: 20000,
    liked: true
  },
  {
    _id: "19DC28B2-E7F0-472B-9DA9-23AB730E5943",
    firstName: "Shaiful",
    lastName: "Islam",
    age: 35,
    sex: { _id: "1", name: "Male" },
    dateOfBirth: new Date("1983-10-05"),
    phone: "01754545043",
    address: "Bokshibazar, Dhaka-1207",
    income: 30000,
    liked: false
  },
  {
    _id: "2DAB3383-CA9F-4D30-A6CD-D4CE3ACF92A2",
    firstName: "Zahidul",
    lastName: "Islam",
    age: 31,
    sex: { _id: "1", name: "Male" },
    dateOfBirth: new Date("1987-09-01"),
    phone: "01711873884",
    address: "Mirpur, Dhaka-1207",
    income: 20000,
    liked: false
  },
  {
    _id: "473CFF74-2F79-484D-AEFD-EA9C20943221",
    firstName: "Abu",
    lastName: "Zafor",
    age: 30,
    sex: { _id: "1", name: "Male" },
    dateOfBirth: new Date("1988-09-01"),
    phone: "01711873884",
    address: "Keraniganj, Dhaka-1207",
    income: 20000,
    liked: true
  },
  {
    _id: "5C3047F8-6506-43B2-8956-988DCEE37CE1",
    firstName: "Samsunnaher",
    lastName: "Lima",
    age: 19,
    sex: { _id: "2", name: "Female" },
    dateOfBirth: new Date("2001-08-01"),
    phone: "01737792466",
    address: "Azimpur, Dhaka-1207",
    income: 10000,
    liked: false
  }
];

export function getCustomers() {
  return customers;
}

export function getSex() {
  return [{ _id: "1", name: "Male" }, { _id: "2", name: "Female" }];
}

export function getCustomer(id) {
  return customers.find(c => c._id === id);
}

export function saveCustomer(customer) {
  let customerInDb = customers.find(c => c._id === customer._id) || {};
  customerInDb.firstName = customer.firstName;
  customerInDb.lastName = customer.lastName;
  customerInDb.age = customer.age;
  customerInDb.phone = customer.phone;
  customerInDb.dateOfBirth = customer.dateOfBirth;
  customerInDb.income = customer.income;
  customerInDb.address = customer.address;
  customerInDb.liked = false;
  
  customerInDb.sex = getSex().find(x => x._id === customer.sexId);
  if (!customerInDb._id) {
    customerInDb._id = uuidv4();
    customers.push(customerInDb);
  }
}
