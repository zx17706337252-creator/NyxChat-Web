
export function applyPersonaConstraint({
  character,
  output
}:any){

  if(character.name === '顾澜'){
    output = output.replace(/哈哈/g,'')
  }

  if(character.name === '江凡'){
    output = output.slice(0,120)
  }

  return output
}
