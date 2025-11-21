import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-10 md:p-14 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something extraordinary</h2>
              <p className="mt-3 text-slate-300">
                Tell us about your goals and we’ll design a 3D-first experience that moves metrics and minds.
              </p>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-3"
              onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will reach out soon.'); }}
            >
              <input className="h-11 rounded-xl bg-black/40 border border-white/10 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Your name" required />
              <input type="email" className="h-11 rounded-xl bg-black/40 border border-white/10 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Work email" required />
              <textarea rows="4" className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Tell us about your project" />
              <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold px-5 py-3 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)]">Request proposal</button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
