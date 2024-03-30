import Link from "next/link";

export default function Page() {
  return(
    <main className="bg-blue-200 min-h-screen"> 
      
      <ul className="max-w-4xl mx-auto py-16">
        <div className="flex justify-center">
        <div className="flex flex-col">
        <h1 className="text-4xl p-5 mb-10 font-bold text-pink-500" >CPRG-306: Web Development 2 - Assignments</h1>
        <li className="bg-red-500 shadow-lg p-5 mb-10 rounded-md">
        <Link href="week-2"> Week 2 Assignment</Link></li>
        <li className="bg-yellow-500 shadow-lg p-5 mb-10 rounded-md">
        <Link href="week-3"> Week 3 Assignment</Link></li>
        <li className="bg-green-500 shadow-lg p-5 mb-10 rounded-md">
        <Link href="week-4"> Week 4 Assignment</Link></li>
        <li className="bg-purple-500 shadow-lg p-5 mb-10 rounded-md">
        <Link href="week-5"> Week 5 Assignment</Link></li>
        <li className="bg-cyan-500 shadow-lg p-5 mb-10 rounded-md">
        <Link href="week-6"> Week 6 Assignment</Link></li>
        <li className="bg-blue-500 shadow-lg p-5 mb-10 rounded-md">
        <Link href="week-7"> Week 7 Assignment</Link></li>
        <li className="bg-orange-500 shadow-lg p-5 mb-10 rounded-md">
        <Link href="week-8"> Week 8 Assignment</Link></li>
        <li className="bg-indigo-500 shadow-lg p-5 mb-10 rounded-md">
        <Link href="week-10"> Week 10 Assignment</Link></li>        
        </div>
      </div></ul>
    </main>
  );
};