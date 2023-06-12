const findById = (resources, id) => {
  if (!resources) return null
  return resources.find((r) => r.id === id)
}

const upsert = (resources, newResource) => {
  const idx = resources.findIndex((r) => r.id === newResource.id)
  if (newResource.id && idx !== -1) {
    resources[idx] = newResource
  } else {
    resources.push(newResource)
  }
}

const guidGenerator = () => {
  const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
}

const appendChildToParent = ({ child }) => {
  return (resources, { parentId, childId }) => {
    const resource = findById(resources, parentId)
    resource[child] = resource[child] || []
    if (!resource[child].includes(childId)) {
      resource[child].push(childId)
    }
  }
}

export { findById, upsert, guidGenerator, appendChildToParent }
