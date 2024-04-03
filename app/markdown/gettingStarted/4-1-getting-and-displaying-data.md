```mainHeading
# Getting and Displaying Data

```info
secondaryBackground|A pure application is characterised by the fact that almost all of its screens, components and scripting is defined through JSON.

```gap
.

```divider
5px

```markdown
# Example JSON - Repeater

```codeJson
{
    "type": "containerSimple",
    "wgts": [
        {
            "type": "repeater",
            "prps": {
                "rowMda": {
                    "type": "label",
                    "prps": {
                        "cpt": "Email: ((rowData.email))"
                    }
                },
                "dtaScps": {
                    "actions": [
                        {
                            "type": "queryUrl",
                            "url": "https://reqres.in/api/users",
                            "method": "GET",
                            "extractResults": [
                                {
                                    "path": "response.data",
                                    "variable": "data"
                                }
                            ]
                        },
                        {
                            "type": "setState",
                            "key": "data",
                            "value": "{{variable.data}}"
                        }
                    ]
                }
            }
        }
    ]
}

```markdown
# Example JSON - Grid

```codeJson
{
	"type": "grid",
	"prps": {
		"dtaScps": {
			"actions": [
				{
					"type": "queryUrl",
					"url": "https://reqres.in/api/users",
					"method": "GET",
					"extractResults": [
						{
							"path": "response.data",
							"variable": "data"
						}
					]
				},
				{
					"type": "setState",
					"key": "data",
					"value": "{{variable.data}}"
				}
			]
		}
	}
}
```gap
.
```info
secondaryBackground
Once we have the data, it is being placed inside a variable called ‘data’. This variable can further be modified before the data is sent to the grid (in the second action). Also, note that no paging, filtering, or ordering is being done in this example.External APIs refer to any URL you need to access (through a GET or POST request) in order to obtain data. This does NOT include the Fraxses gateway which we can offer through other, specialised methods.