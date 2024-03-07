```mainHeading
# Setting React state from Opus
```markdown
To call a state setter from within an Opus component, we may use a special type of state flow:
```codeReact
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Opus, { Component } from './library';

const User = () => {
	const [name, setter] = useState(0);

	return (
		<div>
			What is your name?
			<Component mda={{
				type: 'input',
				prps: {
					flows: [{
						fromKey: 'value',
						setter
					}]
				}
			}} />
			{`Your name is ${name}`}
		</div>
	);
};

const Input = ({ setState }) => {
	return (
		<div>
			<input placeholder='...' onChange={e => setState({ value: e.currentTarget.value })} />
		</div>
	);
};

const root = createRoot(document.getElementById('root'));

root.render(
	<Opus
		startupComponent={<User />}
		registerComponentTypes={[{
			type: 'input',
			component: Input,
			propSpec: {
				value: {
					dft: '',
					type: 'string'
				}
			}
		}]}
	/>
);