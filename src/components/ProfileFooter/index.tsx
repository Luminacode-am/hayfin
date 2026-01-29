import { Github, Linkedin, Mail } from 'lucide-react';

export default function PFooter(){
    return(
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Lumina Code Academy. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            <Github size={18} />
          </a>
          <a href="#" className="hover:text-white">
            <Linkedin size={18} />
          </a>
          <a href="#" className="hover:text-white">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
    );
}