import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { AddBar } from '../../../../Data'
export default function AdminChart() {


  return (
    <>
     <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={AddBar}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#c5c5c8" />
          <Bar dataKey="uv" stackId="a" fill="#6272b0" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
