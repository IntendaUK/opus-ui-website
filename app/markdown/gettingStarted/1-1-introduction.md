```mainHeading
# Getting Started with Opus UI
```markdown
You're on your way to making music! This page will teach you everything you need to plug Opus into your React application.

```divider
5px

```markdown
## Prerequisites
Before you begin, ensure you have the following set up:
- Node.js and npm
- React development environment

## Creating a New React App

If you don't have a React app set up yet, you can create a new one using any number of tools. We recommend [Vite](https://vitejs.dev/guide/), but please use whatever works for you!

## Installing Opus UI

Once you have your React app set up, you can proceed to install Opus UI and the standard component library.

```codeBash
npm install opus-ui opus-ui-components
```markdown
You'll also want to install the standard component library. This includes components like 'image', 'icon', and 'label'. You don't need to install it if you'll only be defining your own component types.
```codeBash
'npm i opus-ui-components'
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

import ''opus-ui-components';

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