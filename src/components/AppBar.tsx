import { SearchBar } from "./SearchBar"

export const AppBar =() => {
    return (
      <div className="flex justify-between">
        <div className="text-md inline-flex items-center pb-2">Youtube</div>
        <div>
          <SearchBar />
        </div>
        <div className="text-md inline-flex items-center pb-2">Sign In</div>
      </div>
    );
}