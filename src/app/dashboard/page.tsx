import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Dashboard() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  // Mock data for demonstration (replace with actual API/database calls)
  const goals = [
    { id: 1, title: "Learn React", type: "SHORT_TERM", deadline: "2025-06-01", status: "In Progress", progress: 60 },
    { id: 2, title: "Run a Marathon", type: "LONG_TERM", deadline: "2025-12-31", status: "Not Started", progress: 0 },
    { id: 3, title: "Read 12 Books", type: "LONG_TERM", deadline: "2025-12-31", status: "Completed", progress: 100 },
  ];

  const totalGoals = goals.length;
  const completedGoals = goals.filter(goal => goal.status === "Completed").length;
  const averageProgress = goals.length > 0 ? Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length) : 0;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Goal Tracker</h1>
        <nav className="space-y-4">
          <Link href="/dashboard" className="block text-blue-600 font-semibold hover:bg-blue-50 p-2 rounded">
            Dashboard
          </Link>
          <Link href="/goals/create" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded">
            Create Goal
          </Link>
          <Link href="/profile" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded">
            Profile
          </Link>
          <Link href="/sign-out" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded">
            Sign Out
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome, {user.firstName}</h2>
            <Link
              href="/goals/create"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              + New Goal
            </Link>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-700">Total Goals</h3>
              <p className="text-3xl font-bold text-blue-600">{totalGoals}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-700">Completed Goals</h3>
              <p className="text-3xl font-bold text-green-600">{completedGoals}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-700">Average Progress</h3>
              <p className="text-3xl font-bold text-purple-600">{averageProgress}%</p>
            </div>
          </div>

          {/* Goals Table */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Goals</h3>
              {goals.length === 0 ? (
                <p className="text-gray-600">No goals yet. Create one to get started!</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-gray-700">Title</th>
                        <th className="py-3 px-4 text-gray-700">Type</th>
                        <th className="py-3 px-4 text-gray-700">Deadline</th>
                        <th className="py-3 px-4 text-gray-700">Status</th>
                        <th className="py-3 px-4 text-gray-700">Progress</th>
                        <th className="py-3 px-4 text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {goals.map(goal => (
                        <tr key={goal.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-800">{goal.title}</td>
                          <td className="py-3 px-4 text-gray-600">{goal.type.replace("_", " ")}</td>
                          <td className="py-3 px-4 text-gray-600">{goal.deadline || "N/A"}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                goal.status === "Completed"
                                  ? "bg-green-100 text-green-700"
                                  : goal.status === "In Progress"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {goal.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{goal.progress}%</td>
                          <td className="py-3 px-4">
                            <Link
                              href={`/goals/${goal.id}`}
                              className="text-blue-600 hover:underline"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}