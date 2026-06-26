const pairings = [
  "Miso mushroom pasta + chilled pinot noir",
  "Smoky tacos + sparkling grapefruit agua fresca",
  "Lemon herb salmon + crisp cucumber spritz",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,90,60,0.28),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(31,122,77,0.18),_transparent_28%)]" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/60 px-5 py-4 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3 text-xl font-black tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-tomato text-white shadow-glow">
              Y
            </span>
            YumPair
          </div>
          <a
            href="#join"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-basil"
          >
            Join waitlist
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-tomato/20 bg-white/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-tomato">
              Pair dinner in seconds
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              The tastiest way to match meals, moods, and drinks.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl">
              YumPair turns what you have, crave, or plan to cook into delightful
              pairings—from weeknight comfort plates to full dinner-party menus.
            </p>
            <div id="join" className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@yumpair.app"
                className="rounded-full bg-tomato px-8 py-4 text-center text-base font-extrabold text-white shadow-glow transition hover:-translate-y-1 hover:bg-[#ef4729]"
              >
                Get early access
              </a>
              <a
                href="#pairings"
                className="rounded-full border border-ink/10 bg-white/70 px-8 py-4 text-center text-base font-extrabold transition hover:-translate-y-1 hover:border-basil/40 hover:text-basil"
              >
                See sample pairings
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-basil/20 blur-2xl" />
            <div className="absolute -right-4 bottom-10 h-36 w-36 rounded-full bg-tomato/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-ink p-6 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
                    Tonight's picks
                  </span>
                  <span className="text-3xl">🍽️</span>
                </div>
                <div className="space-y-4" id="pairings">
                  {pairings.map((pairing, index) => (
                    <div
                      key={pairing}
                      className="rounded-2xl bg-white p-4 text-ink shadow-lg"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-basil">
                        Pairing {index + 1}
                      </p>
                      <p className="mt-2 text-lg font-extrabold">{pairing}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
