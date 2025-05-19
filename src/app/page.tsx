'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  interface AnimateWhenVisibleProps {
    children: ReactNode;
    className?: string;
    delay?: number;
  }

  function AnimateWhenVisible({
    children,
    className = '',
    delay = 0,
  }: AnimateWhenVisibleProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay,
            },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-[#292930] overflow-hidden">
      {/* Navigation */}
      <nav className="px-6 py-6 md:px-12 lg:px-20 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/logo-dark.png"
            alt="Digital Cappuccino"
            width={160}
            height={45}
            priority
            className="h-auto"
          />
        </motion.div>
        <motion.button
          className="bg-gradient-to-r from-[#ffdc60] to-[#ffcb10] text-[#292930] font-semibold px-7 py-3 rounded-full shadow-lg shadow-[#ffdc60]/20"
          whileHover={{
            scale: 1.05,
            boxShadow:
              '0 20px 25px -5px rgba(255, 220, 96, 0.4), 0 8px 10px -6px rgba(255, 220, 96, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Let's Talk
        </motion.button>
      </nav>

      {/* Hero Section with Geometric Shapes and Animation */}
      <header className="relative px-6 pt-28 pb-24 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-br from-white to-gray-50">
        {/* Background elements with animation */}
        <motion.div
          className="absolute top-20 right-[-10%] w-80 h-80 rounded-full bg-[#ffdc60]/10 blur-3xl"
          animate={{
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[-10%] w-96 h-96 rounded-full bg-[#ffdc60]/10 blur-3xl"
          animate={{
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-40 right-[20%] w-20 h-20 rounded-full bg-[#ffdc60] opacity-10"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-[30%] left-[15%] w-40 h-40 rounded-full border-2 border-[#ffdc60]/20"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        />

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-3xl relative"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#ffdc60]/20 to-[#ffdc60]/30 text-[#292930] font-medium mb-6 text-sm border border-[#ffdc60]/20"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              DIGITAL AGENCY THAT DELIVERS RESULTS
            </motion.span>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#292930] to-[#454550]"
              variants={fadeInUp}
            >
              Your Brand Should{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#292930]">Do More</span>
                <motion.span
                  className="absolute left-0 bottom-2 w-full h-4 bg-gradient-to-r from-[#ffdc60] to-[#ffcb10] -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </span>{' '}
              Than Just Look Good
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl mb-4 text-[#292930]/80"
              variants={fadeInUp}
            >
              Looks don't pay the bills — results do.
            </motion.p>
            <motion.p
              className="text-2xl md:text-3xl mb-8 text-[#292930]/80"
              variants={fadeInUp}
            >
              We build brands that drive revenue, not just attention.
            </motion.p>
            <motion.p
              className="text-xl mb-3 text-[#292930]/70"
              variants={fadeInUp}
            >
              At Digital Cappuccino, we build digital experiences that grow
              businesses.
            </motion.p>
            <motion.p
              className="text-xl mb-12 text-[#292930]/70"
              variants={fadeInUp}
            >
              No trends. No buzzwords. Just strategy, execution, and results.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-[#292930] to-[#3d3d45] text-white font-semibold px-8 py-5 rounded-full shadow-xl text-lg relative overflow-hidden group"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#ffdc60]/20 to-[#ffdc60]/10"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
              <span className="relative">👉 Let's Talk Results</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#292930]/30 flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-[#ffdc60] rounded-full mt-2"
              animate={{
                y: [0, 6, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          </div>
        </motion.div>
      </header>

      {/* Services Section with Angled Background */}
      <section className="relative px-6 py-24 md:px-12 lg:px-20 bg-gradient-to-br from-[#292930] to-[#353540] text-white skew-y-[-3deg] -mt-10 transform">
        <div className="max-w-7xl mx-auto skew-y-[3deg]">
          <div className="flex flex-col md:flex-row items-start gap-20">
            <AnimateWhenVisible className="md:w-5/12">
              <motion.div
                className="inline-block px-5 py-3 bg-gradient-to-r from-[#ffdc60] to-[#ffcb10] text-[#292930] font-bold text-xl md:text-2xl mb-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                WE DON'T SELL SERVICES. WE BUILD WHAT WORKS.
              </motion.div>
              <p className="text-2xl mb-6 text-white/90">
                You're not here for SEO, ads, or design.
              </p>
              <p className="text-2xl mb-10 text-white/90">
                You're here because something isn't working — or not working
                fast enough.
              </p>
            </AnimateWhenVisible>

            <div className="md:w-7/12">
              <AnimateWhenVisible>
                <h3 className="text-3xl font-bold mb-8 text-[#ffdc60]">
                  You want:
                </h3>
              </AnimateWhenVisible>
              <motion.ul
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px 0px' }}
                variants={staggerContainer}
              >
                {[
                  'More qualified leads',
                  'More people trusting your brand',
                  'More sales without spending more',
                  'A digital presence that actually converts',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border-l-4 border-[#ffdc60]"
                    variants={fadeInUp}
                    whileHover={{
                      x: 8,
                      backgroundColor: 'rgba(255,255,255,0.15)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-[#ffdc60] mr-4 text-3xl">•</span>
                    <span className="text-xl">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          <AnimateWhenVisible className="mt-16" delay={0.2}>
            <motion.div
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border-t-4 border-[#ffdc60]"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl mb-3 text-white/90">
                We've helped brands move from "just online" to fully booked,
                consistently discovered, and genuinely growing.
              </p>
              <p className="text-2xl mb-3 text-white/90">
                How? By focusing only on what delivers results.
              </p>
              <p className="text-2xl font-semibold text-center mt-6 text-[#ffdc60]">
                No filler. No vanity metrics. No templated packages.
              </p>
            </motion.div>
          </AnimateWhenVisible>
        </div>
      </section>

      {/* Experience Section with Card Grid */}
      <section className="px-6 py-24 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Decorative elements with animation */}
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 bg-[#ffdc60]/10 rounded-full blur-3xl"
          animate={{ opacity: [0.7, 0.3, 0.7] }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-[#292930]/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        />

        {/* Decorative dot grid pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative">
          <AnimateWhenVisible className="flex justify-center mb-16">
            <motion.div
              className="inline-block px-5 py-3 bg-[#292930] text-[#ffdc60] font-bold text-xl md:text-2xl rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              WHAT WORKING WITH US FEELS LIKE
            </motion.div>
          </AnimateWhenVisible>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px 0px' }}
            variants={staggerContainer}
          >
            {[
              {
                icon: '✅',
                title: 'You get clarity',
                description:
                  "You'll always know what we're doing, why we're doing it, and what it's meant to achieve.",
              },
              {
                icon: '✅',
                title: 'You stay focused',
                description:
                  'We do the heavy lifting — so you can run your business without micromanaging creatives.',
              },
              {
                icon: '✅',
                title: 'You get momentum',
                description:
                  'Not just a launch. Not just a campaign. We create compounding, measurable brand traction.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100 group"
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  boxShadow: '0 25px 50px -12px rgba(255, 220, 96, 0.15)',
                  borderColor: '#ffdc60',
                }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ffdc60] to-[#ffcb10] flex items-center justify-center mb-6 text-3xl text-[#292930]"
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold mb-4 text-[#292930]"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.h3>
                <p className="text-lg text-gray-700 group-hover:text-[#292930] transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <AnimateWhenVisible>
            <motion.div
              className="text-center px-6 py-12 bg-gradient-to-r from-[#292930] to-[#35353f] rounded-3xl text-white max-w-4xl mx-auto shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl mb-3">
                Our clients don't come to us because things are broken.
              </p>
              <p className="text-2xl font-semibold">
                They come to us because they're ready to{' '}
                <span className="text-[#ffdc60]">grow faster</span>.
              </p>
            </motion.div>
          </AnimateWhenVisible>
        </div>
      </section>

      {/* Results Section with Left Border Cards */}
      <section className="px-6 py-24 md:px-12 lg:px-20 bg-gradient-to-br from-[#ffdc60]/10 to-white relative">
        {/* Decorative pattern */}
        <div className="absolute inset-0 bg-triangle-pattern opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative">
          <AnimateWhenVisible>
            <motion.div
              className="inline-block px-5 py-3 bg-gradient-to-r from-[#ffdc60] to-[#ffcb10] text-[#292930] font-bold text-xl md:text-2xl mb-12 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              RESULTS WE DELIVER
            </motion.div>
            <p className="text-2xl mb-10">We've helped:</p>
          </AnimateWhenVisible>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px 0px' }}
            variants={staggerContainer}
          >
            {[
              'A service business 3x their monthly leads in under 60 days',
              'A local brand outrank national competitors on Google',
              'A winery double event bookings after a brand + web revamp',
              'A nonprofit grow donations 4x after we repositioned their message',
            ].map((result, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg border-l-8 border-[#ffdc60] group"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#ffdc60] to-[#ffcb10] flex items-center justify-center text-2xl font-bold text-[#292930]"
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                  <motion.p
                    className="text-xl"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {result}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimateWhenVisible className="text-center">
            <motion.span
              className="inline-block px-10 py-5 bg-gradient-to-r from-[#292930] to-[#35353f] text-white font-bold text-2xl rounded-full"
              whileHover={{
                y: -3,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
            >
              We don't guess.{' '}
              <span className="text-[#ffdc60]">We build what works.</span>
            </motion.span>
          </AnimateWhenVisible>
        </div>
      </section>

      {/* Why Clients Stay Section with Offset Layout */}
      <section className="px-6 py-24 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="md:flex items-start gap-16">
            <AnimateWhenVisible className="md:w-5/12 mb-10 md:mb-0">
              <motion.div
                className="inline-block px-5 py-3 bg-[#292930] text-[#ffdc60] font-bold text-xl md:text-2xl mb-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                WHY CLIENTS STICK WITH US
              </motion.div>

              <p className="text-2xl mb-6 font-semibold">
                We don't play the agency game.
              </p>
              <p className="text-xl mb-6 text-gray-700">
                No bloated reports. No 30-slide decks. No vague promises.
              </p>
              <p className="text-xl mb-10 text-gray-700">
                Just consistent execution, sharp thinking, and a small team that
                acts like a partner — not a vendor.
              </p>
            </AnimateWhenVisible>

            <AnimateWhenVisible className="md:w-7/12" delay={0.2}>
              <motion.div
                className="bg-gradient-to-br from-[#292930] to-[#383842] text-white p-10 rounded-2xl shadow-2xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-2xl mb-4">
                  Most clients work with us long-term, not because they're
                  locked into a contract —
                </p>
                <p className="text-2xl mb-6">
                  but because they don't want to go back to anything less.
                </p>
                <div className="mt-8 border-t border-white/10 pt-8 flex items-center gap-4">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[#ffdc60] flex items-center justify-center text-[#292930] text-2xl font-bold"
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                    DC
                  </motion.div>
                  <div>
                    <p className="text-xl font-semibold">
                      Digital Cappuccino Team
                    </p>
                    <p className="text-[#ffdc60]">
                      Strategy • Design • Results
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimateWhenVisible>
          </div>
        </div>
      </section>

      {/* CTA Section with Angled Background and Form */}
      <section
        id="contact"
        className="px-6 py-24 md:px-12 lg:px-20 bg-gradient-to-br from-[#292930] to-[#383845] text-white relative overflow-hidden"
      >
        {/* Background elements with animation */}
        <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden">
          <div className="w-full h-[100px] bg-white transform -skew-y-3 origin-left translate-y-[-50px]"></div>
        </div>
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffdc60]/10 rounded-full blur-3xl"
          animate={{ opacity: [0.7, 0.3, 0.7] }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 border border-[#ffdc60]/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="md:flex items-start gap-16">
            <AnimateWhenVisible className="md:w-6/12 mb-16 md:mb-0">
              <motion.div
                className="inline-block px-5 py-3 bg-gradient-to-r from-[#ffdc60] to-[#ffcb10] text-[#292930] font-bold text-xl md:text-2xl mb-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                LET'S GET YOU GROWING
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready for{' '}
                <span className="text-[#ffdc60] relative">
                  <span className="relative z-10">results</span>
                  <span className="absolute left-0 bottom-1 w-full h-3 bg-[#ffdc60]/30 -z-10"></span>
                </span>{' '}
                that matter?
              </h2>

              <p className="text-xl mb-6">
                We're not for everyone. We're for businesses who are done
                wasting time.
              </p>
              <p className="text-xl mb-10">
                If you're ready for traction — not just traffic — let's talk.
              </p>

              <motion.div
                className="p-8 bg-white/10 backdrop-blur-md rounded-2xl mb-10 border border-white/10"
                whileHover={{
                  y: -3,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl mb-4">
                  In 20 minutes, we'll find 2–3 things holding your growth back
                  (and tell you exactly what we'd fix).
                </p>
                <p className="text-xl">No obligation. No pressure.</p>
              </motion.div>

              <motion.p
                className="italic text-xl text-[#ffdc60] inline-block"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                "Pretty doesn't pay the bills. Performance does."
              </motion.p>
            </AnimateWhenVisible>

            <AnimateWhenVisible className="md:w-6/12" delay={0.3}>
              <motion.div
                className="bg-white text-[#292930] p-8 rounded-2xl shadow-2xl"
                whileHover={{
                  boxShadow: '0 25px 50px -12px rgba(255, 220, 96, 0.2)',
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6">
                  Book Your Free Strategy Call
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <motion.input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffdc60]"
                      placeholder="John Smith"
                      whileFocus={{
                        borderColor: '#ffdc60',
                        boxShadow: '0 0 0 2px rgba(255, 220, 96, 0.2)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffdc60]"
                      placeholder="john@company.com"
                      whileFocus={{
                        borderColor: '#ffdc60',
                        boxShadow: '0 0 0 2px rgba(255, 220, 96, 0.2)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What's your biggest challenge?
                    </label>
                    <motion.textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffdc60] h-32"
                      placeholder="Tell us a bit about what you're looking to achieve..."
                      whileFocus={{
                        borderColor: '#ffdc60',
                        boxShadow: '0 0 0 2px rgba(255, 220, 96, 0.2)',
                      }}
                    />
                  </div>
                  <motion.button
                    className="w-full bg-gradient-to-r from-[#ffdc60] to-[#ffcb10] text-[#292930] font-bold py-4 px-6 rounded-lg shadow-lg shadow-[#ffdc60]/20 relative overflow-hidden"
                    whileHover={{
                      boxShadow:
                        '0 20px 25px -5px rgba(255, 220, 96, 0.4), 0 8px 10px -6px rgba(255, 220, 96, 0.4)',
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-white/20"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                    <span className="relative">
                      👉 Book Your Free Strategy Call
                    </span>
                  </motion.button>
                </form>
              </motion.div>
            </AnimateWhenVisible>
          </div>
        </div>
      </section>

      {/* Footer with Logo and Links */}
      <footer className="px-6 py-12 md:px-12 lg:px-20 bg-gradient-to-br from-[#1f1f24] to-[#292930] text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-800 pb-12">
            <div className="mb-8 md:mb-0">
              <motion.div
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo-white.png"
                  alt="Digital Cappuccino"
                  width={160}
                  height={45}
                  className="h-auto"
                />
              </motion.div>
            </div>
            <div className="mt-8 md:mt-0">
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-[#ffdc60] to-[#ffcb10] text-[#292930] font-medium px-6 py-3 rounded-full shadow-lg"
                whileHover={{
                  y: -2,
                  boxShadow:
                    '0 20px 25px -5px rgba(255, 220, 96, 0.4), 0 8px 10px -6px rgba(255, 220, 96, 0.4)',
                }}
                transition={{ duration: 0.3 }}
              >
                Get Started
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              © {new Date().getFullYear()} Digital Cappuccino. All rights
              reserved.
            </p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <motion.a
                href="#"
                className="text-gray-400"
                whileHover={{
                  color: '#ffffff',
                  textDecoration: 'underline',
                }}
                transition={{ duration: 0.2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400"
                whileHover={{
                  color: '#ffffff',
                  textDecoration: 'underline',
                }}
                transition={{ duration: 0.2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add CSS for custom background patterns */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23292930' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .bg-dot-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23292930' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E");
        }

        .bg-triangle-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 13.5L12 21l-8-7.5L12 5l8 8.5z' fill='%23292930' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}
