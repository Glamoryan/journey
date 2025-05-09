import Link from "next/link";
import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
            <h2 className="text-xl font-semibold mb-4">Project Management</h2>
          </div>
          
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
            <h2 className="text-xl font-semibold mb-4">Product Development</h2>
          </div>
          
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
            <h2 className="text-xl font-semibold mb-4">Knowledge Management</h2>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
            <h2 className="text-xl font-semibold mb-4">Resource Management</h2>
            <Link href="/time-tracking" className="underline cursor-pointer w-fit text-primary hover:text-primary/80 transition-colors">
              Time Tracking
            </Link>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
            <h2 className="text-xl font-semibold mb-4">Collaboration</h2>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
            <h2 className="text-xl font-semibold mb-4">Workflows</h2>
          </div>
        </div>
      </div>
    </div>
  );
}