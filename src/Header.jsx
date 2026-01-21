import React from 'react';

const Header = ({ setShowProfileSlider, showProfileSlider, searchQuery, setSearchQuery, view, setView, unreadNotifications, unreadMessages }) => {
    return (
        <header className="fixed top-0 left-0 right-0 border-b border-gray-800 z-50" style={{ backgroundColor: '#0D0D0D' }}>
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setShowProfileSlider(!showProfileSlider)}
                        className="hover:bg-gray-900 p-2 rounded-lg transition-colors"
                    >
                        <MoreHorizontal className="w-6 h-6" />
                    </button>
                    <h1 className="text-2xl font-bold" style={{ color: '#e8e3d5' }}>
                        Rialo
                    </h1>
                    <div className="relative ml-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search Rialo..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-gray-900 text-white rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:w-80 transition-all"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button
                        onClick={() => setView('home')}
                        className={`hover:bg-gray-900 p-2 rounded-lg transition-colors ${view === 'home' ? 'bg-gray-900 text-blue-500' : ''}`}
                    >
                        <Home className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => setView('notifications')}
                        className={`relative hover:bg-gray-900 p-2 rounded-lg transition-colors ${view === 'notifications' ? 'bg-gray-900 text-blue-500' : ''}`}
                    >
                        <Bell className="w-6 h-6" />
                        {unreadNotifications > 0 && (
                            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {unreadNotifications}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setView('messages')}
                        className={`relative hover:bg-gray-900 p-2 rounded-lg transition-colors ${view === 'messages' ? 'bg-gray-900 text-blue-500' : ''}`}
                    >
                        <Mail className="w-6 h-6" />
                        {unreadMessages > 0 && (
                            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {unreadMessages}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setView('browse')}
                        className={`hover:bg-gray-900 p-2 rounded-lg transition-colors ${view === 'browse' ? 'bg-gray-900 text-blue-500' : ''}`}
                    >
                        <Globe className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;