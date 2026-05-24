
export default function SettingsPage() {
  return (
    <div className="page">
      <h1>API 设置</h1>

      <div className="card">
        <input placeholder="Base URL" />
        <input placeholder="API Key" />
        <input placeholder="Model" />

        <button>保存配置</button>
      </div>
    </div>
  )
}
