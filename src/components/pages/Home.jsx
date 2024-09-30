import React, { useReducer  } from 'react'



function  tasksReducer(state,action){
    switch (action.type) {
        case 'added': {
          return {
            ...state,
            tasks: [
              ...state.tasks,
              {
                id: action.id,
                text: action.text,
                done: false,
              },
            ],
            taskInput: '', 
          };
        }

        case 'inputChange': {
          return {
            ...state,
            taskInput: action.value, 
          };
        }
       
        case 'deleted': {
          return {
            ...state,
            tasks: state.tasks.filter((t) => t.id !== action.id),
          };
        }
        default: {
          throw Error('Unknown action: ' + action.type);
        }
      }
}
export const Home = () => {
    
    const [state, dispatch] = useReducer(tasksReducer,
      {
        tasks: initialTasks,
        taskInput: '',
      }
      );
    
    
      function handleAddTask(text) {
        if (state.taskInput.trim()) {
          dispatch({
            type: 'added',
            id: nextId++,
            text: state.taskInput,
          });
        }
        
      }
    
      
      function handleDeleteTask(taskId) {
        dispatch({
          type: 'deleted',
          id: taskId
        });
      }

      function handleInputChange(e) {
        dispatch({
          type: 'inputChange',
          value: e.target.value,
        });
      }
    
    
  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>
      <div className='w-3/5 h-2/3 bg-white flex  flex-col'>
        <h1 className='text-4xl font-bold p-4  '>TODOLIST</h1>
        <div className='flex flex-row'>
            <input
             id="task"
             name="task"
             type="text"
             value={state.taskInput}
             onChange={handleInputChange}
             placeholder='Your Task'
             className="border-2 border-black w-11/12 p-1 text-base rounded "
             
            />
            <button className='w-24 h-12 text-white bg-black rounded-lg '  onClick={handleAddTask}>
            Add</button>
        </div>

        <div>
        <ul>
            {state.tasks.map((t) => (
              <li key={t.id} className="p-2 flex justify-between">
                <label className='flex gap-2 text-xl font-semibold'>
                  <input type="checkbox" className='px-2 ' />
                  {t.text}
                </label>
                <button
                  className="bg-red-700 text-white text-md px-2 rounded"
                  onClick={() => handleDeleteTask(t.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
          
      </div>
      
    </div>
  )
}

let nextId = 3;
const initialTasks = [
  { 
    id: 0, 
    text: 'Visit Kafka Museum', 
    done: true 
  },
  { 
    id: 1, 
    text: 'Watch a puppet show', 
    done: false 
  },
  { 
    id: 2, 
    text: 'Lennon Wall pic', 
    done: false 
  }
];