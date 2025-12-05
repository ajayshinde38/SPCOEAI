import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="section-title text-gray-900 mb-6">Our Programs</h1>
          <p className="text-xl text-gray-600">
            Discover our comprehensive range of AI education and research programs designed for students and professionals.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Educational Programs</h2>
            <p className="mb-6 leading-relaxed">
              We're developing an extensive portfolio of programs including undergraduate courses, graduate specializations, certification programs, and professional development workshops in artificial intelligence and machine learning.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Program Categories</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">→</span>
                <span><strong>Undergraduate Programs:</strong> Foundation and advanced courses in AI and machine learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">→</span>
                <span><strong>Graduate Programs:</strong> Specialized master's and doctoral tracks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">→</span>
                <span><strong>Certification Courses:</strong> Industry-recognized certifications for professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">→</span>
                <span><strong>Research Initiatives:</strong> Cutting-edge AI research opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">→</span>
                <span><strong>Workshops & Seminars:</strong> Regular training sessions and expert talks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">→</span>
                <span><strong>Industry Internships:</strong> Practical experience with leading tech companies</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-indigo-50 rounded-xl border border-indigo-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Coming Soon</h3>
              <p className="text-gray-700 mb-6">
                Detailed information about each program including curriculum, eligibility requirements, application process, and career outcomes will be available shortly.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group"
              >
                Contact Us for More Information <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
