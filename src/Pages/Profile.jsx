import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, logout, isLoading } = useAuth0();
  console.log(user, isAuthenticated, isLoading);

  return (
    <div className="shadow-2xl shadow-gray-500 rounded-2xl p-5 w-96 m-auto mt-18">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-y-5 text-2xl">
          <img src={user.picture} alt="" className="rounded-full" />
          <h1>Name: {user.name}</h1>
          <h1>Email: {user.email}</h1>
          <button
            onClick={() => {
              logout();
            }}
            className="p-2 bg-orange-500 rounded-2xl text-white"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
