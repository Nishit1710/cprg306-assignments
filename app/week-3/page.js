import ItemList from "./item-list.js";

export default function Page() {
    return (
      <main>
        <div class= "flex justify-center">
        <div class="py-8"></div>
        <p class="text-5xl">
        <div>
        <h1>Shopping List</h1>
        </div></p></div>
        <ItemList />
      </main>
    );
};