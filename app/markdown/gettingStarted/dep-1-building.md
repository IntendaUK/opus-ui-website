```mainHeading
# Building Opus UI Applications
```markdown
## Hybrid Applications
If you are building a 'Hybrid Application' (mostly your own custom React components and very little JSON), all you need to do is run:
```codeBash
npm run build
```markdown
You can then deploy the 'dist' folder.
## Pure Applications
Most Opus UI Applications will be 'Pure Applications' (lots of JSON files that define various screens/components/etc.) for these cases, you need two commands to perform a build:
```codeBash
npm run build-json
npm run build
```markdown
If you need to do this in a single line (for example when defining a build script on Netlify), you can define it as:
```codeBash
npm run build-json && npm run build
```markdown
This first command packages all your JSON files (dashboards, themes, etc.) into a single JSON file that will be requested by the browser on startup. This is done automatically using a file watcher during development.

As with a 'Hybrid Application', once a build has been done, you can deploy the 'dist' folder.