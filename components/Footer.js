import Link from "next/link";
import { profile } from "@/data/products";
export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="wrap">
        <div className="grid">
          <div>
            <h3>Let&apos;s design something <span className="serif">useful</span> together.</h3>
            <a className="btn" href={`mailto:${profile.email}`}>Say hello</a>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
              <li>{profile.location}</li>
            </ul>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul>
              {profile.links.map((l) => <li key={l.href}><a href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>)}
              <li><a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Available for full-time roles</span>
        </div>
      </div>
    </footer>
  );
}
