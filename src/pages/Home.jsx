import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
} from "@mui/material";

const HomePage = () => {
  const [products, setProducts] = useState([]); // State untuk menyimpan daftar produk
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  }); // State untuk menyimpan produk baru

  // Fetch data produk dari API
  useEffect(() => {
    fetch("http://localhost:8000/api/products") // Ganti dengan URL API Anda
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Handler untuk menambah produk baru
  const handleAddProduct = () => {
    // Produk baru
    const newProductWithId = {
      ...newProduct,
      id: products.length + 1, // Auto-generate ID (optional, sesuaikan dengan backend)
    };

    // Tambahkan ke state (update UI)
    setProducts([...products, newProductWithId]);

    // Reset form
    setNewProduct({
      name: "",
      description: "",
      price: "",
      image: "",
    });

    // (Optional) Kirim produk baru ke backend
    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductWithId),
    })
      .then((response) => response.json())
      .then((data) => console.log("Product added:", data))
      .catch((error) => console.error("Error adding product:", error));
  };

  return (
    <div>
      {/* Header */}
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Flash Sale
      </Typography>

      {/* Form untuk Menambah Produk Baru */}
      <div style={{ margin: "20px 0", textAlign: "center" }}>
        <TextField
          label="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <TextField
          label="Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          style={{ marginRight: "10px" }}
        />
        <TextField
          label="Price"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <TextField
          label="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          Add Product
        </Button>
      </div>

      {/* Tampilkan Produk */}
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                image={product.image || "https://via.placeholder.com/150"}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="h6">Rp {product.price}</Typography>
                <Button variant="contained" color="primary">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
