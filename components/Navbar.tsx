const navItems = [
  { href: "#pairings", label: "Pairings" },
  { href: "mailto:hello@yumpair.app", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b10]/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
      >
        <a href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-tomato text-lg font-black text-white shadow-glow transition group-hover:-rotate-6 group-hover:scale-105">
            Y
          </span>
          <span className="text-xl font-black tracking-tight text-white">
            YumPair
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-white/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#join"
          className="rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-extrabold text-ink shadow-[0_18px_50px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-tomato hover:text-white"
        >
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
