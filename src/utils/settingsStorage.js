const settingsKey = 'settings'
const defaultSettings = {
  maxTableRecords: 'Unlimited',
  dashboardTimeline: 'days',
}

export const getSettings = () => {
  const settings = localStorage.getItem(settingsKey)
  return JSON.parse(settings) || defaultSettings
}

export const getSetting = name => {
  const setting = getSettings()[name]
  return setting
}

export const updateSettings = settings => {
  localStorage.setItem(settingsKey, JSON.stringify(settings))
}
