
export default function CharactersPage(){
return(
<div className="page">
<h1>角色</h1>

<div className="card">
<input placeholder="角色名"/>
<input placeholder="年龄"/>
<input placeholder="身高"/>
<input placeholder="体重"/>
<input placeholder="国籍"/>
<input placeholder="职业"/>

<textarea placeholder="外貌描述"/>
<textarea placeholder="关系"/>
<textarea placeholder="喜好"/>
<textarea placeholder="厌恶"/>
<textarea placeholder="秘密"/>
<textarea placeholder="Few-shot 对话示例"/>

<input type="file"/>

<div>◉ 12条记忆</div>

<button>保存角色</button>
</div>
</div>
)
}
