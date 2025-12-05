import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Vision', href: '/vision' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <h3 className="text-white font-bold text-lg mb-4">Vidya Pratishthan</h3>
            <p className="text-sm text-gray-400 mb-4">
              Sharadchandra Pawar Center of Excellence in AI
            </p>
            <p className="text-xs text-gray-500">
              Empowering the next generation through AI excellence and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>+91 XXXX XXX XXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>info@vidyapratishthan.org</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-3 bg-gray-800 text-gray-400 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <p className="text-sm text-gray-500">
              © {currentYear} Vidya Pratishthan. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
