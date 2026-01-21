import React, { useState } from 'react';
import { Home, Bell, Mail, Globe, Heart, MessageCircle, Share2, MoreHorizontal, Image, Film, Tag, FileText, Send, X, Search } from 'lucide-react';
import { AuthProvider } from './provider';
import AuthUI from './Login';
import HomeUi from './Home';

export default function App() {
  const [view, setView] = useState('login');

  return (
    <AuthProvider>
      {
        view === 'login' ? <AuthUI setView={setView} view={view} /> : <HomeUi setView={setView} view={view} />
      }
    </AuthProvider>
  );
}
