import React from "react";
import photo from "../assets/profile.jpg";
export default function Card({
  username = "Not available",
  bio = "Not available",
}) {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={photo} alt="profile" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {username}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
}
