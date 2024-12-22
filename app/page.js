import React from "react";
import "./globals.css"; // You can define custom styles or use Tailwind CSS classes.

const page = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-100 p-4">
        <div className="font-bold text-lg mb-4">BlueChat</div>
        <nav className="space-y-2">
          <div className="text-blue-600">Messages</div>
          <div className="text-gray-500">Segments</div>
        </nav>
        <div className="mt-8">
          <p className="text-sm text-gray-400">All</p>
          <ul className="space-y-4 mt-2">
            <li className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Avatar"
                className="rounded-full w-8 h-8 mr-2"
              />
              <div>
                <p className="text-sm font-bold">Oğuz Yağız Kara</p>
                <p className="text-xs text-gray-500">5m ago</p>
              </div>
            </li>
            {/* Repeat similar items */}
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-white p-6">
        <div className="border-b pb-4 mb-4 flex items-center justify-between">
          <h1 className="font-bold text-xl">Oğuz Yağız Kara</h1>
          <p className="text-gray-400">oguz@bluereceipt.com</p>
        </div>
        <div className="overflow-y-auto h-full">
          <div className="space-y-4">
            {/* Chat Message */}
            <div className="flex items-start">
              <img
                src="https://via.placeholder.com/40"
                alt="Avatar"
                className="rounded-full w-8 h-8 mr-4"
              />
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm">
                  I keep getting "error while creating a new pop-up" for the first
                  time setup...
                </p>
              </div>
            </div>
            {/* Smart Response */}
            <div className="mt-4">
              <p className="text-gray-400 text-sm">Smart Response Detected:</p>
              <button className="bg-blue-600 text-white py-1 px-3 rounded mt-2">
                Select
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-1/4 bg-gray-50 p-4 border-l">
        <div className="space-y-4">
          <div className="text-gray-600">
            <p>Revenue</p>
            <h2 className="text-2xl font-bold">$3,452</h2>
          </div>
          <div className="text-gray-600">
            <p>Web Visits</p>
            <h2 className="text-2xl font-bold">42</h2>
          </div>
          <div className="text-sm mt-6">
            <p className="font-bold">Information</p>
            <p>oguz@bluereceipt.com</p>
            <p>+90 535 644 81 77</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default page;
