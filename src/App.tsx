import { useState } from 'react'
import Header from './components/Header.tsx'
import goalsImg from './assets/goals.jpg'
import CourseGolaList from './components/CourseGolaList.tsx'

function App() {

  interface CourseGoalsTypes {
    title: string,
    description: string,
    id: number
  }
  const [ goals, setGoals ] = useState<CourseGoalsTypes[]>([])

  const handleAddGoal = () => {
     setGoals((prevGoal) => {
      const newGoal: CourseGoalsTypes = {
        id: Math.random(),
        title: 'Learn React + Redux',
        description: 'Lets get it done quick'
      }
      return [...prevGoal, newGoal]
     })
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGolaList goals={goals} />
    </main>
  )
}

export default App
