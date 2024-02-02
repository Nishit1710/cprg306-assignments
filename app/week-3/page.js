import ItemList from "./item-list.js";

export default function Page() {
    return (
      <main>
        <div className= "flex justify-center">
        <div className="py-8"></div>
        <p className="text-5xl">
        <div>
        <h1>Shopping List</h1>
        </div></p></div>
        <ItemList />
      </main>
    );
};