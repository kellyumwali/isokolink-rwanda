
import { useState } from "react";
import { RefreshCw, Coins } from "lucide-react";

// Illustrative rates only.
// Replace with verified live exchange-rate data before financial use.
const rates = {
  RWF: 1,
  USD: 1450,
  EUR: 1530,
  UGX: 0.39,
};

export default function CurrencyExchange() {
  const [amount, setAmount] = useState(1000);
  const [from, setFrom] = useState("RWF");
  const [to, setTo] = useState("USD");

  const converted =
    Number(amount) * (rates[to] / rates[from]);

  return (
    <section className="feature-card">
      <div className="feature-heading">
        <Coins size={28} />
        <div>
          <h2>Currency Exchange</h2>
          <p>Convert currencies for marketplace price comparison.</p>
        </div>
      </div>

      <label>Amount</label>
      <input
        type="number"
        min="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label>From currency</label>
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <button
        className="feature-button"
        onClick={() => {
          setFrom(to);
          setTo(from);
        }}
      >
        <RefreshCw size={18} /> Switch currencies
      </button>

      <label>To currency</label>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <div className="translation-result">
        <strong>Converted amount</strong>
        <h2>
          {Number.isFinite(converted)
            ? converted.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })
            : "0"}{" "}
          {to}
        </h2>
        <small>Illustrative rates, not live financial quotes.</small>
      </div>
    </section>
  );
}
