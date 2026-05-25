
export default function SettingsPage(){
return(
<div className="page">
<h1>设置</h1>

<div className="card">
<input placeholder="DeepSeek API"/>
<input placeholder="API Key"/>
<input placeholder="模型名称"/>
<button>保存 API</button>
</div>

<div className="card">
<h3>聊天背景</h3>
<input type="file"/>
</div>
</div>
)
}
