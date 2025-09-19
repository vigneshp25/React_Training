import { useDispatch } from "react-redux";
import { taskAction } from "../store/taskSlice";
import { useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";


const CreateTask = ()=>{
    const inputRef = useRef();
    const dispatch = useDispatch();
    const handleAddTask = ()=>{
        const title = inputRef.current.value.trim();
        if (title !== ''){
            dispatch(taskAction.addTask({
                id: nanoid(),
                title,
                completed: false,
            }));
            inputRef.current.value = '';
        }
    }
    return <>
        <p className="add-task">
            <input type="text" id="inputfortodo" ref={inputRef} />
            <button onClick={handleAddTask}>Add Task</button>
        </p>
    </>;
}

export default CreateTask;