

const Header = () => {
  return (
    <div className="bg-black px-4 md:px-8 py-4 flex items-center justify-between">
      <div className="flex md:hidden items-center justify-between w-full">
        <div className="flex items-center space-x-6">
          <div className="text-purple-500 text-2xl">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>

          <div className="text-purple-500">
            {/* <Home size={32} strokeWidth={1.5} /> */}
          </div>

          <div className="text-gray-400">
            <div className="border border-gray-600 rounded-md p-1.5">
              {/* <Play size={20} strokeWidth={1.5} /> */}
            </div>
          </div>

          <div className="text-gray-400">
            {/* <Search size={32} strokeWidth={1.5} /> */}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-gray-400">
            {/* <Bell size={28} strokeWidth={1.5} /> */}
          </div>

          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQEfaMXuATBryg/profile-displayphoto-shrink_400_400/B4DZNpwmWbG0Ag-/0/1732646169191?e=1756339200&v=beta&t=cB2Blt5lD-aUnWSr7hO7QttqGYCIqoFYPX-J_xzatUM"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-between w-full">
        <div className="flex items-center space-x-10">
          <div className="text-purple-500 text-2xl">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>

          <div className="relative">
            <div className="text-purple-500 hover:text-purple-400 transition-colors cursor-pointer">
              {/* <Home size={36} strokeWidth={1.5} /> */}
            </div>
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-purple-500 rounded-full"></div>
          </div>

          <div className="text-gray-400 hover:text-gray-300 transition-colors cursor-pointer">
            <div className="border border-gray-600 rounded-lg p-2">
              {/* <Play size={24} strokeWidth={1.5} /> */}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="w-96">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                {/* <Search className="h-6 w-6 text-gray-500" /> */}
              </div>
              <input
                type="text"
                className="block w-full pl-14 pr-14 py-2 border border-gray-700 rounded-full bg-gray-800/40 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-800 focus:ring-1 focus:ring-gray-600 focus:border-gray-600 transition-all text-lg"
                placeholder=""
              />
              <div className="absolute inset-y-0 right-0 pr-5 flex items-center">
                {/* <X className="h-6 w-6 text-gray-500 hover:text-gray-400 cursor-pointer" /> */}
              </div>
            </div>
          </div>

          <div className="text-gray-400 hover:text-gray-300 transition-colors cursor-pointer">
            {/* <Bell size={32} strokeWidth={1.5} /> */}
          </div>

          <div className="w-14 h-14 rounded-full overflow-hidden cursor-pointer">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQEfaMXuATBryg/profile-displayphoto-shrink_400_400/B4DZNpwmWbG0Ag-/0/1732646169191?e=1756339200&v=beta&t=cB2Blt5lD-aUnWSr7hO7QttqGYCIqoFYPX-J_xzatUM"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;