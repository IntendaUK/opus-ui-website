```mainHeading
# Repeaters with thousands of entries

```info
secondaryBackground|When repeaters become slow due to the amount of components that need to be rendered, virtualization can be used to drastically speed up the process.

```gap
.
```divider
5px

```markdown
## Virtualization

Using virtualization, we can render child items on demand. This method only renders enough items that actually fit on the screen and no more. As the user scrolls (and new items come into view) old items are unmounted and new ones are mounted dynamically.

## Caveats

Unfortunately, virtualization comes at a small price: it can only be used if you know the exact size of child items and the exact size of the container the items render inside.

In the example below, we specify that the height is 500px and the virtualizedItemSize is 65. While this may seem like a deal-breaker in some situations, we can actually dynamically calculate these properties with scripts utilizing the onWindowResized and onComponentResized triggers as well as the getComponentHeight and getComponentWidth actions.

Also, since child components are not mounted until they are visible, they can not react to state changes in scripts or flows until they are mounted.

# Example JSON

This example dynamically builds 2000 items to be rendered as containers with labels inside them. Change the virtualized property from true to false and observe how the page then takes much longer to render.

```codeJson
{
	"type": "containerSimple",
	"prps": {
		"height": "500px",
		"width": "200px",
		"autoChildMargins": true,
		"mainAxisAlign": "start"
	},
	"wgts": [
		{
			"type": "repeater",
			"prps": {
				"morphProps": ["staticData"],
				"pageSize": 2000,
				"virtualized": true,
				"virtualizedDirection": "vertical",
				"height": "500px",
				"virtualizedItemSize": 65,
				"staticData": {
					"morphVariable": "res",
					"morphActions": [
						{
							"type": "setVariable",
							"name": "res",
							"value": "eval- const res = []; for (let i = 0; i < 2000; i ++) { res.push({ number: i }); }; res"
						}
					]
				},
				"rowMda": {
					"type": "container",
					"prps": {
						"dir": "horizontal",
						"autoChildMargins": true,
						"hasShadow": true,
						"padding": true,
						"margin": "5px"
					},
					"wgts": [
						{
							"type": "label",
							"prps": {
								"cpt": "Row number ((rowData.number))"
							}
						}
					]
				}
			}
		}
	]
}