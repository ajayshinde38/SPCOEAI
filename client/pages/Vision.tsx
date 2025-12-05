import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Vision() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="section-title text-gray-900 mb-6">Our Vision & Mission</h1>
          <p className="text-xl text-gray-600">
            Understanding the future we're building and the impact we aim to create through artificial intelligence.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision for AI Excellence</h2>
            <p className="mb-6 leading-relaxed">
              We are committed to creating a world where artificial intelligence serves as a powerful force for positive change, innovation, and human progress. Our vision encompasses groundbreaking research, exceptional education, and meaningful contributions to society through responsible AI development.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Core Values</h2>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg font-bold">◆</span>
                <div>
                  <strong className="block text-gray-900">Excellence:</strong>
                  <span className="text-gray-600">Pursuing the highest standards in education, research, and innovation</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg font-bold">◆</span>
                <div>
                  <strong className="block text-gray-900">Innovation:</strong>
                  <span className="text-gray-600">Pushing boundaries to create breakthrough solutions and discoveries</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg font-bold">◆</span>
                <div>
                  <strong className="block text-gray-900">Collaboration:</strong>
                  <span className="text-gray-600">Working together with industry, academia, and community partners</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg font-bold">◆</span>
                <div>
                  <strong className="block text-gray-900">Responsibility:</strong>
                  <span className="text-gray-600">Ensuring ethical AI development and positive societal impact</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg font-bold">◆</span>
                <div>
                  <strong className="block text-gray-900">Inclusivity:</strong>
                  <span className="text-gray-600">Creating opportunities for diverse talents and perspectives</span>
                </div>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-gray-700 mb-6">
                Detailed elaboration on our strategic vision, long-term goals, and roadmap for becoming a leading center of AI excellence is being developed. We're excited to share our comprehensive vision statement soon.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group"
              >
                Learn About Our Organization <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
