const footerLinks = [
  { href: "#pairings", label: "Sample pairings" },
  { href: "#join", label: "Early access" },
  { href: "mailto:hello@yumpair.app", label: "hello@yumpair.app" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07080d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-10 md:grid-cols-[1.2fr_0.8fr] lg:px-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-tomato font-black shadow-glow">
              Y
            </span>
            <span className="text-xl font-black tracking-tight">YumPair</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
            Minimal meal inspiration for effortless dinners, thoughtful drinks,
            and better pairings around every table.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/65 md:justify-end">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} YumPair. Crafted for tasteful nights in.
          </p>
        </div>
      </div>
    </footer>
  );
}
