import { FC, type ReactNode } from "react"

interface CourseGoalPropsTypes {
    id: number;
    title: string;
    children: ReactNode;
    onDelete: (id: number) => void;
}

// const CourseGoal = ({ title, children }: CourseGoalPropsTypes) => {
//   return (
//    <article>
//     <div>
//         <h2>{ title }</h2>
//         {children}
//     </div>
//     <button>Delete</button>
//    </article>
//   )
// }

const CourseGoal: FC<CourseGoalPropsTypes> = ({ title, children, id, onDelete }) => {
    return (
     <article>
      <div>
          <h2>{ title }</h2>
          {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
     </article>
    )
  }

export default CourseGoal