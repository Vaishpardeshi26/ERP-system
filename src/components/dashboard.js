import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Container className="py-4">
      <Card className="p-6 bg-white shadow-lg rounded-xl">
        <Card.Body>
          <Typography variant="h4" className="mb-4">Dashboard</Typography>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card className="border-0 rounded-lg">
                <Card.Body>
                  <Typography variant="h5" className="text-primary mb-3">Total Products</Typography>
                  <Typography variant="h3" className="text-muted mb-3">10</Typography>
                  <Button href="/products" variant="primary">View Products</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="border-0 rounded-lg">
                <Card.Body>
                  <Typography variant="h5" className="text-success mb-3">Total Orders</Typography>
                  <Typography variant="h3" className="text-muted mb-3">5</Typography>
                  <Button href="/orders" variant="success">View Orders</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Dashboard;
