
import { MemoryItem } from '../types/runtime'

export function scoreMemory(content:string){
  let importance = 1

  if(content.includes('第一次')) importance += 5
  if(content.includes('喜欢')) importance += 3
  if(content.includes('恨')) importance += 4

  return importance
}

export function createMemory(content:string):MemoryItem{
  return {
    id: crypto.randomUUID(),
    content,
    importance: scoreMemory(content),
    emotion: 0,
    timestamp: Date.now()
  }
}

export function selectRelevantMemories(
  input:string,
  memories:MemoryItem[]
){
  return memories
    .filter(m =>
      input.includes(m.content.slice(0,2))
    )
    .sort((a,b)=>b.importance-a.importance)
    .slice(0,5)
}
