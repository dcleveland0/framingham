
import React, { useMemo, useState } from "react";
import { Calendar, Newspaper, Users, Building2, MessageSquare, MapPin, Link as LinkIcon, Phone, Mail, Search } from "lucide-react";

const TABS = [
  { id: "home", label: "Home" },
  { id: "news", label: "News" },
  { id: "events", label: "Events" },
  { id: "directory", label: "Business Directory" },
  { id: "community", label: "Community" },
  { id: "resources", label: "Resources" },
  { id: "about", label: "About / Contact" },
];

const newsLinks = [
  {
    title: "City of Framingham — News Center",
    href: "https://www.framinghamma.gov/CivicAlerts.aspx",
    blurb: "Official press releases, alerts, and city updates.",
    source: "framinghamma.gov",
  },
  {
    title: "Framingham SOURCE",
    href: "https://framinghamsource.com/",
    blurb: "Independent community news and bulletins.",
    source: "framinghamsource.com",
  },
  {
    title: "Access Framingham — The Frame News",
    href: "https://www.accessfram.tv/",
    blurb: "Community media hub: TV, podcasts, and local news.",
    source: "accessfram.tv",
  },
  {
    title: "MetroWest Daily News",
    href: "https://x.com/metrowestdaily",
    blurb: "Regional reporting for MetroWest (Framingham-based).",
    source: "metrowestdaily (X)",
  },
];

const eventLinks = [
  {
    title: "City Calendar — Framingham",
    href: "https://www.framinghamma.gov/Calendar.aspx",
    blurb: "City meetings, public events, and civic activities.",
  },
  {
    title: "Choose Framingham — Events",
    href: "https://www.chooseframingham.com/96/Events",
    blurb: "What’s happening around town, curated by economic development.",
  },
  {
    title: "Framingham Events (community calendar)",
    href: "https://www.framinghamevents.com/",
    blurb: "Independent round‑up of local happenings.",
  },
  {
    title: "Eventbrite — Framingham, MA",
    href: "https://www.eventbrite.com/d/ma--framingham/events/",
    blurb: "Workshops, festivals, and ticketed events.",
  },
];

const directoryLinks = [
  {
    title: "MetroWest Chamber of Commerce — Business Directory",
    href: "https://business.metrowest.org/list",
    blurb: "Browse members across Framingham and MetroWest.",
  },
  {
    title: "MetroWest Chamber of Commerce — Homepage",
    href: "https://www.metrowest.org/",
    blurb: "Membership, networking, and business resources.",
  },
];

const resourceLinks = [
  {
    title: "Report Non‑Emergency Issues (SeeClickFix)",
    href: "https://www.framinghamma.gov/1868/Report-Non-Emergency-Issues",
    blurb: "Submit potholes, streetlights, trash, tree issues and more.",
  },
  {
    title: "Open a New Request (Portal)",
    href: "https://seeclickfix.com/web_portal/rm2o8jmNcSjrGgu36BsPPV6K/report",
    blurb: "Direct link to the request form with 20+ categories.",
  },
  {
    title: "Framingham Library — Emergency Contacts",
    href: "https://framinghamlibrary.org/find-online/finding-your-way/finding-your-way-emergency-services",
    blurb: "Fire & police contact info; always dial 911 for emergencies.",
  },
  {
    title: "Access Framingham (AF‑TV)",
    href: "https://www.accessfram.tv/",
    blurb: "Community TV, live stream, and production resources.",
  },
];

const samplePosts = [
  {
    title: "Welcome to Framingham.biz!",
    excerpt:
      "Your neighbor‑run hub for local news, events, small businesses, and civic engagement — all in one place.",
  },
  {
    title: "How to list your business",
    excerpt:
      "Submit your shop, service, or nonprofit. Free basic listings during launch week.",
  },
  {
    title: "Get involved",
    excerpt:
      "Join discussions, report issues to the city, and volunteer with local orgs.",
  },
];

function Pill({ children }) {
  return (
    <span className="inline-block rounded-full border px-3 py-1 text-xs font-medium text-gray-700">
      {children}
    </span>
  );
}

function Card({ icon: Icon, title, blurb, href, badge }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl border p-2"><Icon className="h-5 w-5" /></div>
        <div className="flex-1">
          <h3 className="text-base font-semibold group-hover:underline">{title}</h3>
          {blurb && <p className="mt-1 text-sm text-gray-600">{blurb}</p>}
          {badge && (
            <div className="mt-3"><Pill>{badge}</Pill></div>
          )}
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <LinkIcon className="h-4 w-4" />
            <span className="truncate">{href}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function Header({ active, setActive }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="rounded-2xl bg-black px-3 py-1 text-xs font-semibold text-white">BIZ</span>
          <a href="#home" onClick={(e)=>{e.preventDefault();setActive("home");}} className="text-xl font-bold">Framingham.biz</a>
        </div>
        <nav className="hidden gap-2 md:flex">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === t.id
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border px-3 py-1 md:flex">
            <Search className="h-4 w-4" />
            <input
              placeholder="Search (coming soon)"
              className="w-48 border-0 p-0 text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Framingham’s community hub for <span className="underline decoration-black decoration-4 underline-offset-4">news</span>,
            <br className="hidden md:block" /> small businesses & neighbors.
          </h1>
          <p className="mt-4 text-gray-600">
            Discover what’s happening around town, support local shops, and plug into city resources — all in one clean, ad‑light place.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Pill>Local News</Pill>
            <Pill>Events</Pill>
            <Pill>Business Listings</Pill>
            <Pill>Civic Tools</Pill>
          </div>
        </div>
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {samplePosts.map((p) => (
              <div key={p.title} className="rounded-2xl border p-4">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold"><Newspaper className="h-5 w-5"/> Quick News Links</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {newsLinks.map((n) => (
            <Card key={n.href} icon={Newspaper} title={n.title} blurb={n.blurb} href={n.href} badge={n.source} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold"><Calendar className="h-5 w-5"/> Upcoming & Ongoing</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {eventLinks.map((e) => (
            <Card key={e.href} icon={Calendar} title={e.title} blurb={e.blurb} href={e.href} />
          ))}
        </div>
      </section>
    </div>
  );
}

function News() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-center gap-2">
        <Newspaper className="h-5 w-5" />
        <h2 className="text-2xl font-bold">Local News</h2>
      </div>
      <p className="mb-6 text-gray-600">
        We aggregate headlines from trusted local outlets. Click through to read at the source. Have a tip? Share it in the Community tab.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {newsLinks.map((n) => (
          <Card key={n.href} icon={Newspaper} title={n.title} blurb={n.blurb} href={n.href} badge={n.source} />
        ))}
      </div>
      <div className="mt-10 rounded-2xl border p-5">
        <h3 className="text-lg font-semibold">Want automatic feeds?</h3>
        <p className="mt-1 text-sm text-gray-600">
          Plug in RSS from these sources or your CMS. For production, use a small server proxy for CORS (e.g., Cloudflare Worker) to fetch and parse RSS → JSON.
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
          <li>City News RSS (CivicEngage endpoints)</li>
          <li>Framingham SOURCE (typical CMS feeds)</li>
          <li>Access Framingham updates</li>
        </ul>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-center gap-2">
        <Calendar className="h-5 w-5" />
        <h2 className="text-2xl font-bold">Events</h2>
      </div>
      <p className="mb-6 text-gray-600">
        Find festivals, city meetings, school events, and more across Framingham and MetroWest.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {eventLinks.map((e) => (
          <Card key={e.href} icon={Calendar} title={e.title} blurb={e.blurb} href={e.href} />
        ))}
      </div>
    </div>
  );
}

function Directory() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-center gap-2">
        <Building2 className="h-5 w-5" />
        <h2 className="text-2xl font-bold">Business Directory</h2>
      </div>
      <p className="mb-6 text-gray-600">
        Support your neighbors. Explore the Chamber’s member directory and submit your own listing.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {directoryLinks.map((d) => (
          <Card key={d.href} icon={Building2} title={d.title} blurb={d.blurb} href={d.href} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border p-5">
        <h3 className="text-lg font-semibold">Submit your listing</h3>
        <p className="mt-1 text-sm text-gray-600">
          For launch, email us your business name, category, address, and website. We’ll add a free basic listing.
        </p>
        <div className="mt-3 flex items-center gap-3 text-sm">
          <Mail className="h-4 w-4" />
          <a className="underline" href="mailto:hello@framingham.biz">hello@framingham.biz</a>
        </div>
      </div>
    </div>
  );
}

function Community() {
  const items = [
    {
      icon: Users,
      title: "Join the conversation (forums)",
      blurb: "Neighborhood Q&A, recommendations, lost & found. (MVP placeholder)",
      href: "#",
    },
    {
      icon: MessageSquare,
      title: "Report a non‑emergency issue",
      blurb: "Potholes, streetlights, trash & more via SeeClickFix.",
      href: "https://www.framinghamma.gov/1868/Report-Non-Emergency-Issues",
    },
    {
      icon: Newspaper,
      title: "Share a news tip",
      blurb: "Send a tip to local outlets and Access Framingham.",
      href: "https://www.accessfram.tv/",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-center gap-2">
        <Users className="h-5 w-5" />
        <h2 className="text-2xl font-bold">Community</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <Card key={i.title} icon={i.icon} title={i.title} blurb={i.blurb} href={i.href} />
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-5">
          <h3 className="text-lg font-semibold">Neighborhood Poll (sample)</h3>
          <p className="mt-1 text-sm text-gray-600">What should we spotlight next?</p>
          <form className="mt-3 space-y-2 text-sm">
            {[
              "Small business spotlight",
              "Youth sports & schools",
              "Civic how‑to guides",
              "Arts & culture",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="radio" name="poll" className="h-4 w-4" />
                <span>{opt}</span>
              </label>
            ))}
            <button type="button" className="mt-3 rounded-full bg-black px-4 py-2 text-white">Vote</button>
          </form>
        </div>
        <div className="rounded-2xl border p-5">
          <h3 className="text-lg font-semibold">Volunteer / Get Help</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
            <li>Join Access Framingham as a member/volunteer</li>
            <li>Mentor a local student or sponsor an event</li>
            <li>Organize a neighborhood cleanup</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-center gap-2">
        <MapPin className="h-5 w-5" />
        <h2 className="text-2xl font-bold">City & Civic Resources</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resourceLinks.map((r) => (
          <Card key={r.href} icon={MapPin} title={r.title} blurb={r.blurb} href={r.href} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border p-5 text-sm text-gray-700">
        <p>
          <strong>Emergencies:</strong> Call <span className="font-semibold">911</span>.
        </p>
        <p className="mt-2">Framingham Police (non‑emergency): 508‑872‑1212 · Framingham Fire: 508‑532‑5930</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h2 className="mb-2 text-2xl font-bold">About Framingham.biz</h2>
      <p className="text-gray-700">
        Built by neighbors for neighbors. Framingham.biz is a clean, community‑run starting point: find city news, discover local events, and support small businesses.
      </p>
      <div className="mt-6 rounded-2xl border p-5">
        <h3 className="text-lg font-semibold">Contact</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4"/><a className="underline" href="mailto:hello@framingham.biz">hello@framingham.biz</a></div>
          <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4"/><span>(508) 555‑0199</span></div>
        </div>
        <p className="mt-3 text-sm text-gray-600">Have a correction or want to contribute? Email us with your idea.</p>
      </div>
      <div className="mt-6 rounded-2xl border p-5 text-sm text-gray-600">
        <p>Disclaimer: We link out to third‑party sites for news and events. Content and availability are controlled by those sites.</p>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("home");
  const Page = useMemo(() => {
    switch (active) {
      case "news":
        return <News />;
      case "events":
        return <Events />;
      case "directory":
        return <Directory />;
      case "community":
        return <Community />;
      case "resources":
        return <Resources />;
      case "about":
        return <About />;
      default:
        return <Home />;
    }
  }, [active]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header active={active} setActive={setActive} />
      {Page}
      <footer className="mt-12 border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm md:flex-row">
          <p>© {new Date().getFullYear()} Framingham.biz · Built with ❤️ in Massachusetts</p>
          <div className="flex flex-wrap items-center gap-3">
            <a className="underline" href="https://www.framinghamma.gov/CivicAlerts.aspx" target="_blank" rel="noreferrer">City News</a>
            <a className="underline" href="https://www.framinghamsource.com/" target="_blank" rel="noreferrer">Framingham SOURCE</a>
            <a className="underline" href="https://www.accessfram.tv/" target="_blank" rel="noreferrer">Access Framingham</a>
            <a className="underline" href="https://business.metrowest.org/list" target="_blank" rel="noreferrer">Chamber Directory</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
