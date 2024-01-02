import { FC, type ReactNode } from "react"

interface CourseGoalPropsTypes {
    title: string,
    children: ReactNode
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

const CourseGoal: FC<CourseGoalPropsTypes> = ({ title, children }) => {
    return (
     <article>
      <div>
          <h2>{ title }</h2>
          {children}
      </div>
      <button>Delete</button>
     </article>
    )
  }

export default CourseGoal