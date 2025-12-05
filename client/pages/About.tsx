import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="section-title text-gray-900 mb-6">About Our Center</h1>
          <p className="text-xl text-gray-600">
            Discover the story, mission, and values behind Vidya Pratishthan's Sharadchandra Pawar Center of Excellence in AI.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="mb-6 leading-relaxed">
              This page is currently being developed to showcase our center's rich history, mission, vision, and core values. We're working on bringing you detailed information about our institution, our achievements, and our commitment to advancing artificial intelligence education and research.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What's Coming</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Comprehensive history and background information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Detailed mission and vision statements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Meet our leadership team and faculty</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Key achievements and milestones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Our commitment to excellence</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-gray-700 mb-6">
                We're continuously expanding this section with rich content about our organization. In the meantime, explore our other sections to learn about our programs, facilities, and how to get in touch.
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group"
              >
                Explore Our Programs <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
