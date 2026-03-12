export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Luten Reinhardt. All rights
          reserved.
        </p>
        <div className="flex gap-5">
          <a
            href="https://x.com/gigafactories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors text-xs"
          >
            X
          </a>
          <a
            href="https://linkedin.com/in/luten-reinhardt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors text-xs"
          >
            LinkedIn
          </a>
          <a
            href="mailto:luten.reinhardt@gmail.com"
            className="text-muted hover:text-white transition-colors text-xs"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
