import SearchBar from "@/components/Atoms/SearchBar/SearchBar";

const ServiceAndProduct = () => {
  return (
    <div>
      <div className="flex justify-between p-2">
        <div className="flex gap-2">
          <input
            id="searchByName"
            type="radio"
            name="searchtype"
            className="accent-black cursor-pointer"
          />
          <label htmlFor="searchByName" className="cursor-pointer">
            Search by name
          </label>
        </div>
        <div className="flex gap-2">
          <input
            id="searchByTag"
            type="radio"
            name="searchtype"
            className="accent-black cursor-pointer"
          />
          <label htmlFor="searchByTag" className="cursor-pointer">
            Search by tags
          </label>
        </div>
        <div></div>
      </div>

      <SearchBar placeholder="Search service name" />
    </div>
  );
};

export default ServiceAndProduct;
