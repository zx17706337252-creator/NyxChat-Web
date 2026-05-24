
import { useState } from 'react'

export default function CharactersPage() {
  const [name, setName] = useState('')
  const [personality, setPersonality] = useState('')

  return (
    <div className="page">
      <h1>角色管理</h1>

      <div className="card">
        <input
          placeholder="角色名字"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <textarea
          placeholder="角色人格"
          value={personality}
          onChange={(e)=>setPersonality(e.target.value)}
        />

        <button>创建角色</button>
      </div>
    </div>
  )
}
