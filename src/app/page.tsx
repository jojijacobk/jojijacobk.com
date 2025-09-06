// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Heading from "./Heading";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joji Jacob",
    jobTitle: "Software Development Manager",
    address: {"@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN"},
    url: "https://jojijacob.com",
    email: "mailto:joji.jacob.k@gmail.com",
    sameAs: ["https://linkedin.com/in/jojijacobk", "https://github.com/jojijacobk"],
  };

  return (
    <>
      <main className="grid grid-cols-12 gap-0 min-h-[100dvh] bg-white">
        {/* LEFT PANE */}
        <aside
          className="col-span-12 md:col-span-5 p-8 md:p-12 lg:p-16
                     border-b md:border-b-0 md:border-r border-accent/20 "
        >
          <div className="space-y-6 animate-fadeIn flex flex-col items-center text-center">
            <div
              className="group relative h-44 w-44 md:h-48 md:w-48 rounded-full overflow-hidden ring-2 ring-accent/40 shadow-lg
                         transition-all duration-300 ease-out hover:ring-4 hover:ring-accent/70 hover:shadow-2xl"
            >
              <Image
                src="/avatar.jpg"
                alt="Portrait of Joji Jacob"
                width={256}
                height={256}
                className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                priority
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">Joji Jacob</h1>
              <p className="mt-2 text-[1.2rem] md:text-[1.2rem] text-accent-700">Software engineering leader transforming business vision into scalable, intelligent systems.</p>
            </div>

            {/* Contact links */}
            <div className="pt-2">
              <div className="flex flex-wrap justify-center items-center gap-3">
                <Link
                  href="mailto:joji.jacob.k@gmail.com"
                  className="inline-flex items-center rounded-full border border-accent/30 px-4 py-1.5 text-sm md:text-base
                             hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  Email
                </Link>
                <Link
                  href="https://linkedin.com/in/jojijacobk"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center rounded-full border border-accent/30 px-4 py-1.5 text-sm md:text-base
                             hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/jojijacobk"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center rounded-full border border-accent/30 px-4 py-1.5 text-sm md:text-base
                             hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT PANE */}
        <section className="col-span-12 md:col-span-7 p-8 md:p-12 lg:p-16 space-y-8 w-full">
          {/* Bio (Glassy Card) */}

          <section>
            <div className="relative overflow-hidden rounded-2xl bg-white/55 backdrop-blur-xl p-6 md:p-8 outline outline-1 outline-[#00539F1F] shadow-xl">
              <Heading>Bio</Heading>
              <div className="mt-1 h-px w-12 bg-accent/50" />
              <p className="m-4 text-base md:text-lg leading-relaxed">
                I am a technology leader with 17 years of experience spanning{" "}
                <span className="font-medium">full-stack engineering, enterprise platforms, modern frontend systems, and AI-powered solutions</span> — evolving from engineer to leading high-performing
                teams that deliver systems used by millions.
              </p>
              <p className="m-4 text-base md:text-lg leading-relaxed">
                I focus on <span className="font-medium">turning business vision into engineering reality</span> — actualizing ideas into scalable, innovative, and future-ready platforms. My work has
                generated measurable business impact, reshaped digital experiences, strengthened engineering culture, and raised the hiring bar.
              </p>
            </div>
          </section>

          {/* Vision (Glassy Card) */}

          <section>
            <div className="relative overflow-hidden rounded-2xl bg-white/55 backdrop-blur-xl p-6 md:p-8 outline outline-1 outline-[#00539F1F] shadow-xl">
              <Heading>Vision</Heading>
              <div className="mt-1 h-px w-12 bg-accent/50" />
              <p className="m-4 text-base md:text-lg leading-relaxed">
                I am a technology leader with 17 years of experience spanning{" "}
                <span className="font-medium">full-stack engineering, enterprise platforms, modern frontend systems, and AI-powered solutions</span> — evolving from engineer to leading high-performing
                teams that deliver systems used by millions.
              </p>

              <p className="m-4 text-base md:text-lg leading-relaxed">
                Technology excites me. I see every wave of innovation — from the rise of cloud platforms to today’s breakthroughs in AI and large language models and the technologies of tomorrow — as
                an opportunity to create software products that bring lasting value to people and industries. My vision is to turn breakthrough technologies into platforms that solve real problems at
                scale, improve lives, and accelerate progress for businesses worldwide.
              </p>
            </div>
          </section>
        </section>
      </main>

      {/* JSON-LD for SEO */}
      <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
    </>
  );
}
