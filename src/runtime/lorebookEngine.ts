
import { LorebookEntry } from '../types/runtime'

export function matchLorebooks(
  input:string,
  entries:LorebookEntry[]
){
  return entries
    .filter(entry =>
      entry.keywords.some(keyword =>
        input.includes(keyword)
      )
    )
    .sort((a,b)=>b.priority-a.priority)
}
