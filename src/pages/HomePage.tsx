
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="page">
      <h1>NyxChat</h1>

      <div className="card">
        <h2>AI 角色群聊系统</h2>
        <p>支持多角色、世界书、API 配置。</p>

        <Link to="/characters">
          <button>进入角色管理</button>
        </Link>

        <Link to="/settings">
          <button>API 设置</button>
        </Link>
      </div>

      <div className="card">
        <h2>群聊示例</h2>
        <p>@顾澜 你怎么看？</p>
      </div>
    </div>
  )
}
