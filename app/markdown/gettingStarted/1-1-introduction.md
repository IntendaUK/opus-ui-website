```mainHeading
# Getting Started with Opus UI
```markdown
You're on your way to making music! This page will teach you everything you need to know to start using Opus UI in your applications.

```divider
5px

```markdown
## Quick Start
To set up a new application, you can simply run the following command then follow the prompts:
```codeBash
npx create-opus-ui-app
```markdown
Once your appliation has been created, navigate into the newly created folder then run:
```codeBash
npm start
```markdown
If you're not sure which component libraries you might need, refer to `{
	"cpt": "this page",
	"attributes": {
		"style": {
			"cursor": "pointer"
		}
	},
	"script": {
		"actions": [{
            "type": "openUrl",
            "url": "{{eval.window.location.origin + '/docs?articleId=6-2-component-libraries'}}"
        }]
	}
}`.
# Opus in existing applications

## Installing Opus UI

```codeBash
npm install @intenda/opus-ui
```markdown
You might also want to install the standard component library. This includes components like 'image', 'icon', and 'label'. You don't need to install it if you'll only be defining your own component types.
```codeBash
npm install @intenda/opus-ui-components
```markdown
# Basic usage
At a minimum, you can simply render your own components and then render Opus JSON within them. This is also called a 'hybrid' application. We'll discuss 'pure' applications later.
```codeReact
import React from 'react';
import { createRoot } from 'react-dom/client';

import Opus, { Component } from '@intenda/opus-ui';
import '@intenda/opus-ui-components';

const Welcome = () => {
	return (
		<div>
			<span>Opus UI</span>
			//Here, we specify Opus JSON that we want to render. `mda` stands for `metadata`
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

//Important: The Opus component should be rendered first. You can specify your current 'root' component within the `startupComponent` property
root.render(
	<Opus startupComponent={<Welcome />} />
);
```gap
.
```info
To learn how to write Opus JSON, refer to `{
	"cpt": "the lessons",
	"attributes": {
		"href": "#"
	},
	"script": {
		"actions": [{
            "type": "setState",
            "target": "||router||",
            "key": "tPerformRoute",
            "value": "docs?articleId=training-1"
        },
        {
            "type": "setState",
            "target": "||gettingStarted||",
            "key": "tReloadFromUrl",
            "value": true
        }]
	}
}`.
```markdown
# Registering component types
You can also register your own React components as Opus component types that you can then render through JSON. In this example, we register the 'Slogan' component:
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
# Rendering JSON as the root
Instead of having a React component as the root, you can also render Opus JSON:
```codeReact
import React from 'react';
import { createRoot } from 'react-dom/client';

import Opus, { Component } from './library';

const Slogan = ({ state: { slogan } }) => {
	return (
		<span>{slogan}</span>
	);
};

const root = createRoot(document.getElementById('root'));

root.render(
	<Opus
		startupMda={{
			type: 'containerSimple',
			wgts: [{
				type: 'slogan',
				prps: { slogan: 'Slogan 1' }
			}, {
				type: 'slogan',
				prps: { slogan: 'Slogan 2' }
			}]
		}}
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