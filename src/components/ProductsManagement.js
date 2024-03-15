import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const mockProducts = [
  { id: 1, name: 'Product A', category: 'Category A', price: 50, stock: 100 },
  { id: 2, name: 'Product B', category: 'Category B', price: 70, stock: 80 },
  { id: 3, name: 'Product C', category: 'Category C', price: 90, stock: 120 },
];

const ProductsManagement = () => {
  const [products, setProducts] = useState(mockProducts);
  const [editProduct, setEditProduct] = useState(null);

  const handleAddProduct = () => {
    // Create a new product object with random ID
    const newProduct = {
      id: Math.floor(Math.random() * 1000) + 1, // Generate random ID
      name: 'New Product',
      category: 'New Category',
      price: 0,
      stock: 0
    };
    // Add the new product to the products array
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find(product => product.id === id);
    setEditProduct(productToEdit);
  };

  const handleSaveEdit = () => {
    // Find the index of the edited product
    const index = products.findIndex(product => product.id === editProduct.id);
    // Update the products array with the edited product
    const updatedProducts = [...products];
    updatedProducts[index] = editProduct;
    setProducts(updatedProducts);
    // Clear the edit mode
    setEditProduct(null);
  };

  const handleCancelEdit = () => {
    // Clear the edit mode
    setEditProduct(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the editProduct state with the new value
    setEditProduct({ ...editProduct, [name]: value });
  };

  const handleDeleteProduct = (id) => {
    // Filter out the product with the given ID
    const updatedProducts = products.filter(product => product.id !== id);
    // Update the products array
    setProducts(updatedProducts);
  };

  return (
    <Container className="py-4">
      <h2 className="text-2xl font-bold mb-4">Products Management</h2>
      <Button onClick={handleAddProduct} variant="success" className="mb-3">Add Product</Button>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="p-4 border rounded-md">
              <Card.Body>
                {editProduct && editProduct.id === product.id ? (
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={editProduct.name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        type="text"
                        name="category"
                        value={editProduct.category}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={editProduct.price}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stock</Form.Label>
                      <Form.Control
                        type="number"
                        name="stock"
                        value={editProduct.stock}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Button onClick={handleSaveEdit} variant="primary" className="me-2">Save</Button>
                    <Button onClick={handleCancelEdit} variant="secondary">Cancel</Button>
                  </Form>
                ) : (
                  <>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
                    <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
                    <Card.Text><strong>Stock:</strong> {product.stock}</Card.Text>
                    <Button onClick={() => handleEditProduct(product.id)} variant="info" className="me-2">Edit</Button>
                    <Button onClick={() => handleDeleteProduct(product.id)} variant="danger">Delete</Button>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsManagement;
