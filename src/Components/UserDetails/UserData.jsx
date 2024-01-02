import { useEffect, useState } from "react";
import Search from "../Search/Search";
import UserDetails from "./UserDetails";

function UserData() {
    const [searchTerm, setSearchterm] = useState('');

    useEffect(() => {
        // This useEffect is triggered whenever the searchTerm state changes.
        // You can perform actions here based on the search term change.
        // As it stands, the useEffect block is currently empty.
    }, [searchTerm]);

    return (
        <div className="py-5 w-full h-screen">
            {/* Render the Search component and pass UpdateSearchTerm as a prop */}
            <Search UpdateSearchTerm={setSearchterm} />
            
            {/* Conditionally render UserDetails based on the search term */}
            {searchTerm === '' ? <UserDetails /> : <UserDetails key={searchTerm} UserName={searchTerm} />}
        </div>
    );
}

export default UserData;
