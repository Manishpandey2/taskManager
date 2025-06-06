import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const SingleTaskPage = () => {
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
            <Link to="/">
          <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Tasks</span>
          </button>
          </Link>
        </div>

        {/* Main Content Card */}
        <div className="backdrop-blur-xl bg-white/95 border border-white/30 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">Complete Project Documentation</h1>
                <div className="flex items-center space-x-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                    Task #001
                  </span>
                  <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full text-sm font-medium border border-blue-300/30 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>In Progress</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Link to="/update-task">
                <button className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors border border-white/30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                </Link>
                <button className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors border border-white/30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Task Info Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Priority</h3>
                    <p className="text-purple-600 font-medium">High</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Due Date</h3>
                    <p className="text-blue-600 font-medium">Dec 25, 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Assigned To</h3>
                    <p className="text-green-600 font-medium">John Doe</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                <span>Description</span>
              </h2>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Write comprehensive documentation for the new feature including API endpoints, user guides, and implementation examples for the development team. This documentation should cover all aspects of the feature implementation, including setup instructions, configuration options, and troubleshooting guides.
                </p>
              </div>
            </div>

            {/* Progress Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                <span>Progress</span>
              </h2>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-600">Completion</span>
                  <span className="text-sm font-bold text-blue-600">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500" style={{width: '65%'}}></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-600">API Documentation: Complete</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-600">User Guide: In Progress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-600">Examples: Pending</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-600">Review: Pending</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Mark as Complete
              </button>
              <button className="flex-1 bg-white border-2 border-purple-300 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300">
                Edit Task
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300">
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default SingleTaskPage