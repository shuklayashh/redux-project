import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Plextone Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/10001.jpg"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/10002.jpg"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.png"},
    {"id": 4, "name": "Beautifull Dog", "price": 39, "image": "/assets/images/1004.jpg"},
    {"id": 5, "name": "Agreen Bird try it", "price": 199, "image": "/assets/images/parot.jpg"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/10004.avif"}
  ]

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
