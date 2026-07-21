const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const socials = [
  { href: "https://wa.me/573117788543", label: "WhatsApp" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://tiktok.com", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-6 py-14 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <a href="#inicio" className="font-serif text-2xl text-ink">
          ARC
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex items-center justify-center gap-6">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors duration-300 hover:text-ink"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-12 text-center text-xs text-muted/70">
        © {new Date().getFullYear()} ARC. Reseller Apple independiente en
        Colombia. Todos los derechos reservados.
      </p>
    </footer>
  );
}
