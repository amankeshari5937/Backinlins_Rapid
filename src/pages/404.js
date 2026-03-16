import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";

import Link from "next/link";

export default function NotFound() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2">
        The page you’re looking for doesn’t exist or couldn’t be found.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
    <Footer/>
    </>
  );
}
