
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ChatPage from './pages/ChatPage'
import CharactersPage from './pages/CharactersPage'
import LorebookPage from './pages/LorebookPage'
import KnowledgePage from './pages/KnowledgePage'
import SettingsPage from './pages/SettingsPage'

export default function App(){
return(
<BrowserRouter>
<div className="layout">

<Routes>
<Route path="/" element={<ChatPage/>}/>
<Route path="/characters" element={<CharactersPage/>}/>
<Route path="/lorebook" element={<LorebookPage/>}/>
<Route path="/knowledge" element={<KnowledgePage/>}/>
<Route path="/settings" element={<SettingsPage/>}/>
</Routes>

<nav className="bottom-nav">
<Link to="/">对话</Link>
<Link to="/characters">角色</Link>
<Link to="/lorebook">世界书</Link>
<Link to="/knowledge">知识库</Link>
<Link to="/settings">设置</Link>
</nav>

</div>
</BrowserRouter>
)
}
