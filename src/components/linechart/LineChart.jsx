import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const LineChartComponent = ({ lineKey, lineColor, xKey, data }) => {
  return (
    <div style={{ width: '99%', height: '100%' }}>
      <ResponsiveContainer>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey={lineKey} stroke={lineColor} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey={xKey} />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChartComponent
