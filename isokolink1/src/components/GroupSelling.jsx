
import { useEffect, useState } from "react";
import { Users, PlusCircle, Package } from "lucide-react";

export default function GroupSelling({ user }) {
  const [groups, setGroups] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("isokolink-groups") || "[]"
      );
    } catch {
      return [];
    }
  });

  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "isokolink-groups",
      JSON.stringify(groups)
    );
  }, [groups]);

  function createGroup(e) {
    e.preventDefault();

    if (!name.trim() || !product.trim() || Number(quantity) <= 0) {
      alert("Please enter valid group details.");
      return;
    }

    const newGroup = {
      id: crypto.randomUUID(),
      name,
      product,
      quantity: Number(quantity),
      farmer: user?.email || "Farmer",
      status: "Open",
      createdAt: new Date().toISOString(),
    };

    setGroups((previous) => [...previous, newGroup]);

    setName("");
    setProduct("");
    setQuantity("");
  }

  return (
    <section className="feature-card">
      <div className="feature-heading">
        <Users size={28} />
        <div>
          <h2>Smart Group Selling</h2>
          <p>Bring farmers together to sell agricultural products.</p>
        </div>
      </div>

      <form onSubmit={createGroup}>
        <label>Group name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Example: Rubavu Farmers Group"
          required
        />

        <label>Product</label>
        <input
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Example: Beans"
          required
        />

        <label>Total quantity (kg)</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <button className="feature-button" type="submit">
          <PlusCircle size={18} /> Create selling group
        </button>
      </form>

      <h3>Available groups</h3>

      {groups.length === 0 ? (
        <p>No groups created yet.</p>
      ) : (
        groups.map((group) => (
          <div className="group-item" key={group.id}>
            <Package size={22} />
            <div>
              <strong>{group.name}</strong>
              <p>Product: {group.product}</p>
              <p>Quantity: {group.quantity} kg</p>
              <small>Created by: {group.farmer}</small>
              <p>Status: {group.status}</p>
            </div>
          </div>
        ))
      )}
    </section>
  );
}
