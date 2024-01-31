import Link from "next/link";

export default function Page() {
  return(
    <main >
      
      <ul><div class= "flex justify-center">
        <div class="flex flex-col">
        <div class="py-11"></div>
        <p class="text-4xl">
        <h1 >CPRG-306: Web Development 2 - Assignments</h1></p>

        <li className="bg-white-500 p-5 mb-10 square-md">
        <Link href="week-2"> Week 2 Assignments</Link></li>
        <li className="bg-white-500 p-5 mb-10 square-md">
        <Link href="week-3"> Week 3 Assignments</Link></li>
        </div>
      </div></ul>
    </main>
  );
};