import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductsManagement from './components/ProductsManagement';
import Dashboard from './components/dashboard';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrdersManagement from './components/OrderManagement';
import CalendarView from './components/CalendarView';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Dashboard />
        </div>
        <div className="col-auto">
          <CalendarView />
        </div>
      </div>
    </div>
        <ProductsManagement/>
        <OrdersManagement/>
      </div>
    </Router>
  );
}

export default App;
