import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-light-bg-primary dark:bg-dark-bg text-light-text-secondary dark:text-dark-text-secondary py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Lumina Code Academy. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Luminacode-am/hayfin"
            className="hover:text-light-text-tertiary dark:hover:text-dark-text-tertiary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/luminacode-academy/"
            className="hover:text-light-text-tertiary dark:hover:text-dark-text-tertiary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/lumina_code_academy/"
            className="hover:text-light-text-tertiary dark:hover:text-dark-text-tertiary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
