
import { useState } from "react";
import { Languages, ArrowLeftRight } from "lucide-react";

const dictionary = {
  hello: "Muraho",
  welcome: "Murakaza neza",
  farmer: "Umuhinzi",
  buyer: "Umuguzi",
  market: "Isoko",
  agriculture: "Ubuhinzi",
  products: "Ibicuruzwa",
  price: "Igiciro",
  vegetables: "Imboga",
  fruits: "Imbuto",
  thankyou: "Murakoze",
  water: "Amazi",
  milk: "Amata",
  maize: "Ibigori",
  beans: "Ibishyimbo",
};

export default function Translator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [language, setLanguage] = useState("en-rw");

  function translate() {
    const words = input.toLowerCase().trim().split(/\s+/);

    const translated = words.map((word) => {
      const cleanWord = word.replace(/[.,!?]/g, "");
      const entry = dictionary[cleanWord];

      if (!entry) return word;

      return language === "en-rw"
        ? entry
        : Object.keys(dictionary).find(
            (key) => dictionary[key] === entry
          ) || word;
    });

    setResult(translated.join(" "));
  }

  return (
    <section className="feature-card">
      <div className="feature-heading">
        <Languages size={28} />
        <div>
          <h2>Language Translator</h2>
          <p>English and Kinyarwanda</p>
        </div>
      </div>

      <button
        className="feature-button"
        onClick={() =>
          setLanguage(language === "en-rw" ? "rw-en" : "en-rw")
        }
      >
        {language === "en-rw"
          ? "English → Kinyarwanda"
          : "Kinyarwanda → English"}
        <ArrowLeftRight size={18} />
      </button>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to translate..."
      />

      <button className="feature-button" onClick={translate}>
        Translate
      </button>

      <div className="translation-result">
        <strong>Translation:</strong>
        <p>{result || "Your translation will appear here."}</p>
      </div>
    </section>
  );
}
