// Add your products here. Put images in /public/images and reference as "/images/file.png".
// Leave `cover` / `images` empty to show placeholders.
export const products = [
  {
    slug: "facebook-feed-redesign",
    title: "Facebook Mobile Feed Redesign",
    tagline: "Old UI vs New UI: a calmer, clearer feed.",
    cover: "/images/work/facebook/1.jpg",
    tint: "#f6f1e3",
    role: "UI/UX Designer",
    timeline: "2 days",
    tools: ["Figma", "FigJam", "Maze"],
    overview:
      "A concept redesign of the Facebook mobile home feed, created for everyday users who scroll, react, and share content throughout the day. The goal was to keep the familiar social experience while making it cleaner, easier to reach with one hand, and more focused on the content people come to see.",
    problem:
      "The current feed feels crowded and heavily segmented. Navigation icons sit along the top row, which is hard to reach on today's tall phones. Story icons are small circles with thin borders, media looks separated from the post text, and standard fonts with small, less distinctive icons make actions like, comment, and share easy to overlook. Heavy use of lines and background blocks to divide sections adds visual noise and makes scrolling tiring.",
    solution:
      "I moved the primary navigation to a bottom bar with a prominent create button, improving ergonomics and speeding up movement between sections. Stories became larger, richer cards that draw attention without clutter. Posts now blend media seamlessly into the layout, often edge-to-edge, with bolder like, comment, and share icons and clearly displayed counts. By removing unnecessary dividers and backgrounds, the new design reduces visual noise and creates a more relaxing, content-first experience.",
    images: ["/images/work/facebook/cover.jpg", "/images/work/facebook/1.jpg"],
  },
  {
    slug: "green-all",
    title: "Green All: Plant Marketplace App",
    tagline: "Find plants that match your space, light, and style.",
    cover: "/images/work/green-all/cover.jpg",
    tint: "#cfe3ef",
    role: "Product Designer",
    timeline: "2 weeks",
    tools: ["Figma", "Notion"],
    overview:
      "Green All is a mobile marketplace for plant enthusiasts and anyone bringing more nature into their home. It connects buyers with trusted local sellers and helps them choose plants that suit their space, lighting, and level of experience.",
    problem:
      "Buying plants online is overwhelming. Listings lack care details, search filters ignore real-life conditions like sunlight and pet safety, and beginners often end up with plants that don't survive. Interviews with six plant owners showed that people wanted guidance, not just a long catalogue.",
    solution:
      "I designed a discovery-first experience with a short style and space quiz, curated collections, and filters for light, difficulty, and pet-friendliness. Each product page includes a clear care summary, seller ratings, and a simple checkout. A soft green palette, rounded cards, and large photography keep the interface calm and inviting, so users can browse and buy with confidence.",
    images: [
      "/images/work/green-all/1.jpg",
      "/images/work/green-all/2.jpg",
      "/images/work/green-all/3.jpg",
      "/images/work/green-all/4.jpg",
      "/images/work/green-all/5.jpg",
      "/images/work/green-all/6.jpg",
    ],
  },
  {
    slug: "coastal-website-branding",
    title: "Coastal Stays: Website Design & Branding",
    tagline: "A brand and website built around slow, quiet travel.",
    cover: "/images/work/website/cover.jpg",
    tint: "#f1c9bd",
    role: "Brand & UI/UX Designer",
    timeline: "6 weeks",
    tools: ["Figma", "Framer", "Illustrator"],
    overview:
      "A complete brand identity and responsive website for a boutique coastal travel company that curates peaceful beachside stays. The project covered logo, colour, typography, tone of voice, and a marketing site designed to convert visitors into enquiries.",
    problem:
      "The client's brand felt generic and blended in with larger booking platforms. Their website was cluttered, slow on mobile, and failed to communicate the calm, personal experience they offered, which led to high bounce rates and few direct bookings.",
    solution:
      "I developed a warm, sand-and-sea visual identity with a refined serif and clean sans-serif pairing, then translated it into a lightweight, mobile-first website. Full-bleed photography, a simple stay finder, clear pricing, and a streamlined enquiry flow make it easy to explore and book. A concise brand guide ensures the identity stays consistent across web, social, and print.",
    images: ["/images/work/website/1.jpg", "/images/work/website/2.jpg"],
  },
  // {
  //   slug: "fresh-bite-food-app",
  //   title: "FreshBite: Food Ordering & Delivery App",
  //   tagline: "From craving to doorstep in three taps.",
  //   cover: "/images/work/food-app/cover.jpg",
  //   tint: "#fbe3b8",
  //   role: "UI/UX Designer",
  //   timeline: "5 weeks",
  //   tools: ["Figma", "FigJam", "ProtoPie"],
  //   overview:
  //     "FreshBite is a food ordering and delivery app for busy urban professionals who want quick, reliable meals from nearby restaurants. The design focuses on speed, transparency, and a delightful ordering experience from search to doorstep.",
  //   problem:
  //     "Users reported that existing food apps feel noisy: promotions crowd the screen, delivery times are unreliable, and reordering a favourite meal takes too many steps. Survey responses from 40 frequent users highlighted decision fatigue and unclear fees at checkout as the biggest frustrations.",
  //   solution:
  //     "I designed a clean home feed with personalised picks and a one-tap 'Reorder' shortcut. Smart filters (diet, budget, delivery time) reduce choice overload, while upfront pricing removes checkout surprises. A live order tracker with accurate ETAs keeps users informed. The warm, appetising palette and bold food photography make browsing enjoyable, and usability testing showed a significant drop in the number of taps needed to place an order.",
  //   images: [
  //     "/images/work/food-app/1.jpg",
  //     "/images/work/food-app/2.jpg",
  //     "/images/work/food-app/3.jpg",
  //     "/images/work/food-app/4.jpg",
  //   ],
  // },
  {
    slug: "finlytics-finance-dashboard",
    title: "Finlytics: Personal Finance Dashboard",
    tagline: "See where your money goes and where it can grow.",
    cover: "/images/work/finlytics/cover.jpg",
    tint: "#d9e4f7",
    role: "Product Designer",
    timeline: "7 weeks",
    tools: ["Figma", "FigJam", "Notion"],
    overview:
      "Finlytics is a web dashboard that helps individuals track spending, manage budgets, and monitor savings goals in one place. It is designed for young professionals who want clarity over their finances without the complexity of traditional banking tools.",
    problem:
      "People juggle multiple accounts, cards, and subscriptions, but most finance tools overwhelm them with raw numbers and offer little insight. Research interviews revealed that users abandoned budgeting apps because they felt confusing, time-consuming, and judgmental.",
    solution:
      "I created a modular dashboard with a clear net-worth overview, categorised spending charts, recurring-payment alerts, and goal tracking with progress indicators. Plain-language insights, such as 'You spent 18% less on dining this month', turn data into action. A restrained colour system, accessible data visualisations, and a responsive layout with light and dark modes keep the experience clear and trustworthy.",
    images: ["/images/work/finlytics/1.jpg", "/images/work/finlytics/2.jpg"],
  },
  // {
  //   slug: "smilecare-dental-clinic",
  //   title: "SmileCare: Dental Clinic Website",
  //   tagline: "A friendly website that turns visits into appointments.",
  //   cover: "/images/work/dental-clinic/cover.jpg",
  //   tint: "#dff3ee",
  //   role: "UI/UX & Web Designer",
  //   timeline: "4 weeks",
  //   tools: ["Figma", "Webflow"],
  //   overview:
  //     "A modern, responsive website for a multi-specialty dental clinic serving families and working professionals. The site introduces the clinic's doctors and treatments, builds patient trust, and makes booking an appointment effortless.",
  //   problem:
  //     "The clinic relied on word of mouth and an outdated website that lacked clear service information, patient reviews, and an online booking option. Most enquiries came through phone calls, which led to missed appointments and a poor first impression, especially on mobile.",
  //   solution:
  //     "I designed a clean, reassuring interface in calming teal and white tones, with dedicated pages for treatments, doctor profiles, before-and-after results, and FAQs. A sticky 'Book Appointment' button, a simple booking form with WhatsApp integration, and local SEO-ready structure help convert visitors into patients. The mobile-first layout loads quickly and meets accessibility best practices.",
  //   images: [
  //     "/images/work/dental-clinic/1.jpg",
  //     "/images/work/dental-clinic/2.jpg",
  //     "/images/work/dental-clinic/3.jpg",
  //   ],
  // },
];
export const getProduct = (slug) => products.find((p) => p.slug === slug);

export const profile = {
  name: "Venkatesh Kesanakurthi",
  email: "iamvenkateshkvs@gmail.com",
  phone: "+91 86862 34530",
  location: "Hyderabad, India",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/venkatesh-kvs/" },
    { label: "Behance", href: "https://www.behance.net/venkateshkvs" },
    { label: "Dribbble", href: "https://dribbble.com/VenkateshKVS" },
  ],
};
