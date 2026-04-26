import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <p className="inline-block px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm mb-6">
          🚀 Powered by Better Auth + MongoDB
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build Secure Apps <br />
          <span className="text-purple-500">With Better Auth</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Modern authentication system with Next.js App Router — sessions,
          protection, and dashboard out of the box.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/signUp"
            className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700"
          >
            Get Started →
          </Link>

          <Link
            href="/login"
            className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 w-10/12 mx-auto pb-20">
        <div className="p-6 bg-white/5 rounded-2xl backdrop-blur">
          <h3 className="text-lg font-semibold mb-2">🔐 Session Auth</h3>
          <p className="text-gray-400 text-sm">
            Secure cookie-based sessions with middleware protection.
          </p>
        </div>

        <div className="p-6 bg-white/5 rounded-2xl backdrop-blur">
          <h3 className="text-lg font-semibold mb-2">🗄 MongoDB Atlas</h3>
          <p className="text-gray-400 text-sm">
            Store users, sessions and data with flexible schema.
          </p>
        </div>

        <div className="p-6 bg-white/5 rounded-2xl backdrop-blur">
          <h3 className="text-lg font-semibold mb-2">📊 Dashboard</h3>
          <p className="text-gray-400 text-sm">
            Protected dashboard only for authenticated users.
          </p>
        </div>
      </section>
    </div>
  );
}
