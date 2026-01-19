import React, { useState } from 'react';
import { Home, Bell, Mail, Globe, Heart, MessageCircle, Share2, MoreHorizontal, Image, Film, Tag, FileText, Send, X, Search } from 'lucide-react';

export default function HomeUi() {
    const [currentPage, setCurrentPage] = useState('home');
    const [showProfileSlider, setShowProfileSlider] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showComingSoon, setShowComingSoon] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, user: "Aminul Ahmed", action: "liked your post", time: "2h ago", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aminul", unread: true },
        { id: 2, user: "Amina Reza", action: "commented on your photo", time: "5h ago", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina", unread: true },
        { id: 3, user: "Hasan Rahman", action: "shared your post", time: "1d ago", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hasan", unread: false },
        { id: 4, user: "Sarah Khan", action: "started following you", time: "2d ago", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", unread: false },
    ]);

    const [messages, setMessages] = useState([
        { id: 1, user: "Aminul Ahmed", lastMessage: "Hey! How are you doing?", time: "10m ago", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aminul", unread: true },
        { id: 2, user: "Amina Reza", lastMessage: "Thanks for the birthday wishes!", time: "1h ago", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina", unread: true },
        { id: 3, user: "Hasan Rahman", lastMessage: "See you tomorrow!", time: "3h ago", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hasan", unread: false },
        { id: 4, user: "Sarah Khan", lastMessage: "That's awesome!", time: "1d ago", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", unread: false },
    ]);

    const [selectedChat, setSelectedChat] = useState(null);
    const [chatMessages, setChatMessages] = useState({
        1: [
            { text: "Hey! How are you doing?", sender: "them", time: "10m ago" },
            { text: "I'm good! How about you?", sender: "me", time: "9m ago" },
            { text: "Doing great! Want to hang out later?", sender: "them", time: "8m ago" }
        ]
    });
    const [newMessage, setNewMessage] = useState("");

    const [posts, setPosts] = useState([
        {
            id: 1,
            author: "Aminul Ahmed",
            username: "Dhotoin Nuiz O Pel",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aminul",
            content: "Exploring the city!",
            image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80",
            likes: 30,
            comments: 5,
            shares: 2,
            timestamp: "2h ago"
        },
        {
            id: 2,
            author: "Amina Reza",
            username: "Photo 1, OP-in",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina",
            content: "Beautiful evening with friends 😊 #GoodTimes",
            image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80",
            likes: 45,
            comments: 8,
            shares: 3,
            timestamp: "5h ago"
        },
        {
            id: 3,
            author: "Hasan Rahman",
            username: "Bhotoin hut, I nee",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hasan",
            content: "Feeling inspired today! Let's make the most of it. 👍",
            likes: 40,
            comments: 8,
            shares: 3,
            timestamp: "1d ago"
        }
    ]);

    const [browseTopics] = useState([
        { id: 1, name: "Technology", followers: "2.5M", trending: true, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80" },
        { id: 2, name: "Travel", followers: "1.8M", trending: true, image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80" },
        { id: 3, name: "Food & Cooking", followers: "3.2M", trending: false, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" },
        { id: 4, name: "Photography", followers: "1.5M", trending: true, image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&q=80" },
        { id: 5, name: "Fitness", followers: "2.1M", trending: false, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80" },
        { id: 6, name: "Gaming", followers: "4.3M", trending: true, image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80" },
    ]);

    const [postText, setPostText] = useState("");

    const handleLike = (postId) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    const handleSendMessage = () => {
        if (newMessage.trim() && selectedChat) {
            const updatedMessages = {
                ...chatMessages,
                [selectedChat]: [
                    ...(chatMessages[selectedChat] || []),
                    { text: newMessage, sender: "me", time: "Just now" }
                ]
            };
            setChatMessages(updatedMessages);
            setNewMessage("");
        }
    };

    const unreadNotifications = notifications.filter(n => n.unread).length;
    const unreadMessages = messages.filter(m => m.unread).length;

    const handleMenuClick = (menuItem) => {
        setShowComingSoon(true);
        setTimeout(() => setShowComingSoon(false), 2000);
    };

    return (
        <div className="min-h-screen text-white relative" style={{ backgroundColor: '#0D0D0D' }}>
            {/* Background Image */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage: 'url(https://i.postimg.cc/9Xqv5VVc/image.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.15
                }}
            ></div>

            {/* Coming Soon Toast */}
            {showComingSoon && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[60] bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
                    <p className="font-semibold">Coming Soon! 🚀</p>
                </div>
            )}

            {/* Content Overlay */}
            <div className="relative z-10">
                {/* Profile Slider Overlay */}
                {showProfileSlider && (
                    <div
                        className="fixed inset-0 z-50 "
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                        onClick={() => setShowProfileSlider(false)}
                    >
                        <div
                            className="fixed left-0 top-0 bottom-0 w-80 shadow-2xl transform transition-transform duration-300 overflow-y-auto pt-16"
                            style={{ backgroundColor: '#0D0D0D' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Profile Header */}
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 p-0.5">
                                        <img
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Muhtasim"
                                            alt="Profile"
                                            className="w-full h-full rounded-full bg-black"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-lg">Muhtasim Muiz</h2>
                                        <p className="text-gray-400 text-sm">username</p>
                                    </div>
                                </div>

                                <div className="bg-gray-900 bg-opacity-50 rounded-lg p-3 mb-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400 text-sm">Connectivity</span>
                                        <span className="text-blue-400 font-semibold">1500</span>
                                    </div>
                                </div>

                                <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4 mb-6">
                                    <div className="mb-3">
                                        <p className="text-xs text-gray-400 mb-1">NAME: MUHTASIM MUIZ</p>
                                        <p className="text-xs text-gray-400 mb-1">ADDRESS: CHATTOGRAM, CHADGOAN-529, BANGLADESH</p>
                                        <p className="text-xs text-gray-400 mb-3">EMAIL: MUHTASIMMUIZ@GMAIL.COM</p>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-xs text-gray-400">Your activity: Good</p>
                                        <p className="text-xs text-gray-400">Point: 7009</p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Menu */}
                            <nav className="px-4 space-y-2">
                                <button onClick={() => handleMenuClick('Connection')} className="w-full text-left block py-3 px-4 hover:bg-gray-900 rounded-lg">Connection</button>
                                <button onClick={() => handleMenuClick('Communities')} className="w-full text-left block py-3 px-4 hover:bg-gray-900 rounded-lg">Communities</button>
                                <button onClick={() => handleMenuClick('Collection')} className="w-full text-left block py-3 px-4 hover:bg-gray-900 rounded-lg">Collection</button>
                                <button onClick={() => handleMenuClick('Wallet')} className="w-full text-left block py-3 px-4 hover:bg-gray-900 rounded-lg">Wallet</button>
                                <button onClick={() => handleMenuClick('Swap')} className="w-full text-left block py-3 px-4 hover:bg-gray-900 rounded-lg">Swap</button>
                                <button onClick={() => handleMenuClick('Setting')} className="w-full text-left block py-3 px-4 hover:bg-gray-900 rounded-lg">Setting</button>
                            </nav>

                            <div className="px-4 mt-8 pb-6">
                                <button onClick={() => handleMenuClick('Logout')} className="flex items-center gap-3 py-3 px-4 hover:bg-gray-900 rounded-lg w-full">
                                    <span className="text-blue-400">↪</span>
                                    <span>Log out</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Header */}
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
                                onClick={() => setCurrentPage('home')}
                                className={`hover:bg-gray-900 p-2 rounded-lg transition-colors ${currentPage === 'home' ? 'bg-gray-900 text-blue-500' : ''}`}
                            >
                                <Home className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => setCurrentPage('notifications')}
                                className={`relative hover:bg-gray-900 p-2 rounded-lg transition-colors ${currentPage === 'notifications' ? 'bg-gray-900 text-blue-500' : ''}`}
                            >
                                <Bell className="w-6 h-6" />
                                {unreadNotifications > 0 && (
                                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {unreadNotifications}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => setCurrentPage('messages')}
                                className={`relative hover:bg-gray-900 p-2 rounded-lg transition-colors ${currentPage === 'messages' ? 'bg-gray-900 text-blue-500' : ''}`}
                            >
                                <Mail className="w-6 h-6" />
                                {unreadMessages > 0 && (
                                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {unreadMessages}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => setCurrentPage('browse')}
                                className={`hover:bg-gray-900 p-2 rounded-lg transition-colors ${currentPage === 'browse' ? 'bg-gray-900 text-blue-500' : ''}`}
                            >
                                <Globe className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Layout */}
                <div className="max-w-4xl mx-auto pt-16">
                    {/* Main Content Area */}
                    <main className="py-6 px-4">
                        {/* HOME PAGE */}
                        {currentPage === 'home' && (
                            <>
                                {/* Create Post */}
                                <div className="bg-gray-900 rounded-xl p-6 mb-6">
                                    <div className="flex items-start gap-4">
                                        <img
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Muhtasim"
                                            alt="Your avatar"
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                placeholder="What's on your mind?"
                                                value={postText}
                                                onChange={(e) => setPostText(e.target.value)}
                                                className="w-full bg-gray-800 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <div className="flex items-center justify-between">
                                                <div className="flex gap-4">
                                                    <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                                                        <Image className="w-5 h-5" />
                                                        <span>Photo</span>
                                                    </button>
                                                    <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                                                        <Film className="w-5 h-5" />
                                                        <span>Gif</span>
                                                    </button>
                                                    <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                                                        <Tag className="w-5 h-5" />
                                                        <span>Tag</span>
                                                    </button>
                                                </div>
                                                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold">
                                                    Post
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Posts */}
                                {posts.map(post => (
                                    <div key={post.id} className="bg-gray-900 rounded-xl p-6 mb-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={post.avatar}
                                                    alt={post.author}
                                                    className="w-12 h-12 rounded-full"
                                                />
                                                <div>
                                                    <h3 className="font-semibold">{post.author}</h3>
                                                    <p className="text-gray-400 text-sm">{post.username}</p>
                                                </div>
                                            </div>
                                            <button className="text-gray-400 hover:text-white">
                                                <MoreHorizontal className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <p className="mb-4">{post.content}</p>

                                        {post.image && (
                                            <img
                                                src={post.image}
                                                alt="Post content"
                                                className="w-full rounded-xl mb-4"
                                            />
                                        )}

                                        <div className="flex items-center gap-6 text-gray-400">
                                            <button
                                                onClick={() => handleLike(post.id)}
                                                className="flex items-center gap-2 hover:text-red-500 transition-colors"
                                            >
                                                <Heart className="w-5 h-5" />
                                                <span>{post.likes}</span>
                                            </button>
                                            <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                                                <MessageCircle className="w-5 h-5" />
                                                <span>{post.comments}</span>
                                            </button>
                                            <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
                                                <Share2 className="w-5 h-5" />
                                                <span>{post.shares}</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}

                        {/* NOTIFICATIONS PAGE */}
                        {currentPage === 'notifications' && (
                            <div className="bg-gray-900 rounded-xl p-6">
                                <h2 className="text-2xl font-bold mb-6">Notifications</h2>
                                <div className="space-y-4">
                                    {notifications.map(notif => (
                                        <div
                                            key={notif.id}
                                            className={`flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800 transition-colors ${notif.unread ? 'bg-gray-800' : ''}`}
                                        >
                                            <img
                                                src={notif.avatar}
                                                alt={notif.user}
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div className="flex-1">
                                                <p className="text-white">
                                                    <span className="font-semibold">{notif.user}</span>
                                                    {' '}{notif.action}
                                                </p>
                                                <p className="text-gray-400 text-sm">{notif.time}</p>
                                            </div>
                                            {notif.unread && (
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* MESSAGES PAGE */}
                        {currentPage === 'messages' && (
                            <div className="bg-gray-900 rounded-xl overflow-hidden" style={{ height: 'calc(100vh - 120px)' }}>
                                <div className="flex h-full">
                                    {/* Messages List */}
                                    <div className="w-80 border-r border-gray-800 overflow-y-auto">
                                        <div className="p-4 border-b border-gray-800">
                                            <h2 className="text-xl font-bold">Messages</h2>
                                        </div>
                                        <div>
                                            {messages.map(msg => (
                                                <div
                                                    key={msg.id}
                                                    onClick={() => setSelectedChat(msg.id)}
                                                    className={`flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-800 transition-colors ${selectedChat === msg.id ? 'bg-gray-800' : ''}`}
                                                >
                                                    <img
                                                        src={msg.avatar}
                                                        alt={msg.user}
                                                        className="w-12 h-12 rounded-full"
                                                    />
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between mb-1">
                                                            <h3 className="font-semibold truncate">{msg.user}</h3>
                                                            {msg.unread && (
                                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                            )}
                                                        </div>
                                                        <p className="text-gray-400 text-sm truncate">{msg.lastMessage}</p>
                                                        <p className="text-gray-500 text-xs mt-1">{msg.time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Chat Area */}
                                    <div className="flex-1 flex flex-col">
                                        {selectedChat ? (
                                            <>
                                                {/* Chat Header */}
                                                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src={messages.find(m => m.id === selectedChat)?.avatar}
                                                            alt="User"
                                                            className="w-10 h-10 rounded-full"
                                                        />
                                                        <h3 className="font-semibold">{messages.find(m => m.id === selectedChat)?.user}</h3>
                                                    </div>
                                                </div>

                                                {/* Messages */}
                                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                                    {(chatMessages[selectedChat] || []).map((msg, idx) => (
                                                        <div key={idx} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                                            <div className={`max-w-xs px-4 py-2 rounded-2xl ${msg.sender === 'me' ? 'bg-blue-600' : 'bg-gray-800'}`}>
                                                                <p>{msg.text}</p>
                                                                <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Message Input */}
                                                <div className="p-4 border-t border-gray-800">
                                                    <div className="flex gap-2">
                                                        <input
                                                            type="text"
                                                            value={newMessage}
                                                            onChange={(e) => setNewMessage(e.target.value)}
                                                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                                            placeholder="Type a message..."
                                                            className="flex-1 bg-gray-800 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        />
                                                        <button
                                                            onClick={handleSendMessage}
                                                            className="bg-blue-600 hover:bg-blue-700 rounded-full p-2 transition-colors"
                                                        >
                                                            <Send className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex-1 flex items-center justify-center text-gray-400">
                                                <p>Select a conversation to start messaging</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* BROWSE PAGE */}
                        {currentPage === 'browse' && (
                            <>
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold mb-2">Explore Topics</h2>
                                    <p className="text-gray-400">Discover communities and trending topics</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {browseTopics.map(topic => (
                                        <div key={topic.id} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform cursor-pointer">
                                            <div className="relative h-40">
                                                <img
                                                    src={topic.image}
                                                    alt={topic.name}
                                                    className="w-full h-full object-cover"
                                                />
                                                {topic.trending && (
                                                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                                                        Trending
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-bold text-lg mb-1">{topic.name}</h3>
                                                <p className="text-gray-400 text-sm">{topic.followers} followers</p>
                                                <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold transition-colors">
                                                    Follow
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
