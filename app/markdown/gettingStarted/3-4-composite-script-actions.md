```mainHeading
# Composite script actions

```info
secondaryBackground|Composite script actions, or trait spreading, can be useful in many situations. e.g.
* You need to perform a queryGateway action but the response should be logged every time
* You need to perform a setState when a certain value is above 10 but show a notification when the value is below 10

Essentially, composite actions allow us to have complex logic defined in a central location which can then be used in multiple places.

```gap
.

```info
secondaryBackground|It’s important to note that your traitArray will apply before the script runs. So if a variable is set before your traitArray, and you want to use that variable in your traitArray, you can’t pass it in as a traitPrp but instead need to access it through {{variable...}}

```gap
.


```divider
5px

```markdown
# Example Dashboard

In this example, we will build a dashboard which contains two buttons. Each button will:

1. Stop execution immediately if the checkbox is not ticked

2. change the caption of the label to: Button {x} was clicked

>a. Where {x} is the index of the button

3. Change the caption of the clicked button to: {input value}

>a. Where {input value} is the value of the input
```gap
.
```codeJson
{
	"type": "containerSimple",
	"wgts": [
		{
			"id": "c1",
			"type": "checkbox"
		},
		{
			"id": "i1",
			"type": "input",
			"prps": {
				"value": "Input value..."
			}
		},
		{
			"id": "l1",
			"type": "label",
			"prps": {
				"cpt": "No button clicked..."
			}
		},
		{
			"type": "button",
			"prps": {
				"index": 0,
				"cpt": "Button",
				"fireScript": {
					"id": "s1",
					"actions": [
						{
							"traits": [
								{
									"trait": "./compositeScript",
									"traitPrps": {}
								}
							]
						},
						{
							"type": "setState",
							"key": "cpt",
							"value": "((state.i1.value))"
						}
					]
				}
			}
		},
		{
			"type": "button",
			"prps": {
				"index": 1,
				"cpt": "Button",
				"fireScript": {
					"id": "s1",
					"actions": [
						{
							"traits": [
								{
									"trait": "./compositeScript",
									"traitPrps": {}
								}
							]
						},
						{
							"type": "setState",
							"key": "cpt",
							"value": "((state.i1.value))"
						}
					]
				}
			}
		}
	]
}

```markdown
# Trait: compositeScript

Notice how this trait contains an array of actions inside traitArray. Without this defined, the actions can not be spread into the original action.

```codeJson
{
	"acceptPrps": {},
	"traitArray": [
		{
			"type": "stopScript",
			"condition": {
				"operator": "isFalsy",
				"value": "{{s1.state.c1.value}}"
			}
		},
		{
			"type": "setState",
			"target": "l1",
			"key": "cpt",
			"value": "Button ((state.self.index)) was clicked"
		}
	]
}
