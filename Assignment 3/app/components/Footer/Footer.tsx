export default function Footer() {
    return (
      <footer className="bg-blue-900  text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2024 My Next.js Site. All rights reserved.</p>
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </footer>
    );
  }
  