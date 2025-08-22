// src/components/Topbar.jsx
const Topbar = () => {
  return (
    <div className="w-full bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Welcome back, Zarjit</h1>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1"
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded">+ Create New Order</button>
      </div>
    </div>
  );
};

export default Topbar;
