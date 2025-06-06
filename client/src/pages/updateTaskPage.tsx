import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const UpdateTaskPage = () => {
  return (
<>

    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 -left-10 w-32 h-32 bg-purple-400/20 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-400/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
            <Link to="/single-task">
          <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Task Details</span>
          </button>
          </Link>
        </div>

        {/* Main Content Card */}
        <div className="backdrop-blur-xl bg-white/95 border border-white/30 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1">Update Task</h1>
                <p className="text-purple-100">Modify task details and settings</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <div className="space-y-8">
              {/* Task Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Task Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="Complete Project Documentation"
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-gray-800 font-medium placeholder-gray-400"
                    placeholder="Enter task name..."
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Task Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Description
                </label>
                <div className="relative">
                  <textarea
                    rows={6}
                    defaultValue="Write comprehensive documentation for the new feature including API endpoints, user guides, and implementation examples for the development team. This documentation should cover all aspects of the feature implementation."
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-gray-800 resize-none placeholder-gray-400"
                    placeholder="Describe your task in detail..."
                  ></textarea>
                  <div className="absolute top-4 right-4">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Status and Priority Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Status */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Status
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-gray-800 font-medium appearance-none cursor-pointer">
                      <option value="pending">Pending</option>
                      <option value="in-progress" selected>In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="on-hold">On Hold</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Priority
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-gray-800 font-medium appearance-none cursor-pointer">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high" selected>High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Due Date and Assigned To Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Due Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Due Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      defaultValue="2024-12-25"
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-gray-800 font-medium cursor-pointer"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Assigned To */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Assigned To
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-gray-800 font-medium placeholder-gray-400"
                      placeholder="Enter assignee name..."
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Slider */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Progress <span className="text-purple-600 font-bold">65%</span>
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="65"
                    className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-100"
                    style={{
                      background: 'linear-gradient(to right, #9333ea 65%, #e5e7eb 65%)'
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200 flex items-center space-x-2">
                    <span>Documentation</span>
                    <button className="hover:bg-purple-200 rounded-full p-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                  <span className="px-3 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200 flex items-center space-x-2">
                    <span>API</span>
                    <button className="hover:bg-blue-200 rounded-full p-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                </div>
                <input
                  type="text"
                  className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-gray-800 placeholder-gray-400"
                  placeholder="Add new tag and press Enter..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Update Task</span>
                </button>
                <button
                  type="button"
                  className="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Cancel</span>
                </button>
                <button
                  type="button"
                  className="px-8 py-4 bg-red-50 border-2 border-red-200 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};



export default UpdateTaskPage