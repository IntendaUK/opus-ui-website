```mainHeading
# Environment Variables
```markdown
When using environment variables in your Opus UI applications, it's important to first decide if these variables will be injected during build time, or after build time. If your application was set up using the npx command (npx create-opus-ui-app), your environment variables will be injected during build time. That is, when running 'npm run build', variables from your various '.env' files will be injected.

If you wish for variables to be injected after build time (for example if you are using a prebuilt image then injecting variables when deploying docker containers), you need to make the following changes:
1. Move 'envConfig.js' from the 'public' folder to the 'src' folder
2. Change the 'src' of the 'envConfig.js' import in 'index.html' to:
```codeBash
<script type="module" src="/src/envConfig.js"></script>
```markdown
## Defining variables
When defining new variables in you '.env' files, note that all varibles must be prefixed by 'VITE_' if they are to be exposed to the client application. Once you've defined new variables, you can inject them into themes by modifying the 'envConfig.js' file:
```codeReact
const appMode = import.meta.env.VITE_APP_MODE;

window.envConfig = {
	...
	themeEntry_appMode: {
		theme: 'system',
		key: 'appMode',
		value: appMode
	}
	...
};
```markdown
In the example above, we're injecting the 'VITE_APP_MODE' variable into the 'system' theme and calling the theme key 'appMode'. Also, note that we can call the key in the object (themeEntry_appMode) literally anything, as long as it starts with the string 'themeEntry_'.
## Accessing variables
Once you've injected a variable, you can use the variable anywhere in your JSON:
```codeJson
{
	"type": "label",
	"prps": {
		"caption": "The application mode is: { theme.x.y }",
		"note": "In the example above, you will need to remove the spaces inside the curly braces"
	}
}
