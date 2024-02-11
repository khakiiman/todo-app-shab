import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-violet-800 to-pink-400 text-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md mx-auto p-6 rounded-lg bg-gray-900 bg-opacity-80 shadow-xl">
        <>
        <div className="flex items-center mb-6">
              <div className="flex flex-col items-center gap-4 ml-4">
                <h1 className="text-xl xs:text-3xl font-bold">Todo Task For Shab.ir</h1>
                <h2 className="text-md xs:text-xl">Iman K. Arvand</h2>
              </div>
            </div>

          <div className="flex justify-center space-x-4">
            <Link href="/todos">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded">
                Add Todos
              </button>
            </Link>
          </div>
        </>
      </div>
    </div>
  );
}
