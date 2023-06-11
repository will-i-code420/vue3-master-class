const findById = (resources, id) => resources.find((r) => r.id === id)

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

export { findById, upsert, guidGenerator }
