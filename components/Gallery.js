import Link from "next/link";
import { products } from "@/data/products";
export default function Gallery() {
  return (
    <section id="work" className="gallery" aria-label="Selected work">
      {products.map((p) => (
        <Link key={p.slug} href={`/work/${p.slug}`} className="card"
          style={{ backgroundColor: p.tint, backgroundImage: p.cover ? `url(${p.cover})` : "none" }}>
          <span>{p.title}</span>
        </Link>
      ))}
    </section>
  );
}
