import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

import CustomerList from './components/customers/List'
import DepartmentList from './components/departments/List'
import CustomerNew from './components/customers/New'
import EmployeeList from './components/employees/List'

function App() {
  return (
    <BrowserRouter>
    <div>
      <h2>Ticket master</h2>
      <Link to="./">Home</Link> |
      <Link to="/customers"> Customers</Link> |
      <Link to="/departments"> Departments</Link> |
      <Link to="/employees"> Employees</Link> |

      <Route path="/customers" component={CustomerList} />
      <Route path="/departments" component={DepartmentList} />
      <Route path="/customers/new" component={CustomerNew} />
      <Route path="/employees" component={EmployeeList} />
    </div>
    </BrowserRouter>
  );
}

export default App;
