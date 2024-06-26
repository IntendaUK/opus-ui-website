```mainHeading
# Lesson 4: Anatomy of an application
```gap
.
```divider
5px
```gap
.
```markdown
* The opus config file
  * The starting point of any application
* index.json
  * Defines the startup dashboard
  * Defines which themes should be loaded
* Dashboards/Traits
  * Anything that defines a screen within an application
* Themes
  * system.json
    * Mostly contains system variables that will be modified by deployment pipelines
  * components.json
    * A list of all components as well as default values for various properties
  * global.json
    * Contains ‘sizing’ variables used for padding, margins, fonts, etc.
  * colors.json
    * Named colors that are used throughout the application
* Data
  * Local data (only applicable when dataLocations is set to packaged and only for specific component types)
* Fonts and images
* package.json
  * Ensembles and commands
  * node_modules
* Packaged application
  * Preloaded when the application is loaded in the browser the first time
  * Contains all JSON files' contents
* serve.json
  * Used to test applications locally
  * Defines which types of files may be accessed by the browser	
```gap
.
