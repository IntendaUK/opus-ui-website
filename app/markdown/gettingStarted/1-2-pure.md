```mainHeading
# Pure applications

```markdown
A pure application is characterized by the fact that almost all of its screens, components and scripting is defined through JSON.

```divider
5px

```markdown
# Simple example

```codeReact
import { loadApp } from 'opus-ui';

import 'opus-ui-components';

(async() => {
	const res = await fetch('/app.json')
	const mdaPackage = await res.json();

	loadApp({
		mdaPackage,
		config: {
			env: 'development'
		}
	});
})();