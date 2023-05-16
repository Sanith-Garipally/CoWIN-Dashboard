import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import './index.css'

const colors = ['#2d87bb', '#a3df9f', '#64c2a6']

const VaccinationByAge = props => {
  const {vaccinationByAge} = props

  return (
    <div className="va-container">
      <h1>Vaccination by Age</h1>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart width={1000} height={300}>
          <Pie
            data={vaccinationByAge}
            startAngle={0}
            endAngle={360}
            outerRadius={100}
            dataKey="count"
          >
            {vaccinationByAge.map((entry, index) => (
              <Cell
                name={entry.age}
                key={`cell-${entry.age}`}
                fill={colors[index]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            iconType="circle"
            iconSize={12}
            wrapperStyle={{fontSize: '12px'}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
