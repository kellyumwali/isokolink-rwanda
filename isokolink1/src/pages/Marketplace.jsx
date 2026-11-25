import { useState } from "react";
import { Search, MapPin } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 1200,
    unit: "kg",
    location: "Rubavu",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600"
  },
  {
    id: 2,
    name: "Fresh Bananas",
    category: "Fruits",
    price: 1500,
    unit: "kg",
    location: "Rubavu",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600"
  },
  {
    id: 3,
    name: "Dry Beans",
    category: "Beans",
    price: 1800,
    unit: "kg",
    location: "Rubavu",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600"
  },
  {
    id: 4,
    name: "Irish Potatoes",
    category: "Potatoes",
    price: 900,
    unit: "kg",
    location: "Rubavu",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600"
  },
  {
    id: 5,
    name: "Maize",
    category: "Grains",
    price: 1000,
    unit: "kg",
    location: "Rubavu",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600"
  },
  {
    id: 6,
    name: "Coffee",
    category: "Coffee and Tea",
    price: 4500,
    unit: "kg",
    location: "Rubavu",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600"
  }
];

function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="section marketplace-section">
      <div className="section-heading">
        <span>ISOKOLINK MARKETPLACE</span>
        <h1>Find Fresh Agricultural Products</h1>
        <p>Discover products offered by farmers in Rubavu.</p>
      </div>

      <div className="market-filters">
        <div className="search-box">
          <Search />
          <input
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Vegetables</option>
          <option>Fruits</option>
          <option>Grains</option>
          <option>Potatoes</option>
          <option>Beans</option>
          <option>Coffee and Tea</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="product-price">
                {product.price.toLocaleString()} RWF / {product.unit}
              </p>
              <p><MapPin size={15} /> {product.location}</p>
              <button
                className="primary-button full-button"
                onClick={() => alert("Please login to continue with your order.")}
              >
                Order Product
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="empty-message">No products found. Try another search.</p>
      )}
    </section>
  );
}

export default Marketplace;