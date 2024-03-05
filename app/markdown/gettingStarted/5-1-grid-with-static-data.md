```mainHeading
# Grid with static data

```info
secondaryBackground|When you have a list of data that you wish to represent in a row/column format.
```gap
.
```divider
5px

```markdown
# Example JSON

```codeJson
{
	"type": "grid",
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
		]
	},
	"wgts": [
		{
			"id": "name",
			"tsl": {
				"cpt": "Name"
			}
		},
		{
			"id": "age",
			"tsl": {
				"cpt": "Age"
			}
		}
	]
}
```gap
.
```info
secondaryBackground|We can also choose to omit “wgts” in which case, the first record will be used to infer the columns (field names).

When we want more control over how records render, the repeater component type should be used instead