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

export default function PrivacyPolicy() {
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
        id: "intro",
        title: "Introduction",
        content: (
          <p>
            This Privacy Policy explains how Devcapsule ("we", "us", "our") collects,
            uses, shares, and protects your information when you visit our website or use
            our services including website development, graphics, software solutions,
            mobile apps, video editing, and SEO services.
          </p>
        ),
      },
      {
        id: "collect",
        title: "1. Information We Collect",
        content: (
          <>
            <p>We collect information to improve our services and user experience.</p>
            <h3 className="mt-4 text-[color:var(--brand)] font-semibold">A. Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number</li>
              <li>Business or project details</li>
              <li>Billing and payment information</li>
            </ul>
            <h3 className="mt-4 text-[color:var(--brand)] font-semibold">B. Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP addresses and location data</li>
              <li>Browser type and device information</li>
              <li>Pages visited and interactions</li>
            </ul>
            <h3 className="mt-4 text-[color:var(--brand)] font-semibold">C. Files & Project Assets</h3>
            <p>
              When working on your project, you may provide images, text, videos, graphics,
              or brand assets. These remain confidential and are used only for your work.
            </p>
          </>
        ),
      },
      {
        id: "use",
        title: "2. How We Use Your Information",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>To deliver requested services</li>
            <li>To improve our website and user experience</li>
            <li>To communicate about projects or support</li>
            <li>For invoicing and transaction records</li>
            <li>To ensure platform security and fraud prevention</li>
          </ul>
        ),
      },
      {
        id: "share",
        title: "3. Sharing & Disclosure",
        content: (
          <>
            <p>We do NOT sell your data. We may share information only with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trusted third-party partners (hosting providers, payment processors)</li>
              <li>Legal authorities if required by law</li>
              <li>Team members involved in your project</li>
            </ul>
          </>
        ),
      },
      {
        id: "security",
        title: "4. Data Security",
        content: (
          <p>
            We take security seriously. Your information is stored securely using encrypted
            systems and industry-standard protections. However, no online transmission is 100%
            secure, and we cannot guarantee absolute protection.
          </p>
        ),
      },
      {
        id: "cookies",
        title: "5. Cookies & Tracking",
        content: (
          <p>
            Our website may use cookies to improve functionality, analytics, and user
            experience. You may disable cookies in your browser settings.
          </p>
        ),
      },
      {
        id: "rights",
        title: "6. Your Rights",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal data</li>
            <li>Request corrections or deletions</li>
            <li>Opt-out of marketing communications</li>
            <li>Request data export (where applicable)</li>
          </ul>
        ),
      },
      {
        id: "third",
        title: "7. Third-Party Services",
        content: (
          <p>
            Our website may include links to third-party tools such as analytics, hosting, or
            social media platforms. Their own privacy policies apply.
          </p>
        ),
      },
      {
        id: "children",
        title: "8. Children’s Privacy",
        content: <p>We do not knowingly collect data from children under 13.</p>,
      },
      {
        id: "international",
        title: "9. International Users",
        content: (
          <p>
            Since we serve clients globally, your data may be processed across different
            regions following standard international data protection rules.
          </p>
        ),
      },
      {
        id: "changes",
        title: "10. Changes to This Policy",
        content: (
          <p>
            We may update our policy periodically. The latest version will always appear on
            this page with the updated date.
          </p>
        ),
      },
      {
        id: "contact",
        title: "11. Contact Us",
        content: (
          <p>
            For privacy questions or data concerns, email us at: <br />
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
        <title>Privacy Policy | Devcapsule</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        className="relative min-h-screen bg-white text-gray-900 antialiased"
        style={{ "--brand": BRAND }}
      >
        {/* Background visuals */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {/* mesh gradient using brand */}
          <div className="absolute inset-x-0 top-[-18%] h-[36rem] bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(116,18,255,0.18),transparent),radial-gradient(1000px_500px_at_80%_10%,rgba(116,18,255,0.10),transparent)]" />
          {/* dotted grid */}
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_1px_1px,rgba(116,18,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
          {/* floating blobs */}
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 35, 0], rotate: [0, 10, 0] }}
            transition={{ duration: prefersReducedMotion ? 0 : 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-4 top-24 h-24 w-24 rounded-2xl bg-[color:var(--brand)]/15 blur-lg sm:left-10 sm:top-28 sm:h-32 sm:w-32 lg:left-20 lg:top-28 lg:h-40 lg:w-40"
          />
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, -25, 0], rotate: [0, -8, 0] }}
            transition={{ duration: prefersReducedMotion ? 0 : 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-4 top-56 h-32 w-32 rounded-full bg-[color:var(--brand)]/10 blur-xl sm:right-10 sm:h-40 sm:w-40 lg:right-20 lg:top-60 lg:h-56 lg:w-56"
          />
        </div>

        <Navbar />

        {/* Header */}
        <section className="px-4 pt-24 pb-10 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mx-auto max-w-7xl text-center">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand)]/30 bg-[color:var(--brand)]/10 px-5 py-2 text-lg font-semibold text-[color:var(--brand)] shadow-sm">
                <Shield className="h-4 w-4" /> Privacy Policy
              </span>
            </div>
            <p className="text-pretty mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
              Your privacy matters to us. Learn how we collect, use, and protect your data.
            </p>
            <p className="mt-2 text-gray-500">Last Updated: {lastUpdated}</p>

            {/* Quick highlights */}
            <div className="mt-8 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3">
              {[
                { icon: <Shield className="h-4 w-4" />, label: "We don't sell data", value: "No ads resale" },
                { icon: <CheckCircle2 className="h-4 w-4" />, label: "GDPR-friendly", value: "Export on request" },
                { icon: <Sparkles className="h-4 w-4" />, label: "Secure storage", value: "Best practices" },
              ].map((item, idx) => (
                <Card key={idx} className="rounded-2xl border-[color:var(--brand)]/15 bg-white/90 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:shadow-lg hover:shadow-[color:var(--brand)]/20">
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

        {/* Content */}
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
              <CardTitle className="text-xl">Policy Details</CardTitle>
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

          {/* Back to top */}
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
