
import { detectEmotion } from './emotionEngine'
import { matchLorebooks } from './lorebookEngine'
import { selectRelevantMemories } from './memoryManager'

export function buildPrompt({
  input,
  character,
  lorebooks,
  memories,
  history
}:any){

  const emotions = detectEmotion(input)

  const matchedLorebooks =
    matchLorebooks(input,lorebooks)

  const matchedMemories =
    selectRelevantMemories(input,memories)

  return [
    {
      role:'system',
      content:`
角色人格:
${character.personality}

当前情绪:
${JSON.stringify(emotions)}

相关记忆:
${matchedMemories.map((m:any)=>m.content).join('\n')}

世界书:
${matchedLorebooks.map((l:any)=>l.content).join('\n')}
`
    },

    ...history,

    {
      role:'user',
      content:input
    }
  ]
}
