// The User component receives props for image and name.
// eslint-disable-next-line react/prop-types
function User({ image, name }) {
    return (
        <div className="w-[250px] mt-3">
            <div>
                {/* Display the user's avatar image */}
                <img src={image} alt="" className="w-[300px] relative shadow-lg shadow-black" />
                
                {/* Display the user's name */}
                <h1 className="relative bottom-11 bg-white w-max py-1 px-2 rounded-r-full text-xl font-serif">{name}</h1>
            </div>
        </div>
    );
}

export default User;
