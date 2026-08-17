import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '../../data/profile'
import { navLinks } from '../../data/navigation'

export default function Footer() {
  const socialLinks = [
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
    { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
    { icon: Github, href: profile.github, label: 'GitHub' },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-black/20">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold gradient-text mb-4">
              {profile.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed italic">
              "Building technology that creates real-world impact."
            </p>
            <div className="flex items-center gap-2 mt-4 text-gray-500 text-sm">
              <MapPin className="w-4 h-4 text-amber-400" />
              {profile.footerLocation}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-200 mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl glass hover:border-amber-500/30 hover:text-amber-400 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex justify-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
