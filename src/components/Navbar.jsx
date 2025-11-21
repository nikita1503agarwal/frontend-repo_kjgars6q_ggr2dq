import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2"
            >
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 grid place-items-center shadow-[0_0_30px_rgba(56,189,248,0.45)]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-semibold tracking-tight">NovaMark</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#work" className="hover:text-white transition">Work</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 border border-white/10 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
