```mainHeading
# Setting Opus state from React
```markdown
This is as simple as passing your states into a component's properties
```codeReact
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Opus, { Component } from './library';

const Clicker = () => {
	const [count, setter] = useState(0);

	return (
		<div onClick={() => setter(count + 1)}>
			<Component mda={{
				type: 'label',
				prps: { cpt: `You have clicked ${count} times` }
			}} />
		</div>
	);
};

const Label = ({ state: { cpt } }) => {
	return (
		<span>{cpt}</span>
	);
};

const root = createRoot(document.getElementById('root'));

root.render(
	<Opus
		startupComponent={<Clicker />}
		registerComponentTypes={[{
			type: 'label',
			component: Label,
			propSpec: {
				cpt: {
					type: 'string',
					dft: ''
				}
			}
		}]}
	/>
);
