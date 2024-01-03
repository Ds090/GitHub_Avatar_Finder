import { useEffect, useState } from "react";

// UserDetailsHooks is a custom React hook that retrieves user details from the GitHub API.
// It takes a UserName parameter to search for a specific user. If UserName is not provided, it defaults to "Farman".
function UserDetailsHooks(UserName) {
  // State variables using the useState hook to manage state within the functional component.
  const [UserDetails, setphotoData] = useState([]); // Holds user details fetched from the API.
  const [query] = useState("Farman"); // Default search query term.
  const [isloading, setisloading] = useState(true); // Indicates whether data is being fetched.

  // Function to fetch user data from the GitHub API based on the provided UserName or default query term.
    async function DownloadData(){
    setisloading(true); // Set loading state to true while fetching data.

    if (UserName) {
      try {
        // Fetch data based on the provided UserName parameter.
        const response = await fetch(`https://api.github.com/search/users?q=${UserName}`);
        const data = await response.json();
        setphotoData(data.items); // Update UserDetails state with fetched user data.
      } catch (error) {
        console.log("Error while fetching Data", error.message);
      }
    } else {
      try {
        // Fetch data based on the default query term if UserName is not provided.
        const response = await fetch(`https://api.github.com/search/users?q=${query || "Farman"}`);
        const data = await response.json();
        setphotoData(data.items); // Update UserDetails state with fetched user data.
      } catch (error) {
        alert("Error while fetching Data", error.message);
      }
    }
    setisloading(false); // Set loading state to false after fetching data.
  }

  // useEffect hook to perform side effects in the functional component.
  useEffect(() => {
    DownloadData(); // Call the getData function when the component mounts or when the query state changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]); // Re-run the effect if the 'query' state changes.

  // Return UserDetails and isloading state variables to be used in the component consuming this hook.
  return { UserDetails, isloading };
}

export default UserDetailsHooks;
