import React from 'react'
import _ from 'lodash'

import { getSetting } from '../../utils/settingsStorage'
import './css/table.css'

const Table = ({ columns, data, commands }) => {
  const maxTableRecords = getSetting('maxTableRecords')

  if (!data || !maxTableRecords) return null

  const rows = _.take(data, maxTableRecords === 'Unlimited' ? data.length : maxTableRecords)

  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column}>{column.toUpperCase()}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map(column => {
                return <td key={`${index}-${column}`}>{row[column]}</td>
              })}

              {commands && <td className="commands">{commands(row['id'])}</td>}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
