import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { Plus, Package, ShoppingBag, DollarSign } from "lucide-react";

function FarmerDashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "Vegetables",
    price: "",
    quantity: ""
  });

  function addProduct(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      ...form,
      price: Number(form.price),
      quantity: Number(form.quantity)
    };

    setProducts((previous) => [newProduct, ...previous]);

    setForm({
      name: "",
      category: "Vegetables",
      price: "",
      quantity: ""
    });
  }

  function deleteProduct(id) {
    setProducts((previous) => previous.filter((item) => item.id !== id));
  }

  return (
    <DashboardLayout
      title="Farmer Dashboard"
      subtitle="Manage your agricultural products."
    >
      <div className="stats-grid">
        <div className="stat-card">
          <Package />
          <p>Total Products</p>
          <h2>{products.length}</h2>
        </div>

        <div className="stat-card">
          <ShoppingBag />
          <p>Orders</p>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <DollarSign />
          <p>Total Sales</p>
          <h2>0 RWF</h2>
        </div>
      </div>

      <div className="dashboard-panel">
        <h2><Plus size={22} /> Add New Product</h2>

        <form className="product-form" onSubmit={addProduct}>
          <input
            required
            placeholder="Product name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Grains</option>
            <option>Potatoes</option>
            <option>Beans</option>
            <option>Coffee and Tea</option>
            <option>Livestock Products</option>
          </select>

          <input
            type="number"
            min="1"
            required
            placeholder="Price (RWF)"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />

          <input
            type="number"
            min="1"
            required
            placeholder="Quantity (kg or units)"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          />

          <button className="primary-button" type="submit">
            <Plus size={18} /> Publish Product
          </button>
        </form>
      </div>

      <div className="dashboard-panel">
        <h2>My Products</h2>

        {products.length === 0 ? (
          <p className="empty-message">
            You have not published any products yet.
          </p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price.toLocaleString()} RWF</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default FarmerDashboard;
