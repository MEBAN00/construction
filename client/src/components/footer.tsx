import { HardHat } from "lucide-react";
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-20" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2" data-testid="footer-company">
            <div className="flex items-center mb-6">
              <HardHat className="text-accent text-2xl mr-3" size={24} />
              <h3 className="text-2xl font-bold text-white" data-testid="footer-logo">Premier Construction</h3>
            </div>
            <p className="text-slate-400 mb-6 max-w-md" data-testid="footer-description">
              Building excellence since 1985. We are your trusted partner for all construction needs, delivering quality projects that stand the test of time.
            </p>
            <div className="flex space-x-4" data-testid="footer-social">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-accent rounded-lg flex items-center justify-center transition-colors" data-testid="social-facebook">
                <SiFacebook className="text-slate-300 hover:text-white" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-accent rounded-lg flex items-center justify-center transition-colors" data-testid="social-twitter">
                <SiX className="text-slate-300 hover:text-white" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-accent rounded-lg flex items-center justify-center transition-colors" data-testid="social-linkedin">
                <SiLinkedin className="text-slate-300 hover:text-white" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-accent rounded-lg flex items-center justify-center transition-colors" data-testid="social-instagram">
                <SiInstagram className="text-slate-300 hover:text-white" size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div data-testid="footer-services">
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-accent transition-colors text-left"
                  data-testid="footer-service-residential"
                >
                  Residential Construction
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-accent transition-colors text-left"
                  data-testid="footer-service-commercial"
                >
                  Commercial Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-accent transition-colors text-left"
                  data-testid="footer-service-renovation"
                >
                  Renovation & Remodeling
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-accent transition-colors text-left"
                  data-testid="footer-service-design-build"
                >
                  Design-Build
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-accent transition-colors text-left"
                  data-testid="footer-service-infrastructure"
                >
                  Infrastructure
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-accent transition-colors text-left"
                  data-testid="footer-service-management"
                >
                  Project Management
                </button>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div data-testid="footer-links">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-slate-400 hover:text-accent transition-colors text-left"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-slate-400 hover:text-accent transition-colors text-left"
                  data-testid="footer-link-projects"
                >
                  Our Projects
                </button>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-accent transition-colors" data-testid="footer-link-careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-accent transition-colors" data-testid="footer-link-safety">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-accent transition-colors" data-testid="footer-link-news">
                  News & Updates
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-400 hover:text-accent transition-colors text-left"
                  data-testid="footer-link-contact"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8" data-testid="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0" data-testid="footer-copyright">
              &copy; 2024 Premier Construction. All rights reserved.
            </p>
            <div className="flex space-x-6" data-testid="footer-legal">
              <a href="#" className="text-slate-400 hover:text-accent transition-colors" data-testid="footer-privacy">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-accent transition-colors" data-testid="footer-terms">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-accent transition-colors" data-testid="footer-cookies">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
