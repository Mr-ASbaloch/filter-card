export default function App() {
  return (
    <>
      <div className="main-div flex-col justify-start px-5 capitalize border shadow-md w-1/4 h-full p-5 rounded-md">
        <h1 className="mb-2 font-semibold">Date Posted</h1>
        <form className="flex flex-col mb-5 ">
          <div className="flex gap-2">
            <input type="radio" name="filter" id="" />
            <label htmlFor="">any</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" name="filter" id="" />
            <label htmlFor="">past Week</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" name="filter" id="" />
            <label htmlFor="">past month</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" name="filter" id="" />
            <label htmlFor="">past 24 hours</label>
          </div>
        </form>
        <h1 className="mb-3 font-semibold">experience Level</h1>
        <div className="grid grid-cols-2 gap-2 w-full">
          <button className="bg-gray-100 rounded-md  p-1 text-center capitalize w-[120px] mx-auto ">
            internship
          </button>
          <button className="bg-black rounded-md capitalize text-center p-1 px-3 w-[120px] mx-auto text-white">
            entry level
          </button>
          <button className="bg-gray-100 rounded-md  p-1 text-center capitalize w-[120px] mx-auto ">
            mid level
          </button>
          <button className="bg-gray-100 rounded-md  p-1 text-center capitalize w-[120px] mx-auto ">
            senior level
          </button>
          <button className="bg-gray-100 rounded-md  p-1 text-center capitalize w-[120px] mx-auto ">
            associate level
          </button>
          <button className="bg-gray-100 rounded-md  p-1 text-center capitalize w-[120px] mx-auto ">
            director level
          </button>
          <button className="bg-gray-100 rounded-md  p-1 text-center capitalize w-[120px] mx-auto ">
            executive level
          </button>
        </div>
        <h1 className="mb-3 font-semibold mt-3">Working Type</h1>
        <div className=" w-full border-b pb-5  flex gap-2">
          <button className="bg-gray-100 rounded-md  p-1 text-center capitalize w-[120px] mx-auto ">
            onsite
          </button>
          <button className="bg-black rounded-md  text-white p-1 text-center capitalize w-[120px] mx-auto ">
            remote
          </button>
          <button className="bg-gray-100 rounded-md  p-1 text-center capitalize w-[120px] mx-auto ">
            hybrid
          </button>
        </div>

        <div className="grid grid-cols-2 w-full mb-5 gap-2 mt-5">
          <button className="border border-[#FF7A22] rounded-md  p-1 text-center capitalize w-[120px] mx-auto ">
            Clear filter
          </button>
          <button className="bg-[#FF7A22] rounded-md  text-white p-1 text-center capitalize w-[120px] mx-auto ">
            apply
          </button>
        </div>
      </div>
    </>
  );
}
