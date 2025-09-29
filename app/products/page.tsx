export default function Products() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white"
      ></div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold">Contact</h1>
          <p className="mt-2 text-gray-600 max-w-prose">
            Fill in the form and we’ll get back to you within one business day.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl bg-white border border-gray-300 shadow-sm overflow-hidden flex flex-col">
            <div className="h-40 grid place-items-center text-5xl"></div>
            <div className="p-6 flex flex-col gap-3">
              <h2 className="font-semibold text-lg">ACME Toolkit</h2>
              <p className="text-sm text-gray-600">
                An all‑in‑one toolbox for teams that want to move faster.
              </p>
              <div className="mt-1 text-sm">
                € 49 <span className="text-gray-500">/ month</span>
              </div>
              <a
                href="#"
                className="mt-auto inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
              >
                View
              </a>
            </div>
          </article>

          <article className="rounded-2xl bg-white border border-gray-300 shadow-sm overflow-hidden flex flex-col">
            <div className="h-40 grid place-items-center text-5xl">📦</div>
            <div className="p-6 flex flex-col gap-3">
              <h2 className="font-semibold text-lg">ACME Box</h2>
              <p className="text-sm text-gray-600">
                Secure storage and sharing that keeps your flow.
              </p>
              <div className="mt-1 text-sm">
                € 29 <span className="text-gray-500">/ month</span>
              </div>
              <a
                href="#"
                className="mt-auto inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
              >
                View
              </a>
            </div>
          </article>

          <article className="rounded-2xl bg-white border border-gray-300 shadow-sm overflow-hidden flex flex-col">
            <div className="h-40 grid place-items-center text-5xl">🤖</div>
            <div className="p-6 flex flex-col gap-3">
              <h2 className="font-semibold text-lg">ACME Assist</h2>
              <p className="text-sm text-gray-600">
                Smart automation that takes over repetitive tasks.
              </p>
              <div className="mt-1 text-sm">
                € 99 <span className="text-gray-500">/ month</span>
              </div>
              <a
                href="#"
                className="mt-auto inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
              >
                View
              </a>
            </div>
          </article>

          <article className="rounded-2xl bg-white border border-gray-300 shadow-sm overflow-hidden flex flex-col">
            <div className="h-40 grid place-items-center text-5xl">📊</div>
            <div className="p-6 flex flex-col gap-3">
              <h2 className="font-semibold text-lg">ACME Insights</h2>
              <p className="text-sm text-gray-600">
                Dashboards with the right KPIs—no more, no less.
              </p>
              <div className="mt-1 text-sm">
                € 59 <span className="text-gray-500">/ month</span>
              </div>
              <a
                href="#"
                className="mt-auto inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
              >
                View
              </a>
            </div>
          </article>

          <article className="rounded-2xl bg-white border border-gray-300 shadow-sm overflow-hidden flex flex-col">
            <div className="h-40 grid place-items-center text-5xl">🧩</div>
            <div className="p-6 flex flex-col gap-3">
              <h2 className="font-semibold text-lg">ACME Integrations</h2>
              <p className="text-sm text-gray-600">
                Connect your favorite tools with a single click.
              </p>
              <div className="mt-1 text-sm">
                € 39 <span className="text-gray-500">/ month</span>
              </div>
              <a
                href="#"
                className="mt-auto inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
              >
                View
              </a>
            </div>
          </article>

          <article className="rounded-2xl bg-white border border-gray-300 shadow-sm overflow-hidden flex flex-col">
            <div className="h-40 grid place-items-center text-5xl">🛡️</div>
            <div className="p-6 flex flex-col gap-3">
              <h2 className="font-semibold text-lg">ACME Shield</h2>
              <p className="text-sm text-gray-600">
                Security you notice only when needed.
              </p>
              <div className="mt-1 text-sm">
                € 79 <span className="text-gray-500">/ month</span>
              </div>
              <a
                href="#"
                className="mt-auto inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
              >
                View
              </a>
            </div>
          </article>
        </div>
      </main>
    </section>
  );
}
