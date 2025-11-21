import { motion } from 'framer-motion';

const projects = [
  {
    tag: 'Fintech',
    title: 'NeonPay',
    desc: 'A conversion-focused 3D landing with SSO onboarding and trust signals.',
  },
  {
    tag: 'SaaS',
    title: 'OrbitCRM',
    desc: 'Dark aesthetic brand revamp with motion system and pricing optimizer.',
  },
  {
    tag: 'E-commerce',
    title: 'VoidWear',
    desc: 'Immersive product grid with real-time 3D try-on prototypes.',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-white"
        >
          Selected work
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_50%)] opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-4">
                  {p.tag}
                </div>
                <h3 className="text-white font-semibold text-xl mb-1">{p.title}</h3>
                <p className="text-slate-300 text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
