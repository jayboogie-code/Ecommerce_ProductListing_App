# E-Shop Showcase

E-Shop Showcase is a simple React-based application that displays a list of products. Users can filter products by category and view product details such as name, description, price, and category. The app is fully responsive and works seamlessly across devices, including desktops, tablets, and mobile phones.

## Features

- Display a list of products with images, descriptions, and prices.
- Filter products by category (e.g., Electronics, Clothing, Sports).
- Responsive design for all screen sizes, including iPads and mobile devices.
- Add-to-cart button for each product (non-functional placeholder).

## Project Structure
├── public/ ├── src/ │ ├── assets/ # Product images │ ├── components/ │ │ ├── ProductList.jsx # Renders the list of products │ │ ├── ProductItem.jsx # Renders individual product details │ ├── App.jsx # Main application component │ ├── index.css # Global and responsive styles │ ├── main.jsx # Entry point for the React app └── README.md # Project documentation


## Installation


1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/e-shop-showcase.git
   cd e-shop-showcase
2. npm install
3. npm run dev
4. Open the app in your browser at http://localhost:5173.

Technologies Used
React: For building the user interface.
Vite: For fast development and build tooling.
CSS: For styling and responsive design.

Components
App.jsx
The main component that manages the state of the product list and selected category.
Includes the category filter and passes filtered products to ProductList.
ProductList.jsx
Renders a grid of products using the ProductItem component.
ProductItem.jsx
Displays individual product details, including an image, name, description, price, and category.
Styling
The app uses a responsive design approach with CSS. Key features include:

Flexbox and Grid for layout.
Media queries for responsiveness on tablets, iPads, and mobile devices.



