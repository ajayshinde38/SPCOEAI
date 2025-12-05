import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Facilities() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="section-title text-gray-900 mb-6">Our Facilities</h1>
          <p className="text-xl text-gray-600">
            Explore our state-of-the-art infrastructure and resources designed for cutting-edge AI research and education.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">World-Class Infrastructure</h2>
            <p className="mb-6 leading-relaxed">
              Our center is equipped with modern facilities and advanced technological infrastructure to support world-class education, research, and innovation in artificial intelligence.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Available Facilities</h2>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">▪</span>
                <div>
                  <strong className="block text-gray-900">Computing Labs:</strong>
                  <span className="text-gray-600">High-performance computing systems for AI training and research</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">▪</span>
                <div>
                  <strong className="block text-gray-900">Research Laboratories:</strong>
                  <span className="text-gray-600">Dedicated spaces for AI and machine learning research projects</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">▪</span>
                <div>
                  <strong className="block text-gray-900">Innovation Centers:</strong>
                  <span className="text-gray-600">Collaborative spaces for developing AI-powered solutions</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">▪</span>
                <div>
                  <strong className="block text-gray-900">Lecture Halls & Seminar Rooms:</strong>
                  <span className="text-gray-600">Modern teaching facilities equipped with latest technology</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">▪</span>
                <div>
                  <strong className="block text-gray-900">Library & Learning Resources:</strong>
                  <span className="text-gray-600">Comprehensive digital and physical collections of AI research materials</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">▪</span>
                <div>
                  <strong className="block text-gray-900">Collaboration Spaces:</strong>
                  <span className="text-gray-600">Open spaces for team collaboration and knowledge sharing</span>
                </div>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-green-50 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Details Coming Soon</h3>
              <p className="text-gray-700 mb-6">
                We're currently developing comprehensive information about each facility, including photos, specifications, and booking procedures. Check back soon for detailed facility tours and descriptions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group"
              >
                Schedule a Campus Visit <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
