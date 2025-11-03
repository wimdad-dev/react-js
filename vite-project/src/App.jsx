import React from 'react';

// Main App component to render and center the card
export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4 font-inter">
      <BlogCard />
    </div>
  );
}

// The Blog Card component based on the design
function BlogCard() {
  return (
    <div className="max-w-xs w-full bg-black rounded-2xl shadow-2xl overflow-hidden text-white">
      {/* Card Image */}
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80"
        alt="Person with headphones"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = "https://placehold.co/600x400/000000/FFFFFF?text=Post+Image&font=lato";
        }}
      />

      {/* Card Content */}
      <div className="p-6">
        {/* Horizontal Rule */}
        <hr className="border-gray-700" />

        <div className="pt-4">
          {/* Tag */}
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">
            Startup
          </span>

          {/* Title */}
          <h2 className="text-xl font-semibold text-white mt-2 mb-4">
            Startup Ideas: How to come up with a great idea
          </h2>

          {/* Read More Link */}
          <a
            href="#"
            className="text-indigo-400 text-sm font-medium inline-flex items-center group"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}