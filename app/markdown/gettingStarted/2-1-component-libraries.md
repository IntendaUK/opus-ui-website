```mainHeading
# Component Libraries
```markdown
While Opus allows you to define all the custom components you might need in your application, there are also dozens of pre-built component types through which a very high percentage of your needs can be fulfilled. These components are split up into various libraries.
```divider
5px
```gap
.
```markdown
# Opus UI
The Opus Library contains a few core components you will need to build applications.
```codeBash
npm i opus-ui
```gap
.
```componentLibrarySection
[
	{
		"type": "container",
		"desc": [
			"A component that can render other components inside of it",
			"Lots of quality of life features"
		]
	},
	{
		"type": "containerSimple",
		"desc": [
			"A container without click and hover functionality",
			"Can render child components inside of it but these can not change during runtime"
		]
	},
	{
		"type": "dataLoader",
		"desc": [
			"Manages loading data from endpoints for other components",
			"Simply for quality of life, not required"
		]
	},
	{
		"type": "modal",
		"desc": []
	},
	{
		"type": "popup",
		"desc": []
	},
	{
		"type": "viewport",
		"desc": [
			"This component dynamically renders JSON dashboards inside it. Is is used in all pure Opus applications but can also be used in hybrid applications"
		]
	}
]
```gap
.
```markdown
# Opus Components
The standard component library contains most of the components you'll need to build a fully functional application.
```codeBash
npm i opus-ui-components
```gap
.
```componentLibrarySection
[
	{
		"type": "audioPlayer",
		"desc": []
	},
	{
		"type": "audioRecorder",
		"desc": []
	},
	{
		"type": "button",
		"desc": []
	},
	{
		"type": "camera",
		"desc": []
	},
	{
		"type": "canvas",
		"desc": []
	},
	{
		"type": "checkbox",
		"desc": []
	},
	{
		"type": "datePicker",
		"desc": []
	},
	{
		"type": "divider",
		"desc": []
	},
	{
		"type": "focusLine",
		"desc": []
	},
	{
		"type": "html",
		"desc": [
			"Used to render raw HTML"
		]
	},
	{
		"type": "icon",
		"desc": [
			"Renders google material icons"
		]
	},
	{
		"type": "image",
		"desc": []
	},
	{
		"type": "input",
		"desc": [
			"An HTML input with many quality of life features"
		]
	},
	{
		"type": "label",
		"desc": []
	},
	{
		"type": "markdownLabel",
		"desc": []
	},
	{
		"type": "notifications",
		"desc": []
	},
	{
		"type": "radio",
		"desc": []
	},
	{
		"type": "repeater",
		"desc": [
			"Converts arrays of records/primitives into extremely customizable components"
		]
	},
	{
		"type": "resizer",
		"desc": []
	},
	{
		"type": "slider",
		"desc": []
	},
	{
		"type": "tab and tabContainer",
		"desc": []
	},
	{
		"type": "timePicker",
		"desc": []
	},
	{
		"type": "treeview",
		"desc": []
	},
	{
		"type": "upload",
		"desc": [
			"This component allows users to drop files onto it"
		]
	},
	{
		"type": "url",
		"desc": [
			"An iframe"
		]
	},
	{
		"type": "videoPlayer",
		"desc": []
	},
	{
		"type": "webSocket",
		"desc": []
	}
]
```gap
.
```markdown
# Opus Code Editor
A code editor built on top of `{
	"cpt": "react-simple-code-editor",
	"attributes": {
		"href": "#"
	},
	"script": {
		"actions": [{
			"type": "openUrl",
            "url": "https://www.npmjs.com/package/react-simple-code-editor"
		}]
	}
}` and `{
	"cpt": "prismjs",
	"attributes": {
		"href": ""
	},
	"script": {
		"actions": [{
			"type": "openUrl",
            "url": "https://github.com/PrismJS/prism"
		}]
	}
}`.
```codeBash
npm i opus-ui-code-editor
```gap
.
```componentLibrarySection
[
	{
		"type": "codeEditor",
		"desc": []
	}
]
```gap
.
```markdown
# Opus Grid
Contains a single component type, namely "grid". This is a data table with some extensibility. However, if lots of customization is required, the grid ensemble should be used instead.
```codeBash
npm i opus-ui-grid
```gap
.
```markdown
# Opus Drag Move
Contains various component types to assist in building applications in which components can be moved around (inside a container) and dragged between various containers.
```codeBash
npm i opus-ui-drag-move
```gap
.
```componentLibrarySection
[
	{
		"type": "containerDnd",
		"desc": [
			"A container inside which drag-and-drop children can be rendered"
		]
	},
	{
		"type": "containerMovable",
		"desc": [
			"A container inside which movable children can be rendered"
		]
	}
]
```gap
.
```markdown
# Opus Zoom Panner
Contains a single component type, namely "zoomPanner". This is a component built on top of `{
	"cpt": "react-zoom-pan-pinch",
	"attributes": {
		"href": "#"
	},
	"script": {
		"actions": [{
			"type": "openUrl",
            "url": "https://github.com/BetterTyped/react-zoom-pan-pinch"
		}]
	}
}`. It acts as a container and allows the user to zoom, pan and pinch to change the view on the child components.
```codeBash
npm i opus-ui-zoom-panner
```gap
.