import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

const Form = ({ initialData, children, onSubmit, onClose }) => {
  const [data, setData] = useState(initialData)

  const handleChanged = (key, value) => setData(prev => ({ ...prev, [key]: value }))

  return (
    <div>
      <div>{children({ data, onChange: handleChanged })}</div>

      {onClose && (
        <Button color="default" onClick={onClose}>
          Close
        </Button>
      )}
      <Button color="primary" onClick={() => onSubmit(data)}>
        Submit
      </Button>
    </div>
  )
}

export default Form
