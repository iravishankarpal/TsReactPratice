import { useCallback, useRef, useState } from "react"

interface TodoType {
    id: number,
    text: string,
    completed: boolean,
}

export default function App() {
    const [todos, setTodos] = useState<[TodoType]>()
    const AddTodoText = useRef<HTMLInputElement>(null)
    let AddTodo = useCallback(() => {
        let value = AddTodoText.current?.value || ''
        if (value) {
            setTodos((prev) => {
                let newObj = {
                    id: 1,
                    text: value || '',
                    completed: false
                }
                if (prev === undefined) {
                    return [newObj]
                } else {
                    newObj.id = prev.length + 1
                    let oldValue = prev
                    oldValue.push(newObj)
                    return [...oldValue]
                }
            })
            if (AddTodoText.current?.value) {
                AddTodoText.current.value = ""
            }
            AddTodoText.current?.focus()
        } else {
            alert("value is required")
        }
    }, [])
    const toggleTodo = (id: number) => {
        setTodos((prevTodos: any) => {
            if (prevTodos === undefined) {
                return prevTodos; // or return some default value
            }
            return prevTodos.map((todo: TodoType) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
        });
    };
    return (
        <div>
            <input type="text" ref={AddTodoText} /> <button onClick={AddTodo}>Add</button>
            {
                todos?.map(x => <ListTodoItem toggleTodo={toggleTodo} item={x} key={x.id} />)
            }
        </div>
    )
}
interface PropsItem {
    item: TodoType,
    key: number,
    toggleTodo: Function
}
function ListTodoItem(Props: PropsItem) {
    return <div style={{ border: "1px gray" }}>
        <span>
            <input type="checkbox" onClick={() => Props.toggleTodo(Props.item.id)} defaultChecked={Props.item?.completed} />
        </span>
        <span>
            {Props.item.text}
        </span>
    </div>
}