import { useState } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import { Title, Table } from '../components'
import AddOrUpdateUser from './AddOrUpdateUser'
import { getAllUsers, getUser, addUser, deleteUser, updateUser } from '../utils/userStorage'

const columns = ['firstName', 'lastName']

const Users = () => {
  const [users, setUsers] = useState(getAllUsers())
  const [addOrUpdateUser, setAddOrUpdateUser] = useState()

  const handleDeleteUser = id => {
    if (!window.confirm('Are you sure?')) return

    deleteUser(id)
    setUsers(getAllUsers())
  }

  const handleAddOrUpdateUser = user => {
    if (user.id) updateUser(user)
    else addUser(user)

    setUsers(getAllUsers())
    setAddOrUpdateUser(undefined)
  }

  const showAddOrUpdateUserForm = id => {
    const emptyUser = { firstName: '', lastName: '', createdDate: new Date().toISOString() }

    if (!id) setAddOrUpdateUser(emptyUser)
    else setAddOrUpdateUser(getUser(id))
  }

  const commands = id => (
    <>
      <EditIcon color="primary" onClick={() => showAddOrUpdateUserForm(id)} />
      <DeleteIcon onClick={() => handleDeleteUser(id)} color="error" />
    </>
  )

  if (addOrUpdateUser)
    return (
      <AddOrUpdateUser
        user={addOrUpdateUser}
        onSubmit={handleAddOrUpdateUser}
        onClose={() => setAddOrUpdateUser(undefined)}
      />
    )

  return (
    <>
      <Title text="Users" />

      <Button
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => showAddOrUpdateUserForm(undefined)}
      >
        Add
      </Button>

      <Table columns={columns} data={users} commands={commands} />
    </>
  )
}

export default Users
