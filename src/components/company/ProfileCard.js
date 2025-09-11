export default function ProfileCard({profile}) {


    return (
        <div className=" mx-auto bg-[#0f172a] rounded-2xl shadow-lg overflow-hidden">
            {/* Top Section */}
            <div className="flex items-center justify-between p-6 bg-[#1e293b]">
                <div className="flex items-center space-x-4">
                    {/* Avatar */}
                    <div className="h-16 w-16 rounded-full overflow-hidden border border-gray-600">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="User Avatar"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* User Info */}
                    <div>
                        <p className="text-sm text-gray-400">Company Profile ,</p>
                        <h2 className="text-xl font-bold text-white">{profile.username}</h2>
                        <p className="text-sm text-gray-400">Product Designer</p>
                    </div>
                </div>

                {/* Button */}
                <button className="px-4 py-2 text-sm font-medium bg-[#0f172a] text-white rounded-md hover:bg-[#1e293b]">
                    View profile
                </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 divide-x divide-gray-700 bg-[#0f172a] text-center">
                <div className="p-4">
                    <span className="font-bold text-white">12</span>
                    <p className="text-sm text-gray-400">Vacation days left</p>
                </div>
                <div className="p-4">
                    <span className="font-bold text-white">4</span>
                    <p className="text-sm text-gray-400">Sick days left</p>
                </div>
                <div className="p-4">
                    <span className="font-bold text-white">2</span>
                    <p className="text-sm text-gray-400">Personal days left</p>
                </div>
            </div>
        </div>
    );
}
