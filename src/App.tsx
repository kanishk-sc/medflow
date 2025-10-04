import { Calendar, Mic, Building2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f3]">
      {/* Hero Section */}
      <main className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24">
          {/* Main Heading */}
          <div className="text-center mb-12 mt-16">
            <h1 className="text-[120px] leading-[0.9] mb-8 font-serif">
              <span className="px-4 rounded-2xl text-white" style={{ backgroundColor: 'rgb(0, 77, 73)' }}>MedFlow</span>
            </h1>
            <h2 className="text-[80px] leading-[0.9] mb-8 font-serif">
              <span className="text-gray-400">Don't type,</span>
              <span className="text-black"> just speak</span>
            </h2>

            <p className="text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              An AI-powered assistant that uses voice, automation, and intelligent agents to handle doctors' non-medical tasks — from scheduling to summaries to hospital logistics.
            </p>

            <button className="px-8 py-3 bg-[#e9d5ff] border-2 border-black rounded-lg font-medium text-lg hover:bg-[#dfc8f7] inline-flex items-center gap-2">
              Login
            </button>
          </div>

          {/* Features Section */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tile 1 - Smart Appointment Scheduling */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Smart Appointment Scheduling</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Book, reschedule, and confirm appointments automatically with AI that handles calendars, rooms, and notifications.
              </p>
              <div className="rounded-3xl p-8 flex-1 flex items-center justify-center" style={{ backgroundColor: 'rgb(0, 77, 73)' }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-xs">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-gray-700" />
                    <span className="text-sm font-medium">Calendar</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-blue-200 rounded w-3/4"></div>
                    <div className="h-3 bg-blue-200 rounded w-1/2"></div>
                    <div className="h-3 bg-blue-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tile 2 - Real-Time AI Note Taking */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Mic className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Real-Time AI Note Taking</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Automatically capture and summarize doctor–patient conversations into structured medical notes using voice and LLMs.
              </p>
              <div className="rounded-3xl p-8 flex-1 flex items-center justify-center" style={{ backgroundColor: 'rgb(0, 77, 73)' }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-xs">
                  <div className="mb-4">
                    <Mic className="w-5 h-5 text-blue-500 mb-2" />
                    <p className="text-xs text-gray-500 mb-2">Recording conversation...</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Patient:</span>
                      <div className="h-2 bg-gray-200 rounded w-full mt-1"></div>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Doctor:</span>
                      <div className="h-2 bg-gray-200 rounded w-4/5 mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tile 3 - Intelligent Hospital Operations */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Intelligent Hospital Operations</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Automate room allocation, budgeting, and hospital logistics with AI agents that coordinate labs, staff, and reports.
              </p>
              <div className="rounded-3xl p-8 flex-1 flex items-center justify-center" style={{ backgroundColor: 'rgb(0, 77, 73)' }}>
                <div className="relative w-full max-w-xs h-48">
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg">
                    <Building2 className="w-8 h-8 text-gray-700" />
                  </div>
                  <div className="absolute right-2 top-4 bg-white rounded-xl p-3 shadow-lg w-28">
                    <div className="h-2 bg-blue-200 rounded mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-xl p-3 shadow-lg w-28">
                    <div className="h-2 bg-green-200 rounded mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="absolute right-2 bottom-4 bg-white rounded-xl p-3 shadow-lg w-28">
                    <div className="h-2 bg-purple-200 rounded mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                  </div>
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                    <line x1="25%" y1="50%" x2="60%" y2="25%" stroke="white" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
                    <line x1="25%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
                    <line x1="25%" y1="50%" x2="60%" y2="75%" stroke="white" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;

export default App