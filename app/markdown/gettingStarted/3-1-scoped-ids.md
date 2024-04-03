```mainHeading
# Scoped ids

```info
secondaryBackground|When working with repeaters, and nested blueprints, and scripts, and flows, it can become very hard to remember how id’s were generated for particular elements. And even worse: coming back to a dashboard weeks later, you’ll find complex id’s like %parentId%-row-%rowNumber%-icon exceptionally hard to read through and debug / maintain.

Scopes are there to make your life simpler!
```gap
.
```divider
5px

```markdown
# Example without scopes

In this example, rows have id’s: row-((rowNumber)) and buttons have id’s: row-button-((rowNumber)). When any flow/script wants to use these id’s deeper down, you have to reproduce them correctly. When you have blueprints built on top of other blueprints and in turn, those blueprints need to reproduce the same complex id’s it becomes nearly impossible to maintain.

```codeJson
{
	"type": "container",
	"wgts": [
		{
			"id": "l1",
			"type": "label",
			"prps": {
				"cpt": "You have not selected a record yet"
			}
		},
		{
			"type": "repeater",
			"prps": {
				"staticData": [
					{
						"name": "Captain Cloud",
						"age": 35
					},
					{
						"name": "Doctor Discrepency",
						"age": 52
					}
				],
				"rowMda": {
					"id": "row-((rowNumber))",
					"type": "container",
					"prps": {
						"name": "((rowData.name))"
					},
					"wgts": [
						{
							"id": "row-button-((rowNumber))",
							"type": "button",
							"prps": {
								"age": "((rowData.age))",
								"cpt": "Choose ((rowData.name))",
								"fireScript": {
									"actions": [
										{
											"type": "setState",
											"target": "l1",
											"key": "cpt",
											"value": "((state.row-((rowNumber)).name)) is ((state.row-button-((rowNumber)).age)) years old"
										}
									]
								}
							}
						}
					]
				}
			}
		}
	]
}

```markdown
# Example with scopes

In this example we assign a scope to the repeater row, namely: row through the scope keyword. Scoped id's can be accessed by any component inside the parent, regardless of how deeply nested it is. If you need to give a component inside a scope a scoped id (without defining a brand new scope), you can use the relId keyword. To access the scoped id, we use the ||scopeName|| format if we want to access the scope owner (the component which declared the scope) or the ||scopeName.relativeId|| accessor format if we want to access another component inside it

```codeJson
{
	"type": "container",
	"wgts": [
		{
			"id": "l1",
			"type": "label",
			"prps": {
				"cpt": "You have not selected a record yet"
			}
		},
		{
			"type": "repeater",
			"prps": {
				"staticData": [
					{
						"name": "Captain Cloud",
						"age": 35
					},
					{
						"name": "Doctor Discrepency",
						"age": 52
					}
				],
				"rowMda": {
					"scope": "row",
					"type": "container",
					"prps": {
						"name": "((rowData.name))"
					},
					"wgts": [
						{
							"relId": "button",
							"type": "button",
							"prps": {
								"cpt": "Choose ((rowData.name))",
								"age": "((rowData.age))",
								"fireScript": {
									"actions": [
										{
											"type": "setState",
											"target": "l1",
											"key": "cpt",
											"value": "((state.||row||.name)) is ((state.||row.button||.age)) years old"
										}
									]
								}
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
secondaryBackground|If you use a scoped id outside of the scope (that is, no parent of the component accessing it) is inside the scope you’re referencing, then the id will only resolve if only one element is returned.

In our example above, because there are two scope owners for the scope row, the label at the top, will not be able to access something like ||row.button|| because two of them exist.
