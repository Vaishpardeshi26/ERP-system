import React, { useState } from 'react';
import { Container, Table, Dropdown, Button, Modal } from 'react-bootstrap'; // Import Modal component from react-bootstrap
import { Typography } from '@mui/material';

const OrdersManagement = () => {
  // Mock data for orders
  const [orders, setOrders] = useState([
    { id: 1, orderId: 'ORD-001', customerName: 'Neha D', orderDate: '2024-03-10', status: 'Pending' },
    { id: 2, orderId: 'ORD-002', customerName: 'Swati K', orderDate: '2024-03-11', status: 'Shipped' },
    { id: 3, orderId: 'ORD-002', customerName: 'Yash Kal', orderDate: '2024-03-11', status: 'Delivered' },
    { id: 4, orderId: 'ORD-002', customerName: 'Vaish Pardeshi', orderDate: '2024-03-14', status: 'Pending' },
    { id: 5, orderId: 'ORD-002', customerName: 'Jane Smith', orderDate: '2024-03-16', status: 'Pending' },
    // Add more orders as needed
  ]);

  // State to track the selected order for viewing details
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to delete an order
  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  // Function to update the status of an order
  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order => (order.id === id ? { ...order, status: newStatus } : order)));
  };

  // Function to handle viewing details
  const handleViewDetails = (orderId) => {
    // Find the order with the given ID
    const order = orders.find(order => order.id === orderId);
    // Set the selected order for details view
    setSelectedOrder(order);
    // Show the modal
    setShowModal(true);
  };

  // Function to hide the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="py-4">
      <Typography variant="h4" gutterBottom>Orders Management</Typography>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="info" onClick={() => handleViewDetails(order.id)} style={{marginRight:'10px'}}>View Details</Button>
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Update Status
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => updateStatus(order.id, 'Pending')}>Pending</Dropdown.Item>
                    <Dropdown.Item onClick={() => updateStatus(order.id, 'Shipped')}>Shipped</Dropdown.Item>
                    <Dropdown.Item onClick={() => updateStatus(order.id, 'Delivered')}>Delivered</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="danger" onClick={() => deleteOrder(order.id)} style={{ marginLeft: '10px' }}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Details modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <>
              <p>Order ID: {selectedOrder.orderId}</p>
              <p>Customer Name: {selectedOrder.customerName}</p>
              <p>Order Date: {selectedOrder.orderDate}</p>
              <p>Status: {selectedOrder.status}</p>
              {/* Add additional details as needed */}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default OrdersManagement;
