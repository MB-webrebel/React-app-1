import React from 'react'
import TextField from '@material-ui/core/TextField'

import { Title, Form } from '../components'
import './css/addOrUpdateUser.css'

const AddOrUpdateUser = ({ user, onSubmit, onClose }) => {
  const { id, firstName, lastName, createdDate } = user

  return (
    <>
      <Title text={id ? `Update user: ${firstName}` : 'Add new user'} />

      <Form
        initialData={{ id, firstName, lastName, createdDate }}
        onSubmit={onSubmit}
        onClose={onClose}
      >
        {({ data, onChange }) => {
          return (
            <div className="form-content">
              <TextField
                label="First name"
                value={data['firstName']}
                onChange={e => onChange('firstName', e.target.value)}
                fullWidth
              />
              <TextField
                label="Name"
                value={data['lastName']}
                onChange={e => onChange('lastName', e.target.value)}
                fullWidth
              />
              <TextField
                label="Created date"
                value={data['createdDate']}
                onChange={() => {}}
                disabled
                fullWidth
              />
            </div>
          )
        }}
      </Form>
    </>
  )
}

export default AddOrUpdateUser
