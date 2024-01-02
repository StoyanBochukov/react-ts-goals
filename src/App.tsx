import { useState } from 'react'
import Header from './components/Header.tsx'
import goalsImg from './assets/goals.jpg'
import CourseGolaList from './components/CourseGolaList.tsx'
import NewGoal from './components/NewGoal.tsx'

export  interface CourseGoalsTypes {
  title: string,
  description: string,
  id: number
}

function App() {

  const [ goals, setGoals ] = useState<CourseGoalsTypes[]>([])

  const handleAddGoal = (goal: string, summary: string) => {
     setGoals((prevGoal) => {
      const newGoal: CourseGoalsTypes = {
        id: Math.random(),
        title: goal,
        description: summary
      }
      return [...prevGoal, newGoal]
     })
  }

  const handleDeleteGoal = (id: number) => {
    setGoals(prevState => prevState.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGolaList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}

export default App
