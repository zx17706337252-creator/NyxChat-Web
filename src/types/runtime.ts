
export interface MemoryItem {
  id: string
  content: string
  importance: number
  emotion: number
  timestamp: number
}

export interface LorebookEntry {
  id: string
  keywords: string[]
  priority: number
  content: string
}

export interface CharacterRelation {
  targetId: string
  trust: number
  jealousy: number
  affection: number
}
