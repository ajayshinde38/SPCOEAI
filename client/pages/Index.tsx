import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Lightbulb, Users, Award, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const videoUrl = 'https://cdn.builder.io/o/assets%2Ff44e8aabd9b4470095df1b91a1a6c12f%2Fffbcd848621d4c2fb5fe1149222737d2?alt=media&token=5aa8fb35-8d1c-4cb6-bfaa-d0d767a84e2c&apiKey=f44e8aabd9b4470095df1b91a1a6c12f';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16 bg-gray-900">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect fill='%23111827' width='1200' height='675'/%3E%3C/svg%3E"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full">
                🚀 Advancing AI Excellence
              </span>
            </div>

            <h1 className="hero-title text-white">
              Sharadchandra Pawar Center of Excellence in <span className="gradient-text">AI</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming the future through cutting-edge AI research, innovation, and education. Empowering students, researchers, and industry leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Learn More <ArrowRight size={18} />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Explore Programs <Zap size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col items-center gap-2 text-white animate-float">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
              <h2 className="section-title text-gray-900 mt-2 mb-6">
                Pioneering AI Excellence and Innovation
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Vidya Pratishthan's Sharadchandra Pawar Center of Excellence in AI is dedicated to advancing artificial intelligence through groundbreaking research, world-class education, and industry collaboration.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to create innovative solutions that address real-world challenges and empower the next generation of AI leaders and researchers.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group"
              >
                Discover Our Vision <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="animate-slide-in-right grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: 'Research', value: '50+' },
                { icon: Users, label: 'Experts', value: '100+' },
                { icon: Lightbulb, label: 'Projects', value: '30+' },
                { icon: Award, label: 'Recognition', value: '15+' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:border-primary hover:shadow-lg transition-all duration-300">
                  <item.icon className="text-primary mb-3" size={32} />
                  <p className="text-sm text-gray-600 mb-2">{item.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Core Strengths</span>
            <h2 className="section-title text-white mt-4">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Advanced Research',
                description: 'Cutting-edge AI research in machine learning, deep learning, and neural networks.',
              },
              {
                icon: Users,
                title: 'Mentorship Programs',
                description: 'Guidance from industry experts and experienced researchers to shape your career.',
              },
              {
                icon: Lightbulb,
                title: 'Innovation Labs',
                description: 'State-of-the-art facilities and resources for developing AI-powered solutions.',
              },
              {
                icon: Award,
                title: 'Industry Partnerships',
                description: 'Collaborations with leading tech companies and research institutions worldwide.',
              },
              {
                icon: Zap,
                title: 'Training Programs',
                description: 'Comprehensive courses and workshops on AI fundamentals and advanced topics.',
              },
              {
                icon: Users,
                title: 'Community Engagement',
                description: 'Networking events, seminars, and conferences to foster knowledge sharing.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-accent hover:bg-white/10 transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <feature.icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-gray-900 mb-6">Ready to Transform Your AI Journey?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our community of innovators, researchers, and industry leaders shaping the future of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Explore Programs <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
