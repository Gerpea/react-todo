function removeTodo(state, uid) {
  const children = getChildren(state, uid)

  let withoutChild = state
  children.forEach((child) => {
    withoutChild = removeTodo(state, child.uid)
  })

  return withoutChild.reduce((acc, cur) => {
    if (cur.uid !== uid) {
      acc.push(cur)
    }
    return acc
  }, [])
}

function getChildren(state, uid) {
  return state.filter((item) => item.parentUid === uid)
}

function getParentCount(state, uid) {
  const parentUid = state.find((item) => item.uid === uid)?.parentUid
  if (parentUid) {
    return 1 + getParentCount(state, parentUid)
  } else {
    return 0
  }
}

export { removeTodo, getChildren, getParentCount }
