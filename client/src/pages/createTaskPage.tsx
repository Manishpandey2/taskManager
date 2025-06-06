import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'

const CreateTaskPage = () => {
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
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1">Create New Task</h1>
                <p className="text-purple-100">Add a new task to your project</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <div className="space-y-8">
              {/* Task Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Task Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
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
                      <option value="pending" selected>Pending</option>
                      <option value="in-progress">In Progress</option>
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
                      <option value="medium" selected>Medium</option>
                      <option value="high">High</option>
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
                  Initial Progress <span className="text-purple-600 font-bold">0%</span>
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="0"
                    className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-100"
                    style={{
                      background: 'linear-gradient(to right, #9333ea 0%, #e5e7eb 0%)'
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
                <div className="flex flex-wrap gap-2 mb-3" id="tags-container">
                  {/* Tags will be added here dynamically */}
                </div>
                <input
                  type="text"
                  className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-gray-800 placeholder-gray-400"
                  placeholder="Add tags (press Enter to add)..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Create Task</span>
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
                  className="px-8 py-4 bg-gray-50 border-2 border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Save as Draft</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default CreateTaskPage