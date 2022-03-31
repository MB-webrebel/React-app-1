const usersKey = 'users'

const defaultUsers = [
  {
    id: 1,
    firstName: 'Tonco',
    lastName: 'Coder',
    createdDate: new Date('2021-02-28').toISOString(),
  },
  { id: 2, firstName: 'John', lastName: 'Doe', createdDate: new Date().toISOString() },
]

export const getAllUsers = () => {
  const users = localStorage.getItem(usersKey)
  return users ? JSON.parse(users) : defaultUsers
}

export const addUser = user => {
  const users = getAllUsers()
  const newUser = { ...user, id: users.length ? users[users.length - 1].id + 1 : 1 }
  const newUsers = [...users, newUser]

  localStorage.setItem(usersKey, JSON.stringify(newUsers))
}

export const deleteUser = id => {
  const users = getAllUsers()
  const newUsers = users.filter(x => x.id !== id)

  localStorage.setItem(usersKey, JSON.stringify(newUsers))
}

export const getUser = id => {
  const users = getAllUsers()
  return users.find(x => x.id === id)
}

export const updateUser = user => {
  const users = getAllUsers()
  const newUsers = users.map(x =>
    x.id === user.id ? { ...x, ...user, createdDate: x.createdDate } : x,
  )

  localStorage.setItem(usersKey, JSON.stringify(newUsers))
}
