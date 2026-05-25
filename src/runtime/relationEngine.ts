
export function updateRelationship({
  current,
  event
}:any){

  if(event === 'protect'){
    current.trust += 5
    current.affection += 3
  }

  if(event === 'ignore'){
    current.affection -= 2
  }

  if(event === 'favor_other'){
    current.jealousy += 4
  }

  return current
}
