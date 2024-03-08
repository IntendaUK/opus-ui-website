import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Opus, { registerExternalAction } from 'opus-ui';

import 'opus-ui-components';

const root = createRoot(document.getElementById('root'));

const generateEntry = ({ value }) => {
	return {
		scope: 'entry',
		type: 'containerSimple',
		prps: { dir: 'horizontal' },
		wgts: [{
			type: 'label',
			prps: { cpt: value }
		},
		{
			type: 'button',
			prps: {
				cpt: 'Delete',
				fireScript: {
					actions: [{
						type: 'resolveScopedId',
						scopedId: 'entry',
						storeAsVariable: 'idToRecolor'
					},
					{
						type: 'setState',
						target: '||todo||',
						key: 'deleteKeys',
						value: [{
							key: 'extraWgts',
							value: { id: '||entry||' }
						}]
					}]
				}
			}
		}]
	};
};

registerExternalAction({
	type: 'generateEntry',
	handler: generateEntry
});

root.render(
	<Opus startupMda={{
		scope: 'todo',
		type: 'container',
		wgts: [{
			type: 'containerSimple',
			prps: { dir: 'horizontal' },
			wgts: [{
				relId: 'input',
				type: 'input',
				prps: {
					placeholder: 'Enter your task'
				}
			}, {
				type: 'button',
				prps: {
					cpt: 'Add',
					fireScript: {
						actions: [{
							type: 'generateEntry',
							value: '((state.||todo.input||.value))',
							storeAsVariable: 'newEntry'
						},
						{
							type: 'setState',
							target: '||todo||',
							key: 'extraWgts',
							value: '{{variable.newEntry}}'
						}]
					}
				}
			}]
		}]
	}} />
);


/*const TodoItem = ({ value, onDelete }) => {
    return (
        <li>
            {value}
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className='todo-app'>
            <h1>To-Do List</h1>
            <div className='todo-input'>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='Enter your task'
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul className='todo-list'>
                {todos.map((value, index) => (
                    <TodoItem
                        key={index}
                        value={value}
                        onDelete={() => handleDeleteTodo(index)}
                    />
                ))}
            </ul>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<Todo />);*/