import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { Title, Form } from '../components'
import { getSettings, updateSettings } from '../utils/settingsStorage'
import './css/settings.css'

const possibleMaxTableRecords = ['Unlimited', 5, 10]
const possibleDashboardTimelines = ['days', 'months', 'years']

const Settings = () => {
  const [settings, setSettings] = useState(getSettings())

  const handleSubmit = values => {
    updateSettings(values)
    setSettings(values)
  }

  return (
    <>
      <Title text="Settings" />

      <Form initialData={settings} onSubmit={handleSubmit}>
        {({ data, onChange }) => {
          return (
            <div className="form-content">
              <div>
                <InputLabel id="maxTableRecords">Max table records</InputLabel>
                <Select
                  labelId="maxTableRecords"
                  value={data['maxTableRecords']}
                  onChange={e => onChange('maxTableRecords', e.target.value)}
                  fullWidth
                >
                  {possibleMaxTableRecords.map(x => (
                    <MenuItem key={x} value={x}>
                      {x}
                    </MenuItem>
                  ))}
                </Select>
              </div>

              <div>
                <InputLabel id="dashboardTimeline">Dashboard timeline</InputLabel>
                <Select
                  labelId="dashboardTimeline"
                  value={data['dashboardTimeline']}
                  onChange={e => onChange('dashboardTimeline', e.target.value)}
                  fullWidth
                >
                  {possibleDashboardTimelines.map(x => (
                    <MenuItem key={x} value={x}>
                      {x}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          )
        }}
      </Form>
    </>
  )
}

export default Settings
