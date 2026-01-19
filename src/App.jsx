import React, { useState } from 'react';
import { Home, Bell, Mail, Globe, Heart, MessageCircle, Share2, MoreHorizontal, Image, Film, Tag, FileText, Send, X, Search } from 'lucide-react';
import { AuthProvider } from './provider';
import AuthUI from './Login';
import HomeUi from './Home';

export default function App() {
  const [currentPage, setCurrentPage] = useState('auth');

  return (
    <AuthProvider>
      {
        currentPage === 'auth' ? <AuthUI setCurrentPage={setCurrentPage} /> : <HomeUi />
      }
    </AuthProvider>
  );
}
