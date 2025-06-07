import React from "react";
import { Link } from "react-router-dom";

const SingleTask = ({ task }) => {
  return (
    <Link to={`/single-task/${task.id}`}>
      <div className="group backdrop-blur-xl bg-white/90 border border-white/30 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
              {task.taskName}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </div>

          <div className="relative overflow-hidden">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm border border-blue-300/30 flex items-center space-x-2">
              <span>In Progress</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-6">
          <p className="text-gray-600 leading-relaxed text-sm">
            {task.taskDescription}
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-200 pt-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>Task ID: {task.id}</span>
          </div>
          <span className="bg-gray-100 px-2 py-1 rounded">Priority: High</span>
        </div>
      </div>
    </Link>
  );
};

export default SingleTask;
