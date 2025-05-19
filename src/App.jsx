import { useState } from "react";
import ProductList from "./ProductList";
import samsung from "./assets/samsung.jpg"; 
import tshirt from "./assets/tshirt.jpg";
import basketball from "./assets/basketball.jpg";
import runningShoes from "./assets/rshoes.jpg";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Samsung Flagship TV",
      price: 8000.0,
      description: "A high-end television with stunning picture quality and smart features.",
      image: samsung,
      category: "Electronics",
      
    },
    {
      id: 2,
      name: "T-shirt",
      price: 15.99,
      description: "A comfortable and stylish cotton t-shirt available in various sizes.",
      image: tshirt,
      category: "Clothing",
      
    },
    {
      id: 3,
      name: "Basketball",
      price: 20.99,
      description: "A durable basketball suitable for indoor and outdoor play.",
      image: basketball,
      category: "Sports",
     
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 60.0,
      description: "Lightweight and comfortable running shoes for daily workouts.",
      image: runningShoes,
      category: "Sports",
     
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    
    <div className="App">
      <h1>
      E-Shop Showcase: Explore Our Products
      </h1>
      <h2>Product Listing</h2>

      {/* Category Filter */}
      <div className="category-filter">
        <label htmlFor="category">Filter by Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      {/* Product List */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
