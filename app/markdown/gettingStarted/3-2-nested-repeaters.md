```mainHeading
# Nested repeaters

```info
secondaryBackground|Through nesting repeaters, very complex functionality can be implemented

```gap
.
```divider
5px

```markdown
# Scoped accessors

Repeaters will never replace values inside nested repeaters (that is, it doesn’t cross another component’s rowMda bounds. Unless a scoped accessor is used. That is, instead of ((rowData.field)) we can use ((scopeOfRepeater.rowData.field)). When the repeater encounters this inside a child component, it will replace the value no matter how deeply the field is nested.

For this to work, the repeater needs to define the rowMdaScope property. This is the scope that will be used when checking if inner repeaters' rowMda accessors can be replaced. In the example below, note how this is done on line 38.

# Example JSON

```codeJson
{
	"type": "containerSimple",
	"prps": {},
	"wgts": [
		{
			"scope": "outer",
			"type": "repeater",
			"prps": {
				"staticData": [
					{
						"type": "input",
						"backgroundColor": "red"
					},
					{
						"type": "checkbox",
						"backgroundColor": "blue"
					}
				],
				"rowMdaScope": "outer",
				"rowMda": {
					"type": "repeater",
					"prps": {
						"staticData": [
							{
								"name": "shaun",
								"active": true
							},
							{
								"name": "santino",
								"active": false
							}
						],
						"rowMda": {
							"type": "containerSimple",
							"prps": {
								"enabled": "{{rowData.active}}",
								"dir": "horizontal"
							},
							"wgts": [
								{
									"type": "label",
									"prps": {
										"cpt": "((rowData.name))"
									}
								},
								{
									"type": "((outer.rowData.type))",
									"prps": {
										"marginLeft": "padding",
										"backgroundColor": "((outer.rowData.backgroundColor))"
									}
								}
							]
						}
					}
				}
			}
		}
	]
}