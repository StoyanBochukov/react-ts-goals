import { FC, type ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import { CourseGoalsTypes } from "../App";
import Info from "./Info";

interface CourseGoalListTypes {
    goals: CourseGoalsTypes[];
    onDeleteGoal: (id: number) => void;
}

const CourseGolaList: FC<CourseGoalListTypes> = ({ goals, onDeleteGoal }) => {

  let warningBox: ReactNode;

  if(goals.length === 0){
    return <Info mode="hint">You have no goals yet. Start adding some!</Info>
  }

  if(goals.length >= 4){
    warningBox = (
      <Info mode="warning" severity="high">
        You're collectiong a lot of goals. Don't put too much on your plate!
      </Info>
    )
  }

  return (
    <>
      {warningBox}
    <ul>
    {goals.map((goal) => (
      <li key={goal.id}>
        <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
        <p>{goal.description}</p>
        </CourseGoal>
      </li>
    ))}
    </ul>
    </>
  )
}

export default CourseGolaList