```mainHeading
# Obtaining a responses HTTP status

```divider
5px
```gap
.
```codeJson
{
	"id": "appDashboard",
	"type": "containerSimple",
	"prps": {
		"dir": "vertical",
		"singlePage": true,
		"mainAxisAlign": "center",
		"crossAxisAlign": "center"
	},
	"wgts": [
		{
			"type": "label",
			"prps": {
				"color": "black",
				"scps": [
					{
						"actions": [
							{
								"type": "queryUrl",
								"method": "POST",
								"url": "https://reqres.in/api/login",
								"body": {
									"email": "eve.holt@reqres.in",
									"password": "cityslicka"
								},
								"extractResults": [
									{
										"path": "response.token",
										"variable": "token"
									}
								],
								"extractErrors": [
									{
										"path": "response.error",
										"variable": "error"
									}
								],
								"extractAny": [
									{
										"path": "status",
										"variable": "status"
									}
								]
							},
							{
								"type": "setState",
								"key": "cpt",
								"value": "Correct details: token=((variable.token)) status=((variable.status))"
							}
						]
					}
				]
			}
		},
		{
			"type": "label",
			"prps": {
				"color": "black",
				"scps": [
					{
						"actions": [
							{
								"type": "queryUrl",
								"method": "POST",
								"url": "https://reqres.in/api/login",
								"body": {
									"email": "",
									"password": ""
								},
								"extractResults": [
									{
										"path": "response.token",
										"variable": "token"
									}
								],
								"extractErrors": [
									{
										"path": "response.error",
										"variable": "error"
									}
								],
								"extractAny": [
									{
										"path": "status",
										"variable": "status"
									}
								]
							},
							{
								"type": "setState",
								"key": "cpt",
								"value": "Incorrect details: error=((variable.error)) status=((variable.status))"
							}
						]
					}
				]
			}
		}
	]
}