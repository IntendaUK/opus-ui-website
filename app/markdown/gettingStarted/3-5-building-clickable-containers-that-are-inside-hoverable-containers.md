```mainHeading
# Building clickable containers that are inside hoverable containers

```info
secondaryBackground|When you have a hoverable/clickable container inside another container that is clickable/hoverable, inner containers each need a higher zIndex than its parent

```gap
.

```divider
5px

```gap
.

```codeJson
{
	"type": "containerSimple",
	"prps": {
		"singlePage": true,
		"mainAxisAlign": "center",
		"crossAxisAlign": "center"
	},
	"wgts": [
		{
			"scope": "a",
			"type": "container",
			"prps": {
				"canHover": true,
				"zIndex": 1
			},
			"wgts": [
				{
					"type": "container",
					"prps": {
						"zIndex": 2,
						"canClick": true,
						"fireScript": {
							"actions": [
								{
									"type": "log",
									"msg": "a"
								}
							]
						}
					},
					"wgts": [
						{
							"type": "label",
							"prps": {
								"cpt": "a"
							}
						}
					]
				},
				{
					"type": "container",
					"prps": {
						"zIndex": 2,
						"vis": false,
						"canClick": true,
						"fireScript": {
							"actions": [
								{
									"type": "log",
									"msg": "b"
								}
							]
						},
						"flows": [
							{
								"from": "||a||",
								"fromKey": "hovered",
								"toKey": "vis"
							}
						]
					},
					"wgts": [
						{
							"type": "label",
							"prps": {
								"cpt": "b"
							}
						}
					]
				}
			]
		}
	]
}