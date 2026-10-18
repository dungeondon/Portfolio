const photos = [
  { c: "p1", src: "/images/profile/about-1.jpg", delay: "0s", dur: "6s" },
  { c: "p2", src: "/images/profile/about-2.jpg", delay: "-2s", dur: "7s" },
  {
    c: "p3",
    src: "/images/profile/about-3.jpg",
    delay: "-4s",
    dur: "6.5s",
  },
  {
    c: "p4",
    src: "/images/profile/about-4.jpg",
    delay: "-1s",
    dur: "7.5s",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      {photos.map((p) => (
        <div
          key={p.c}
          aria-hidden="true"
          className={`photo ${p.c} animate-float`}
          style={{
            backgroundImage: `url(${p.src})`,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}
      <span className="tag">Who am I</span>
      <h2>
        A little about <span className="serif">me.</span>
      </h2>
      <div className="txt">
        <p>
          <b>Venkatesh</b> - Creative and detail-oriented UI/UX Designer with{" "}
          <b>4+ years</b> of experience crafting intuitive digital experiences
          across web and mobile platforms. Proven ability to translate user
          needs into elegant design solutions using modern design tools and
          front-end technologies. Strong collaboration with cross-functional
          teams to deliver user-centered products that drive engagement and
          usability.
        </p>
        <p style={{ marginTop: 14 }}>
          My journey into design began with a simple curiosity - how people
          think, feel, and interact with technology. Over time, that curiosity
          evolved into a passion for building products that feel effortless to
          use.
        </p>
      </div>
    </section>
  );
}
