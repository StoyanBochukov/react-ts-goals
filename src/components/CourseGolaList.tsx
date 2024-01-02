import { FC } from "react";
import CourseGoal from "./CourseGoal";

interface CourseGoalListTypes {
    goals: { 
        title: string;
        description: string;
        id: number;
    }[]
}

const CourseGolaList: FC<CourseGoalListTypes> = ({ goals }) => {
  return (
    <ul>
    {goals.map((goal) => (
      <li>
        <CourseGoal key={goal.id} title={goal.title}>
        <p>{goal.description}</p>
        </CourseGoal>
      </li>
    ))}
    </ul>
  )
}

export default CourseGolaList