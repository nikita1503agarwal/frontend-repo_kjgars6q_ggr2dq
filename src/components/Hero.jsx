import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />

        {/* Dark gradient overlays for depth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.4),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.8)]" />
            Premium 3D-first marketing studio
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            We craft futuristic brands that stand out in 3D
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            From immersive websites to high-converting campaigns, we blend strategy, design, and 3D to elevate your brand in a dark, modern aesthetic.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-5 py-3 transition shadow-[0_10px_40px_-10px_rgba(34,211,238,0.7)]">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-3 transition">
              View our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
