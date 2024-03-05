```mainHeading
# Repeaters

```info
secondaryBackground|Whenever you have a list of records for which you want to render custom metadata, you can use a repeater. In a mobile application, this can be something like a ‘card’.

```gap
. 
```divider
5px

```markdown
# Example JSON

```codeJson
{
	"type": "containerSimple",
	"prps": {
		"dir": "vertical",
		"padding": true,
		"autoChildMargins": true
	},
	"wgts": [
		{
			"type": "repeater",
			"prps": {
				"staticData": [
					{
						"name": "Shaun",
						"age": 35
					},
					{
						"name": "Alexis",
						"age": 4
					}
				],
				"rowMda": {
					"type": "container",
					"prps": {
						"dir": "horizontal",
						"autoChildMargins": true,
						"hasShadow": true,
						"padding": true
					},
					"wgts": [
						{
							"type": "icon",
							"prps": {
								"value": "flare"
							}
						},
						{
							"type": "label",
							"prps": {
								"cpt": "((rowData.name)) is ((rowData.age)) years old"
							}
						}
					]
				}
			}
		}
	]
}
```gap
. 
```info
secondaryBackground|Repeaters are very powerful but when using them, dashboards can become quite large and hard to manage. It’s normally best to build blueprints for the rowMda instead to mitigate that.