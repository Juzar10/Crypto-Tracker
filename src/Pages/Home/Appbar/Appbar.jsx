import Searchbar from "./Search Bar/Searchbar";

export default function Appbar() {
  return (
    <div className="w-full h-24 flex justify-center">
      <div className="w-5/6 border-b border-b-bordercolor flex items-center justify-center">
        <div className=" items-center flex w-5/6 justify-between">
          <p className="font-mono text-textcolor text-xl inline-block align-middle ">
            Crypto Tracker
          </p>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}
