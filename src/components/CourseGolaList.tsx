import { FC } from "react";
import CourseGoal from "./CourseGoal";
import { CourseGoalsTypes } from "../App";

interface CourseGoalListTypes {
    goals: CourseGoalsTypes[];
    onDeleteGoal: (id: number) => void;
}

const CourseGolaList: FC<CourseGoalListTypes> = ({ goals, onDeleteGoal }) => {
  return (
    <ul>
    {goals.map((goal) => (
      <li key={goal.id}>
        <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
        <p>{goal.description}</p>
        </CourseGoal>
      </li>
    ))}
    </ul>
  )
}

export default CourseGolaList