import useDebounce from "../../useDebounce/UseDebounce";

// Search component takes a prop named UpdateSearchTerm.
// eslint-disable-next-line react/prop-types
function Search({ UpdateSearchTerm }) {
    // Using the useDebounce hook to debounce the UpdateSearchTerm function call
    const debounceUpdate = useDebounce((e) => UpdateSearchTerm(e.target.value));

    return (
        <div className="w-full flex justify-center">
            {/* Input field for entering a search term */}
            <input
                type="text"
                className="border py-2 px-2 w-[300px] border-black rounded text-xl border-none shadow-md shadow-black focus:shadow-white focus:shadow-md"
                placeholder="Enter Name"
                onChange={debounceUpdate} // Debounced onChange event handler
            />
        </div>
    );
}

export default Search;
