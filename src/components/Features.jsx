import { motion } from 'framer-motion';
import { Rocket, Cube, LineChart, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Launch-ready strategy',
    desc: 'Full-funnel marketing plans engineered for conversion and brand lift.',
  },
  {
    icon: Cube,
    title: 'Immersive 3D web',
    desc: 'Spline-powered hero scenes and interactions that feel alive and premium.',
  },
  {
    icon: LineChart,
    title: 'Performance at core',
    desc: 'Data-driven optimization on speed, SEO, and funnel metrics from day one.',
  },
  {
    icon: Sparkles,
    title: 'Dark, futuristic aesthetic',
    desc: 'A cohesive visual language—glow, glass, and gradients—tailored to your brand.',
  },
];

export default function Features() {
  return (
    <section id="services" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-white"
        >
          Services built for impact
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/[0.08] transition shadow-[0_8px_40px_-12px_rgba(34,211,238,0.25)]"
            >
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 grid place-items-center mb-4">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
