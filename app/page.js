import Link from "next/link";

export default function Page() {
  return(
    <main className="bg-blue-200 min-h-screen"> 
      
      <ul className="max-w-4xl mx-auto py-16">
        <div class="flex justify-center">
        <div class="flex flex-col">
        <p class="text-4xl p-5 mb-10 font-bold text-pink-500">
        <h1 >CPRG-306: Web Development 2 - Assignments</h1></p>

        <li className="bg-red-500 shadow-lg p-5 mb-10 rounded-md">
        <Link href="week-2"> Week 2 Assignments</Link></li>
        <li className="bg-yellow-500 shadow-lg p-5 mb-10 rounded-md">
        <Link href="week-3"> Week 3 Assignments</Link></li>
        <li className="bg-green-500 shadow-lg p-5 mb-10 rounded-md">
        <Link href="week-4"> Week 4 Assignments</Link></li>
        </div>
      </div></ul>
    </main>
  );
};