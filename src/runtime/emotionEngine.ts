
const emotionKeywords = {
  anger: ['讨厌','生气','愤怒'],
  sadness: ['难过','痛苦','孤独'],
  affection: ['喜欢','爱','想你']
}

export function detectEmotion(text:string){
  let score = {
    anger:0,
    sadness:0,
    affection:0
  }

  Object.entries(emotionKeywords).forEach(([emotion,words])=>{
    words.forEach(word=>{
      if(text.includes(word)){
        score[emotion as keyof typeof score] += 1
      }
    })
  })

  return score
}
