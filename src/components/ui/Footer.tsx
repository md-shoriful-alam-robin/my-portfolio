export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-mist/50">
          <span className="text-teal">{'<'}</span>
          Robin
          <span className="text-teal">{' />'}</span>
        </span>

        <p className="font-mono text-xs text-mist/40 text-center">
          © 2026 MD Shoriful Alam Robin — Built with Next.js & Tailwind CSS
        </p>

        <a
          href="https://github.com/md-shoriful-alam-robin"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-mist/40 hover:text-teal transition-colors"
        >
          github ↗
        </a>
      </div>
    </footer>
  )
}
