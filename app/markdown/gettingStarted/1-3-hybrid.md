```mainHeading
# Hybrid applications

```markdown
A hybrid application is characterized by the fact that many of its screens, components and scripting is defined through JSX and JS while utilizing Opus UI JSON within its components.

```divider
5px

```markdown
# Basic usage
At a minimum, you can simply render your own components and then render Opus JSON within them. 

```info
To learn how to write Opus JSON, refer to `{
	"cpt": "the lessons",
	"attributes": {
		"href": "#"
	},
	"script": {
		"actions": [{
			"type": "setState",
            "target": "systemViewport",
            "key": "value",
            "value": "pages/trainingMaterials/index"
		}]
	}
}`
```gap
.
```codeReact
import React from 'react';
import { createRoot } from 'react-dom/client';
import Opus, { Component } from 'opus-ui';

const Welcome = () => {
	return (
		<div>
			<span>Opus UI</span>
			<Component mda={{
				type: 'label',
				prps: {
					cpt: 'Harmonizing Interfaces'
				}
			}} />
		</div>
	);
};

const root = createRoot(document.getElementById('root'));

root.render(
	<Opus startupComponent={<Welcome />} />
);
```markdown
# Registering component types
You can also register your own React components as Opus component types
```codeReact
import React from 'react';
import { createRoot } from 'react-dom/client';
import Opus, { Component } from './library';

const Welcome = () => {
	return (
		<div>
			<span>Opus UI</span>
			<Component mda={{
				type: 'slogan',
				prps: {}
			}} />
		</div>
	);
};

const Slogan = ({ state: { slogan } }) => {
	return (
		<span>{slogan}</span>
	);
};

const root = createRoot(document.getElementById('root'));

root.render(
	<Opus
		startupComponent={<Welcome />}
		registerComponentTypes={[{
			type: 'slogan',
			component: Slogan,
			propSpec: {
				slogan: {
					type: 'string',
					dft: 'Harmonizing interfaces'
				}
			}
		}]}
	/>
);
```markdown
# Setting Opus state from React
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

```markdown
# Setting React state from Opus
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