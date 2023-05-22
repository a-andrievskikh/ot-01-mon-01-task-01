import React from 'react'
import { DataType } from './App'

type TasksPropsType = {
  data: DataType
}

export const Tasks = (props: TasksPropsType) => {
  return (
    <div>
      <h1>{props.data.title}</h1>
      <ul>
        {props.data.tasks.map(item => {
          return (
            <li>
              <span>{item.taskId}</span>
              <span>{item.title}</span>
              <span>{item.isDone}</span>
            </li>
          )
        })
        }
      </ul>
      <ul>
        {props.data.students.map(item => {
          return (
            <li>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}