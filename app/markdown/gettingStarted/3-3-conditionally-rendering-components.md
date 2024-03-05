```mainHeading
# Conditionally rendering components

```info
secondaryBackground|This feature can be used when a component only needs to be rendered if some condition is met.

```gap
.
```divider
5px

```markdown
# Example JSON

In this example, even though there are two icons defined, none will render due to their conditions not being met.

```codeJson
{
	"type": "containerSimple",
	"wgts": [
		{
			"type": "icon",
			"condition": {
				"operator": "isNotFalsy",
				"value": false
			},
			"prps": {
				"value": "home"
			}
		},
		{
			"id": "c1",
			"type": "containerSimple",
			"prps": {
				"showIcon": false
			},
			"wgts": [
				{
					"type": "icon",
					"condition": {
						"operator": "isEqual",
						"value": "{{state.c1.showIcon}}",
						"compareValue": true
					},
					"prps": {
						"value": "face"
					}
				}
			]
		}
	]
}

```markdown
# Combining conditional components and conditional traits

Conditions can also be placed inside of traits. However, a condition can not be defined on a component as well as inside a trait that the component implements. In these cases, only the trait’s condition will be applied. When this type of behavior is desired, conditions should instead be used in conjunction with conditional traits. That is, defining a on the trait implementation itself:

```codeJson
{
	"type": "containerSimple",
	"wgts": [
		{
			"type": "icon",
			"condition": {
				"operator": "isNotFalsy",
				"value": true
			},
			"traits": [
				{
					"trait": "./someTrait",
					"traitPrps": {},
					"condition": {
						"operator": "isNotFalsy",
						"value": true
					}
				}	
			]			
		}
	]
}