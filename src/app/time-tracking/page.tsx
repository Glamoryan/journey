import React from "react";
import Link from "next/link";

const topics = [
  { id: 'quantum-programming', title: 'Quantum-Ready Programming', startDate: 'May 15, 2023', targetDate: 'August 15, 2023', progress: 72 },
  { id: 'machine-learning', title: 'Machine Learning', startDate: 'April 10, 2023', targetDate: 'July 20, 2023', progress: 85 },
  { id: 'web-development', title: 'Web Development', startDate: 'June 5, 2023', targetDate: 'September 30, 2023', progress: 45 },
];

export default function TimeTracking() {
  return (
    <>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link href="/dashboard" className="text-primary hover:text-primary/80 mr-4">
              ← Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Learning Tracker</h1>
          </div>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
            Add New Learning Topic
          </button>
        </div>
      <div className="grid grid-cols-1 gap-6 mb-6">
        {topics.map(topic => (
          <Link key={topic.id} href={`/time-tracking/${topic.id}`}>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color hover:border-primary transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold">{topic.title}</h2>
                  <p className="text-muted-foreground">Started: {topic.startDate} | Target completion: {topic.targetDate}</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                    In Progress
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm font-medium">{topic.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-primary rounded-full h-2.5" style={{ width: `${topic.progress}%` }}></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}