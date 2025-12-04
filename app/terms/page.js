"use client";

import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronUp,
  Anchor,
} from "lucide-react";

export default function Terms() {
  const BRAND = "#7412FF"; // your brand color

  const updated = new Date();
  const lastUpdated = updated.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const year = updated.getFullYear();

  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" },
    },
  };

  const sections = useMemo(
    () => [
      {
        id: "about",
        title: "1. About Devcapsule",
        content: (
          <p>
            Devcapsule is a global digital agency offering website development,
            software solutions, graphics design, SEO, video editing, mobile apps,
            cloud solutions, and consulting services.
          </p>
        ),
      },
      {
        id: "eligibility",
        title: "2. Eligibility & Usage Rules",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be 18+ to work with us.</li>
            <li>No misuse, illegal usage, reselling, or abuse of our services.</li>
            <li>Respect copyrights and intellectual property rights.</li>
          </ul>
        ),
      },
      {
        id: "availability",
        title: "3. Global Service Availability",
        content: (
          <p>
            We proudly serve clients worldwide. You are responsible for following your
            local laws regarding digital services, business operations, and taxes.
          </p>
        ),
      },
      {
        id: "payments",
        title: "4. Payments, Deposits & Refunds",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>30–50% upfront deposit required.</li>
            <li>Deposits are non-refundable once work begins.</li>
            <li>Final payment is required before handover of files/source code.</li>
            <li>Late payments may pause or terminate project work.</li>
            <li>Refunds only apply when no work has started.</li>
          </ul>
        ),
      },
      {
        id: "timelines",
        title: "5. Timelines & Revisions",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Timeline depends on your response speed and approvals.</li>
            <li>Standard packages include limited revisions.</li>
            <li>Extra revisions or feature requests require additional payment.</li>
          </ul>
        ),
      },
      {
        id: "responsibilities",
        title: "6. Client Responsibilities",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate content, brand material, and access credentials.</li>
            <li>Ensure you have rights to submitted images, text, or files.</li>
            <li>Maintain timely communication to avoid delays.</li>
          </ul>
        ),
      },
      {
        id: "ip",
        title: "7. Intellectual Property",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>We keep rights to our internal tools, processes, and frameworks.</li>
            <li>After final payment, you receive usage rights to the final deliverables.</li>
            <li>Source code ownership depends on your contract or selected package.</li>
          </ul>
        ),
      },
      {
        id: "portfolio",
        title: "8. Portfolio Display",
        content: (
          <p>
            We may showcase your project in our portfolio unless an NDA is agreed upon
            before starting the project.
          </p>
        ),
      },
      {
        id: "seo",
        title: "9. SEO & Ranking Disclaimer",
        content: (
          <>
            <p>SEO results vary. We do NOT guarantee:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>#1 Google ranking</li>
              <li>Instant website traffic</li>
              <li>Guaranteed SEO results</li>
            </ul>
          </>
        ),
      },
      {
        id: "warranty",
        title: "10. Warranty & Support",
        content: (
          <>
            <p>We provide 15–30 days of free post-launch bug support.</p>
            <p>Support does not cover:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Client-side changes that break functionality</li>
              <li>Hosting, domain, or third-party issues</li>
              <li>Plugin/theme conflicts</li>
            </ul>
          </>
        ),
      },
      {
        id: "maintenance",
        title: "11. Maintenance Plans",
        content: (
          <p>
            Monthly maintenance plans (optional) cover updates, monitoring, backups,
            and troubleshooting. Without a plan, all fixes are billed separately.
          </p>
        ),
      },
      {
        id: "liability",
        title: "12. Liability Limitation",
        content: (
          <>
            <p>Devcapsule is not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Loss of revenue or profits</li>
              <li>Downtime caused by third-party services</li>
              <li>Security breaches caused by client negligence</li>
            </ul>
          </>
        ),
      },
      {
        id: "termination",
        title: "13. Termination",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>We may terminate service for non-payment or violation of terms.</li>
            <li>Unpaid work remains property of Devcapsule.</li>
          </ul>
        ),
      },
      {
        id: "law",
        title: "14. Governing Law",
        content: (
          <p>
            These Terms are governed by international digital service standards and
            applicable local laws where relevant.
          </p>
        ),
      },
      {
        id: "updates",
        title: "15. Updates to Terms",
        content: (
          <p>
            We may revise these Terms periodically. Continued use indicates agreement
            with updated Terms.
          </p>
        ),
      },
      {
        id: "contact",
        title: "16. Contact",
        content: (
          <p>
            For questions, email:
            <br />
            <Link href="mailto:devcapsuleeu@gmail.com" className="text-[color:var(--brand)] hover:underline">
              devcapsuleeu@gmail.com
            </Link>
          </p>
        ),
      },
    ],
    []
  );

  // Scrollspy
  const [activeId, setActiveId] = useState(sections[0].id);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <Head>
        <title>Terms &amp; Conditions | Devcapsule</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        className="relative min-h-screen bg-white text-gray-900 antialiased"
        style={{ "--brand": BRAND }}
      >
        {/* Responsive Background – ultra light for performance */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {/* subtle mesh gradient */}
          <div className="absolute inset-x-0 top-[-18%] h-[36rem] bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(116,18,255,0.18),transparent),radial-gradient(1000px_500px_at_80%_10%,rgba(116,18,255,0.10),transparent)]" />
          {/* dotted grid */}
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_1px_1px,rgba(116,18,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
          {/* floating accents */}
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 40, 0], rotate: [0, 10, 0] }}
            transition={{ duration: prefersReducedMotion ? 0 : 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-4 top-24 h-24 w-24 rounded-2xl bg-[color:var(--brand)]/15 blur-lg sm:left-10 sm:top-28 sm:h-32 sm:w-32 lg:left-20 lg:top-28 lg:h-40 lg:w-40"
          />
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, -30, 0], rotate: [0, -8, 0] }}
            transition={{ duration: prefersReducedMotion ? 0 : 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-4 top-56 h-32 w-32 rounded-full bg-[color:var(--brand)]/10 blur-xl sm:right-10 sm:h-40 sm:w-40 lg:right-20 lg:top-60 lg:h-56 lg:w-56"
          />
        </div>

        <Navbar />

        {/* Hero */}
        <section className="px-4 pt-24 pb-10 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand)]/30 bg-[color:var(--brand)]/10 px-4 py-1.5 text-[color:var(--brand)] shadow-sm">
                <Shield className="h-4 w-4" /> Terms &amp; Conditions
              </span>
              <h1 className="text-balance bg-gradient-to-r from-[color:var(--brand)] to-[#A780FF] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl">
                Transparent policies for lasting partnerships
              </h1>
              <p className="text-pretty max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                Clear guidelines that shape our work, values, and client relationships.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Clock className="h-4 w-4" /> Last updated: {lastUpdated}
              </div>
            </div>

            {/* Quick stats – ultra responsive */}
            <div className="mt-8 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3">
              {[
                { icon: <Shield className="h-4 w-4" />, label: "Privacy-aware", value: "NDA on request" },
                { icon: <CheckCircle2 className="h-4 w-4" />, label: "Refund policy", value: "Before work starts" },
                { icon: <Sparkles className="h-4 w-4" />, label: "Support window", value: "15–30 days" },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="rounded-2xl border-[color:var(--brand)]/15 bg-white/90 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:shadow-lg hover:shadow-[color:var(--brand)]/20"
                >
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      {item.icon}
                      <span className="text-sm sm:text-base">{item.label}</span>
                    </div>
                    <span className="text-sm font-medium sm:text-base">{item.value}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Content + TOC layout */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-24 sm:px-6 lg:grid-cols-[300px_1fr] lg:px-8"
        >
          {/* Desktop TOC */}
          <aside className="hidden lg:block">
            <Card className="sticky top-24 max-h-[70vh] overflow-auto rounded-2xl border-[color:var(--brand)]/15 bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-base">On this page</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`group block rounded-lg px-2 py-2 text-sm transition ${
                      activeId === s.id
                        ? "bg-[color:var(--brand)]/10 text-[color:var(--brand)] ring-1 ring-[color:var(--brand)]/20"
                        : "text-gray-600 hover:bg-[color:var(--brand)]/5 hover:text-[color:var(--brand)]"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2"><Anchor className="h-4 w-4 opacity-70" />{s.title}</span>
                  </a>
                ))}
              </CardContent>
            </Card>
          </aside>

          {/* Main content card */}
          <Card className="relative rounded-3xl border-[color:var(--brand)]/15 bg-white/90 shadow-sm ring-1 ring-black/5 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Terms Overview</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Mobile accordion */}
              <div className="lg:hidden">
                <Accordion type="single" collapsible className="w-full">
                  {sections.map((s) => (
                    <AccordionItem key={s.id} value={s.id}>
                      <AccordionTrigger className="text-left data-[state=open]:text-[color:var(--brand)]">
                        {s.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">{s.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Desktop rich content */}
              <div className="prose prose-gray max-w-none text-gray-800 hidden lg:prose-lg lg:block">
                {sections.map((s, i) => (
                  <section id={s.id} key={s.id} className="scroll-mt-28">
                    <h2 className="relative mb-4 inline-flex items-center gap-2 text-[color:var(--brand)]">
                      <span className="absolute -left-6 top-2 h-2 w-2 rounded-full bg-[color:var(--brand)]/60" />
                      {s.title}
                    </h2>
                    {s.content}
                    {i !== sections.length - 1 && <Separator className="my-8" />}
                  </section>
                ))}

                <p className="mt-10 text-center text-sm text-gray-500">© Devcapsule {year}. All Rights Reserved.</p>
              </div>
            </CardContent>
          </Card>

          {/* Back to top – responsive touch target */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
            className="fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6"
          >
            <Button
              size="icon"
              variant="secondary"
              className="h-11 w-11 rounded-full border border-[color:var(--brand)]/20 bg-white/90 shadow-lg backdrop-blur hover:shadow-[color:var(--brand)]/30"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.section>

        <Footer />
      </div>
    </>
  );
}
