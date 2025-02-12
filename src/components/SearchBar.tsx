export default function SearchBar() {
    return (
      <div className="p-4 flex items-center border rounded-lg mt-4">
        <input type="text" placeholder="Search here" className="flex-grow p-2 outline-none" />
        <button className="p-2 text-blue-500">
          🔍
        </button>
      </div>
    );
  }