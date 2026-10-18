import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/data/products";
import ZoomImage from "@/components/ZoomImage";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  return { title: p ? `${p.title} | KVS` : "Not found" };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const i = products.indexOf(p);
  const next = products[(i + 1) % products.length];
  const shots = p.images.length ? p.images : [null, null, null, null];
  return (
    <article className="wrap case">
      <Link href="/#work" className="back">
        ← Back to work
      </Link>
      <h1>{p.title}</h1>
      <p className="lead">{p.tagline}</p>
      <div className="meta">
        <div>
          <b>Role</b>
          {p.role}
        </div>
        <div>
          <b>Timeline</b>
          {p.timeline}
        </div>
        <div>
          <b>Tools</b>
          {p.tools.join(", ")}
        </div>
      </div>
      <div className="sec">
        <h2>Overview</h2>
        <p>{p.overview}</p>
      </div>
      <ZoomImage
        src={p.cover}
        className="shot wide"
        style={{ backgroundColor: p.tint }}
        label="Cover image"
        alt={p.title}
      />
      <div className="flex gap-8 border border-collapse border-solid border-gray-200 my-8 p-6 rounded-lg">
        <div className=" cnt flex-col gap-2">
          <h2>Problem</h2>
          <p>{p.problem}</p>
        </div>
        <div className="cnt flex-col gap-2">
          <h2>Solution</h2>
          <p>{p.solution}</p>
        </div>
      </div>

      <div className="shots">
        {shots.slice(0, 2).map((src, k) => (
          <ZoomImage
            key={k}
            src={src}
            className="shot"
            alt={`${p.title} image ${k + 1}`}
          />
        ))}
      </div>

      <div className="shots">
        {shots.slice(2).map((src, k) => (
          <ZoomImage
            key={k}
            src={src}
            className={`shot ${k === 0 && shots.slice(2).length % 2 ? "wide" : ""}`}
            alt={`${p.title} image ${k + 3}`}
          />
        ))}
      </div>

      <div className="next">
        <Link href="/#work">All work</Link>
        <Link href={`/work/${next.slug}`}>Next: {next.title} →</Link>
      </div>
    </article>
  );
}
