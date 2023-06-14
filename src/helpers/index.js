import { db } from '@/config/firebase'
import { doc, collection, query, where, getDoc, getDocs } from 'firebase/firestore'

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

const getFirestoreDoc = async ({ collection, id }) => {
  const docRef = doc(db, collection, id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const resource = { ...docSnap.data(), id: docSnap.id }
    return resource
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!')
  }
}

const getFirestoreDocs = async ({ path, fieldPath, id }) => {
  let q
  if (id) {
    q = query(collection(db, path), where(fieldPath, '==', id))
  } else {
    q = query(collection(db, path))
  }
  const querySnapshot = await getDocs(q)
  const resources = []
  querySnapshot.forEach((doc) => {
    const resource = { ...doc.data(), id: doc.id }
    resources.push(resource)
  })
  return resources
}

export { findById, upsert, guidGenerator, appendChildToParent, getFirestoreDoc, getFirestoreDocs }
