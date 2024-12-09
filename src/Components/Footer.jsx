import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 px-32">
      <div className="max-w-screen mx-auto px-6 flex flex-wrap justify-between gap-8 mb-5">

        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/amit-saini432024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/Git-Amit96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://amit-portfolio-1221.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-700"
            >
              <i className="fas fa-briefcase fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Sections</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/home" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BeChef. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
