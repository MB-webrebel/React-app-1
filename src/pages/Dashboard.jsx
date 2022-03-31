import { LineChart, Title } from '../components'
import { getSetting } from '../utils/settingsStorage'
import { getAllUsers } from '../utils/userStorage'

const filterUsers = (users, date, slice) => {
  return users.filter(x => {
    return x.createdDate.slice(0, slice) === date.toISOString().slice(0, slice)
  })
}

const getItem = (setting, today, i, users) => {
  let xLabel = ''
  let count = 0
  let newDate = new Date(today)

  if (setting === 'days') {
    newDate.setDate(newDate.getDate() - i)
    xLabel = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
    count = filterUsers(users, newDate, 10).length
  } else if (setting === 'months') {
    newDate.setMonth(newDate.getMonth() - i)
    xLabel = `${newDate.getMonth() + 1}/${newDate.getFullYear()}`
    count = filterUsers(users, newDate, 7).length
  } else {
    newDate.setFullYear(newDate.getFullYear() - i)
    xLabel = newDate.getFullYear()
    count = filterUsers(users, newDate, 4).length
  }

  return { xLabel, count }
}

const Dashboard = () => {
  const dashboardTimeline = getSetting('dashboardTimeline')
  const users = getAllUsers()

  const getData = () => {
    const data = []
    const today = new Date()

    for (let i = 0; i < 5; i++) {
      data.push(getItem(dashboardTimeline, today, i, users))
    }

    return data.reverse()
  }

  return (
    <>
      <Title text="Dashboard" />
      <LineChart data={getData()} lineKey="count" lineColor="#1976d2" xKey="xLabel" />
    </>
  )
}

export default Dashboard
