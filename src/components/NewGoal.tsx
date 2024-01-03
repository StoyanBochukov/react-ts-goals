import { useRef, type FormEvent, FC } from "react"

interface NewGoalTypes {
    onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal: FC<NewGoalTypes> = ({ onAddGoal }) => {

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
        e.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
    }

  return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input type="text" id='goal' name="goal" ref={goal} />
        </p>

        <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id='summary' name="summary" ref={summary} />
        </p>

        <p>
            <button>Add Goal</button>
        </p>
    </form>
  )
}

export default NewGoal