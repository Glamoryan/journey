import React from "react";
import Link from "next/link";

export default function TimeTracking() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link href="/time-tracking" className="text-primary hover:text-primary/80 mr-4">
              ← Time Tracking
            </Link>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg mb-6 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-5.618 1.04M12 19a7 7 0 100-14 7 7 0 000 14z" />
                </svg>
              </div>
              <div>
                <p className="text-white/80 text-sm">Current Level</p>
                <h2 className="text-2xl font-bold">Level 14: Quantum Explorer</h2>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center">
                <span className="mr-2 text-sm font-medium">Next Level: 2,450 / 3,000 XP</span>
                <span className="bg-white/20 px-2 py-1 rounded text-xs">82%</span>
              </div>
              <div className="w-56 bg-white/20 rounded-full h-2 mt-2">
                <div className="bg-white rounded-full h-2" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">Quantum-Ready Programming</h2>
                  <p className="text-muted-foreground">Started: May 15, 2023 | Target completion: August 15, 2023</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                    In Progress
                  </div>
                  <div className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                    +125 XP
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm font-medium">72%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-primary rounded-full h-2.5" style={{ width: '72%' }}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">86</h3>
                  <p className="text-muted-foreground text-sm">Total Hours</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">24</h3>
                  <p className="text-muted-foreground text-sm">This Month</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">5.2</h3>
                  <p className="text-muted-foreground text-sm">Weekly Avg.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-purple-500">1240</h3>
                  <p className="text-muted-foreground text-sm">XP Earned</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
              <h3 className="text-xl font-bold mb-4">Subtopics</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <span className="font-medium">Quantum Concepts</span>
                      <span className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs px-2 py-0.5 rounded-full">Mastered</span>
                    </div>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 rounded-full h-2" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <span className="font-medium">Quantum Algorithms</span>
                      <span className="ml-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-0.5 rounded-full">Advanced</span>
                    </div>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <span className="font-medium">Qiskit Programming</span>
                      <span className="ml-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-0.5 rounded-full">Intermediate</span>
                    </div>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <span className="font-medium">Quantum Simulation</span>
                      <span className="ml-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-xs px-2 py-0.5 rounded-full">Beginner</span>
                    </div>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <span className="font-medium">Error Correction</span>
                      <span className="ml-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-xs px-2 py-0.5 rounded-full">Novice</span>
                    </div>
                    <span>30%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-yellow-500 rounded-full h-2" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Recent Achievements</h3>
                <button className="text-primary text-sm hover:underline">
                  View All
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-color p-4 rounded-lg bg-background flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Time Master</h4>
                  <p className="text-xs text-muted-foreground">Completed 10 study sessions of 2+ hours</p>
                  <span className="mt-2 text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">+100 XP</span>
                </div>
                
                <div className="border border-color p-4 rounded-lg bg-background flex flex-col items-center text-center">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Concept Master</h4>
                  <p className="text-xs text-muted-foreground">Completed Quantum Concepts with 100% mastery</p>
                  <span className="mt-2 text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full">+200 XP</span>
                </div>
                
                <div className="border border-color p-4 rounded-lg bg-background flex flex-col items-center text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Consistency Streak</h4>
                  <p className="text-xs text-muted-foreground">Studied for 7 consecutive days</p>
                  <span className="mt-2 text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full">+75 XP</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Recent Study Sessions</h3>
                <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm">
                  Add New Session
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border-b border-color">
                  <div>
                    <p className="font-medium">Quantum Gates with Qiskit</p>
                    <p className="text-sm text-muted-foreground">June 18, 2023, 14:30-17:45</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <p className="font-medium">3h 15m</p>
                      <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">+45 XP</span>
                    </div>
                    <div className="flex items-center text-sm text-green-500">
                      <span>Productive</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 border-b border-color">
                  <div>
                    <p className="font-medium">Shor's Algorithm Study</p>
                    <p className="text-sm text-muted-foreground">June 16, 2023, 09:00-12:30</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <p className="font-medium">3h 30m</p>
                      <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">+35 XP</span>
                    </div>
                    <div className="flex items-center text-sm text-yellow-500">
                      <span>Moderate</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm0-2a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3">
                  <div>
                    <p className="font-medium">Quantum Teleportation</p>
                    <p className="text-sm text-muted-foreground">June 14, 2023, 18:00-20:00</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <p className="font-medium">2h</p>
                      <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">+25 XP</span>
                    </div>
                    <div className="flex items-center text-sm text-green-500">
                      <span>Productive</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
              <h3 className="text-xl font-bold mb-4">Study Session</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Study Method</label>
                <div className="flex w-full rounded-md overflow-hidden border border-color">
                  <button className="flex-1 py-2 px-3 bg-primary text-primary-foreground text-sm font-medium">
                    Pomodoro
                  </button>
                  <button className="flex-1 py-2 px-3 bg-background text-foreground text-sm font-medium">
                    Flowtime
                  </button>
                  <button className="flex-1 py-2 px-3 bg-background text-foreground text-sm font-medium">
                    Custom
                  </button>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Focus Time:</span>
                  <span className="font-medium">25 minutes</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  defaultValue="25"
                  className="w-full"
                />
                
                <div className="flex justify-between text-sm">
                  <span>Break Time:</span>
                  <span className="font-medium">5 minutes</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  defaultValue="5"
                  className="w-full"
                />
                
                <div className="flex justify-between text-sm">
                  <span>Long Break After:</span>
                  <span className="font-medium">4 sessions</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  defaultValue="4"
                  className="w-full"
                />
              </div>
              
              <div className="text-center my-6">
                <p className="text-5xl font-bold mb-2">25:00</p>
                <p className="text-sm text-muted-foreground">Session 1/4 (Focus)</p>
              </div>
              
              <div className="flex gap-2">
                <button className="bg-primary text-primary-foreground flex-1 py-2 rounded-md font-medium">
                  Start
                </button>
                <button className="bg-muted text-muted-foreground flex-1 py-2 rounded-md font-medium" disabled>
                  Pause
                </button>
              </div>
            </div>
            
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
              <h3 className="text-xl font-bold mb-4">Level Progress</h3>
              
              <div className="space-y-4">
                <div className="flex flex-col">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-sm">Current: Level 14</span>
                    <span className="font-medium text-sm">2,450 / 3,000 XP</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-purple-500 rounded-full h-2" style={{ width: '82%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-sm">Daily XP Target</span>
                    <span className="font-medium text-sm">85 / 100 XP</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 rounded-full h-2" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-sm">Weekly XP</span>
                    <span className="font-medium text-sm">420 / 700 XP</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 rounded-full h-2" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-color mt-4 pt-4">
                <h4 className="font-medium mb-2">XP Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Study Sessions</span>
                    <span>+325 XP</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completed Topics</span>
                    <span>+200 XP</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consistency Streak</span>
                    <span>+75 XP</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quiz Completions</span>
                    <span>+150 XP</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
              <h3 className="text-xl font-bold mb-4">Efficiency Analysis</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Average Efficiency</span>
                    <span className="text-sm">82%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 rounded-full h-2" style={{ width: '82%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Target Progress</span>
                    <span className="text-sm">5 days ahead of target</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 rounded-full h-2" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Practical Application</span>
                    <span className="text-sm">65%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-yellow-500 rounded-full h-2" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Knowledge Retention</span>
                    <span className="text-sm">78%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 rounded-full h-2" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-color">
              <h3 className="text-xl font-bold mb-4">Learning Habits</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Most Productive Time</span>
                  <span className="font-medium">09:00 - 12:00</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Most Active Day</span>
                  <span className="font-medium">Tuesday</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Average Session Length</span>
                  <span className="font-medium">2h 45m</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Weekly Target</span>
                  <span className="font-medium">8h / 10h</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Focus Score</span>
                  <span className="font-medium">7.8/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
