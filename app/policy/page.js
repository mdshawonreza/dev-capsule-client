"use client";

import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  const updated = new Date();
  const lastUpdated = updated.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const year = updated.getFullYear();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <Head>
        <title>Privacy Policy | Devcapsule</title>
      </Head>

      <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
        <Navbar />

        {/* Animated Shapes */}
        <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
          <motion.div
            animate={{ y: [0, 35, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-40 h-40 rounded-3xl bg-[#7412FF]/20 blur-xl"
          ></motion.div>

          <motion.div
            animate={{ y: [0, -25, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-60 right-10 w-56 h-56 rounded-full bg-[#7412FF]/10 blur-2xl"
          ></motion.div>

          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 9, repeat: Infinity }}
            className="absolute bottom-10 left-36 w-72 h-72 rounded-full bg-[#7412FF]/5 blur-3xl"
          ></motion.div>
        </div>

        {/* Header */}
        <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center">
              <span className="px-7 py-2 rounded-full text-2xl font-semibold bg-[#7412FF]/10 text-[#7412FF] shadow-md">
                Privacy Policy
              </span>
            </div>

            <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your data.
            </p>
            <p className="mt-2 text-gray-500">Last Updated: {lastUpdated}</p>
          </motion.div>
        </section>

        {/* Content */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7412FF]/5 rotate-45 translate-x-20 -translate-y-20 rounded-3xl pointer-events-none" />

          <div className="prose prose-lg max-w-none text-gray-800 relative z-10">
            <p>
              This Privacy Policy explains how Devcapsule (“we”, “us”, “our”) collects,
              uses, shares, and protects your information when you visit our website or
              use our services including website development, graphics, software solutions,
              mobile apps, video editing, and SEO services.
            </p>

            <h2 className="text-[#7412FF] font-bold">1. Information We Collect</h2>
            <p>We collect information to improve our services and user experience.</p>

            <h3 className="text-[#7412FF] font-semibold">A. Personal Information</h3>
            <ul>
              <li>Name, email address, phone number</li>
              <li>Business or project details</li>
              <li>Billing and payment information</li>
            </ul>

            <h3 className="text-[#7412FF] font-semibold">B. Technical Information</h3>
            <ul>
              <li>IP addresses and location data</li>
              <li>Browser type and device information</li>
              <li>Pages visited and interactions</li>
            </ul>

            <h3 className="text-[#7412FF] font-semibold">C. Files & Project Assets</h3>
            <p>
              When working on your project, you may provide images, text, videos, graphics,
              or brand assets. These remain confidential and are used only for your work.
            </p>

            <h2 className="text-[#7412FF] font-bold">2. How We Use Your Information</h2>
            <ul>
              <li>To deliver requested services</li>
              <li>To improve our website and user experience</li>
              <li>To communicate about projects or support</li>
              <li>For invoicing and transaction records</li>
              <li>To ensure platform security and fraud prevention</li>
            </ul>

            <h2 className="text-[#7412FF] font-bold">3. Sharing & Disclosure</h2>
            <p>We do NOT sell your data. We may share information only with:</p>
            <ul>
              <li>Trusted third-party partners (hosting providers, payment processors)</li>
              <li>Legal authorities if required by law</li>
              <li>Team members involved in your project</li>
            </ul>

            <h2 className="text-[#7412FF] font-bold">4. Data Security</h2>
            <p>
              We take security seriously. Your information is stored securely using
              encrypted systems and industry-standard protections. However, no
              online transmission is 100% secure, and we cannot guarantee absolute protection.
            </p>

            <h2 className="text-[#7412FF] font-bold">5. Cookies & Tracking</h2>
            <p>
              Our website may use cookies to improve functionality, analytics, and user
              experience. You may disable cookies in your browser settings.
            </p>

            <h2 className="text-[#7412FF] font-bold">6. Your Rights</h2>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request corrections or deletions</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data export (where applicable)</li>
            </ul>

            <h2 className="text-[#7412FF] font-bold">7. Third-Party Services</h2>
            <p>
              Our website may include links to third-party tools such as analytics,
              hosting, or social media platforms. Their own privacy policies apply.
            </p>

            <h2 className="text-[#7412FF] font-bold">8. Children’s Privacy</h2>
            <p>We do not knowingly collect data from children under 13.</p>

            <h2 className="text-[#7412FF] font-bold">9. International Users</h2>
            <p>
              Since we serve clients globally, your data may be processed across different
              regions following standard international data protection rules.
            </p>

            <h2 className="text-[#7412FF] font-bold">10. Changes to This Policy</h2>
            <p>
              We may update our policy periodically. The latest version will always appear
              on this page with the updated date.
            </p>

            <h2 className="text-[#7412FF] font-bold">11. Contact Us</h2>
            <p>
              For privacy questions or data concerns, email us at: <br />
              <Link href="mailto:devcapsuleeu@gmail.com" className="text-[#7412FF]">
                devcapsuleeu@gmail.com
              </Link>
            </p>

            <hr className="my-8" />

            <p className="text-center text-sm text-gray-500">
              © Devcapsule {year}. All Rights Reserved.
            </p>
          </div>
        </motion.section>

        <Footer />
      </div>
    </>
  );
}
