import User from "../User/User"; // Importing the User component used to display user information.
import UserDetailsHooks from "../Hooks/UserDetails"; // Importing the UserDetailsHooks custom hook.

// UserDetails component takes a prop named UserName.
// eslint-disable-next-line react/prop-types
function UserDetails({ UserName }) {
  // Destructuring the returned values from the UserDetailsHooks custom hook.
  const { UserDetails, isloading } = UserDetailsHooks(UserName);

  return (
    <div>
      <div className="w-full h-full flex flex-wrap justify-evenly items-center mt-9">
        <div className="w-full flex flex-wrap justify-around gap-2">
          {/* Conditional rendering based on the loading state */}
          {isloading ? (
            <h1 className="text-4xl font-bold bg-gradient-to-br from-red-900 to-black bg-clip-text text-transparent">Loading...</h1>
          ) : (
            // Mapping through UserDetails and rendering User components with fetched data.
            UserDetails?.map((t) => {
              return <User image={t.avatar_url} key={t.id} name={t.login} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;

