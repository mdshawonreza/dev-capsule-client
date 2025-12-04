"use client";

import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Terms() {
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
        <title>Terms & Conditions | Devcapsule</title>
      </Head>

      <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
        <Navbar />

        {/* Animated Shapes */}
        <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
          <motion.div
            animate={{ y: [0, 40, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-40 h-40 rounded-3xl bg-[#7412FF]/20 blur-xl"
          ></motion.div>

          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-60 right-10 w-56 h-56 rounded-full bg-[#7412FF]/10 blur-2xl"
          ></motion.div>

          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-10 left-36 w-72 h-72 rounded-full bg-[#7412FF]/5 blur-3xl"
          ></motion.div>
        </div>

        {/* Hero Section */}
        <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center">
              <span className="px-7 py-2 rounded-full text-2xl font-semibold bg-[#7412FF]/10 text-[#7412FF] shadow-md">
                Terms & Conditions
              </span>
            </div>

            <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Transparent guidelines that shape our work, values, and client relationships.
            </p>
            <p className="mt-2 text-gray-500">Last Updated: {lastUpdated}</p>
          </motion.div>
        </section>

        {/* Content Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative angled shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7412FF]/5 rotate-45 translate-x-20 -translate-y-20 rounded-3xl pointer-events-none" />

          <div className="prose prose-lg max-w-none text-gray-800 relative z-10">
            <h2 className="text-[#7412FF] font-bold">1. About Devcapsule</h2>
            <p>
              Devcapsule is a global digital agency offering website development,
              software solutions, graphics design, SEO, video editing, mobile
              apps, cloud solutions, and consulting services.
            </p>

            <h2 className="text-[#7412FF] font-bold">2. Eligibility & Usage Rules</h2>
            <ul>
              <li>You must be 18+ to work with us.</li>
              <li>No misuse, illegal usage, reselling, or abuse of our services.</li>
              <li>Respect copyrights and intellectual property rights.</li>
            </ul>

            <h2 className="text-[#7412FF] font-bold">3. Global Service Availability</h2>
            <p>
              We proudly serve clients worldwide. You are responsible for following
              your local laws regarding digital services, business operations, and taxes.
            </p>

            <h2 className="text-[#7412FF] font-bold">4. Payments, Deposits & Refunds</h2>
            <ul>
              <li>30–50% upfront deposit required.</li>
              <li>Deposits are non-refundable once work begins.</li>
              <li>Final payment is required before handover of files/source code.</li>
              <li>Late payments may pause or terminate project work.</li>
              <li>Refunds only apply when no work has started.</li>
            </ul>

            <h2 className="text-[#7412FF] font-bold">5. Timelines & Revisions</h2>
            <ul>
              <li>Timeline depends on your response speed and approvals.</li>
              <li>Standard packages include limited revisions.</li>
              <li>Extra revisions or feature requests require additional payment.</li>
            </ul>

            <h2 className="text-[#7412FF] font-bold">6. Client Responsibilities</h2>
            <ul>
              <li>Provide accurate content, brand material, and access credentials.</li>
              <li>Ensure you have rights to submitted images, text, or files.</li>
              <li>Maintain timely communication to avoid delays.</li>
            </ul>

            <h2 className="text-[#7412FF] font-bold">7. Intellectual Property</h2>
            <ul>
              <li>We keep rights to our internal tools, processes, and frameworks.</li>
              <li>
                After final payment, you receive usage rights to the final deliverables.
              </li>
              <li>
                Source code ownership depends on your contract or selected package.
              </li>
            </ul>

            <h2 className="text-[#7412FF] font-bold">8. Portfolio Display</h2>
            <p>
              We may showcase your project in our portfolio unless an NDA is agreed upon
              before starting the project.
            </p>

            <h2 className="text-[#7412FF] font-bold">9. SEO & Ranking Disclaimer</h2>
            <p>
              SEO results vary. We do NOT guarantee:
            </p>
            <ul>
              <li>#1 Google ranking</li>
              <li>Instant website traffic</li>
              <li>Guaranteed SEO results</li>
            </ul>

            <h2 className="text-[#7412FF] font-bold">10. Warranty & Support</h2>
            <p>We provide 15–30 days of free post-launch bug support.</p>
            <p>Support does not cover:</p>
            <ul>
              <li>Client-side changes that break functionality</li>
              <li>Hosting, domain, or third-party issues</li>
              <li>Plugin/theme conflicts</li>
            </ul>

            <h2 className="text-[#7412FF] font-bold">11. Maintenance Plans</h2>
            <p>
              Monthly maintenance plans (optional) cover updates, monitoring, backups,
              and troubleshooting. Without a plan, all fixes are billed separately.
            </p>

            <h2 className="text-[#7412FF] font-bold">12. Liability Limitation</h2>
            <p>Devcapsule is not responsible for:</p>
            <ul>
              <li>Loss of revenue or profits</li>
              <li>Downtime caused by third-party services</li>
              <li>Security breaches caused by client negligence</li>
            </ul>

            <h2 className="text-[#7412FF] font-bold">13. Termination</h2>
            <ul>
              <li>We may terminate service for non-payment or violation of terms.</li>
              <li>Unpaid work remains property of Devcapsule.</li>
            </ul>

            <h2 className="text-[#7412FF] font-bold">14. Governing Law</h2>
            <p>
              These Terms are governed by international digital service standards and
              applicable local laws where relevant.
            </p>

            <h2 className="text-[#7412FF] font-bold">15. Updates to Terms</h2>
            <p>
              We may revise these Terms periodically. Continued use indicates agreement
              with updated Terms.
            </p>

            <h2 className="text-[#7412FF] font-bold">16. Contact</h2>
            <p>
              For questions, email:
              <br />
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
