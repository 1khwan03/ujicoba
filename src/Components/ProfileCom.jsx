import React from "react";

const ProfileCom = () => {
  return (
    <div className="min-h-screen bg-[#f3e2cf] flex justify-center items-center">
      <div className="bg-[#f3e2cf] p-10 rounded-lg max-w-4xl w-full flex">
        <div className="w-1/2 pr-5">
          <h2 className="text-2xl font-bold mb-5">Edit Profile</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 block bg-[#f3e2cf] w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="mt-1 block bg-[#f3e2cf] w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="JohnDoe"
                className="mt-1 block bg-[#f3e2cf] w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Input your phone number here"
                className="mt-1 block bg-[#f3e2cf] w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                placeholder="Input your address here"
                className="mt-1 block bg-[#f3e2cf] w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-black text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
          </form>
        </div>
        <div className="w-1/2 pl-5">
          <h2 className="text-2xl font-bold mb-5">Change Password</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                placeholder="Input your current password here"
                className="mt-1 block bg-[#f3e2cf] w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                placeholder="Input your new password here"
                className="mt-1 block bg-[#f3e2cf] w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your new password here"
                className="mt-1 block bg-[#f3e2cf] w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-black text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileCom;
