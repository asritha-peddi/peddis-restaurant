import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: "Hyderabadi Biryani", price: 199, emoji: "🍛" },
    { id: 2, name: "Pesarattu", price: 89, emoji: "🫓" },
    { id: 3, name: "Gongura Chicken", price: 249, emoji: "🍗" },
    { id: 4, name: "Pulihora", price: 79, emoji: "🍚" },
    { id: 5, name: "Bobbatlu", price: 59, emoji: "🫔" },
    { id: 6, name: "Mirchi Bajji", price: 49, emoji: "🌶️" },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="app">
      <header>
        <h1>🍽️ Peddi's Restaurant</h1>
        <p>Authentic Andhra Flavours — Made with Love</p>
        <div className="cart-icon">🛒 Cart: {cart.length} items</div>
      </header>

      <section className="menu">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div className="card" key={item.id}>
              <div className="emoji">{item.emoji}</div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 Peddi's Restaurant | Hyderabad, India</p>
      </footer>
    </div>
  );
}

export default App;