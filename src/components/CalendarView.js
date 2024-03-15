import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Modal, Button } from 'react-bootstrap'; // Import Modal component from react-bootstrap
import { Typography } from '@mui/material';

const CalendarView = () => {
  // State to track the selected date
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Mock data for orders
  const orders = [
    { id: 1, orderId: 'ORD-001', customerName: 'Neha D', orderDate: '2024-03-09', status: 'Pending' },
    { id: 2, orderId: 'ORD-002', customerName: 'Swati K', orderDate: '2024-03-10', status: 'Shipped' },
    { id: 3, orderId: 'ORD-002', customerName: 'Yash Kal', orderDate: '2024-03-10', status: 'Delivered' },
    { id: 4, orderId: 'ORD-002', customerName: 'Vaish Pardeshi', orderDate: '2024-03-13', status: 'Pending' },
    { id: 5, orderId: 'ORD-002', customerName: 'Jane Smith', orderDate: '2024-03-15', status: 'Delivered' }
    // Add more orders as needed
  ];

  // Function to filter orders by selected date
  const getOrdersForDate = (date) => {
    const selectedDateString = date.toISOString().split('T')[0]; // Get date in 'YYYY-MM-DD' format
    return orders.filter(order => order.orderDate === selectedDateString);
  };

  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to handle viewing orders for the selected date
  const handleViewOrders = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  // Function to hide the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="py-4">
      {/* <Typography variant="h4" gutterBottom>Orders Calendar View</Typography> */}
      <Calendar
        onChange={handleViewOrders} // Call handleViewOrders when a date is clicked
        value={selectedDate}
      />
      {/* Orders modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Orders for {selectedDate.toDateString()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {getOrdersForDate(selectedDate).map(order => (
            <div key={order.id} className="mb-3">
              <p>Order ID: {order.orderId}</p>
              <p>Customer Name: {order.customerName}</p>
              <p>Status: {order.status}</p>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CalendarView;
