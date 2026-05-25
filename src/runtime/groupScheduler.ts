
export function scheduleSpeakers({
  userInput,
  characters,
  relations,
  lastSpeaker
}:any){

  const scored = characters.map((c:any)=>{

    let score = 0

    if(userInput.includes(c.name)){
      score += 100
    }

    if(c.id === lastSpeaker){
      score -= 20
    }

    const relation = relations[c.id]

    if(relation?.affection > 50){
      score += 10
    }

    return {
      character:c,
      score
    }
  })

  scored.sort((a:any,b:any)=>b.score-a.score)

  return {
    main: scored[0]?.character,
    interrupt: scored[1]?.score > 20
      ? scored[1]?.character
      : null
  }
}
