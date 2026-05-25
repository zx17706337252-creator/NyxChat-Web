
export async function chat(messages:any[]){
const res = await fetch('https://api.deepseek.com/v1/chat/completions',{
method:'POST',
headers:{
'Content-Type':'application/json',
'Authorization':'Bearer YOUR_API_KEY'
},
body:JSON.stringify({
model:'deepseek-chat',
messages
})
})

return res.json()
}
