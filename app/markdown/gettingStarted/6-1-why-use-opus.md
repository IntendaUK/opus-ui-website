```mainHeading
# Why use Opus UI
```markdown
Opus empowers developers in many ways. To truly understand how it does this, we need to understand which facets of development it aims to simplify:
```gap
.
```divider
5px
```gap
.
```markdown
# Accelerate development
By scaffolding components (new or reused) and functions, developers can convert designs into functional applications much faster. Unlike low-code platforms, Opus components can be swapped out for React components for more granular control whenever needed.
```gap
.
```markdown
# Components are data
When all components (or many components, in cases where you also render plain React components) within your application are stored as data, we can simplify migrations, error checking and much more. It also paves the way for tools to be built to simplify things like prototyping, maintaining, debugging, and optimizing applications. This is an area in which we are investing a lot of effort.
```gap
.
```markdown
# State Management and flows
Components rendered by Opus can read from and affect other components' state. This works straight out of the box. No setup needed. In this example, we're sending the value of an input, in to a label's caption (cpt) after applying a mapping to it:
```editor
{
    "type": "containerSimple",
    "wgts": [
        {
            "id": "i1",
            "type": "input",
            "prps": {
                "placeholder": "Please enter your name...",
                "padding": false
            }
        },
        {
            "type": "label",
            "prps": {
                "flows": [
                    {
                        "from": "i1",
                        "fromKey": "value",
                        "toKey": "cpt",
                        "mapFunctionString": "v => `Hello ${v}`"
                    }
                ]
            }
        }
    ]
}
```gap
.
```markdown
# Dynamic with no limits
Because Opus UI can convert data into components, it excels at dynamic behavior. An Opus component can generate more components and more functionality with ease. In the following example, we create new entries on demand. Note how simple it is to access and manipualte state within certain scopes:
```editor
{
    "scope": "todo",
    "type": "container",
    "wgts": [
        {
            "type": "button",
            "prps": {
                "cpt": "Add Entry",
                "fireScript": {
                    "actions": [
                        {
                            "type": "setState",
                            "target": "||todo||",
                            "key": "extraWgts",
                            "value": {
                                "scope": "entry",
                                "type": "containerSimple",
                                "prps": {
                                    "dir": "horizontal"
                                },
                                "wgts": [
                                    {
                                        "type": "label",
                                        "prps": {
                                            "cpt": "Entry"
                                        }
                                    },
                                    {
                                        "type": "button",
                                        "prps": {
                                            "cpt": "Recolor",
                                            "marginLeft": "6px",
                                            "fireScript": {
                                                "actions": [
                                                    {
                                                        "type": "resolveScopedId",
                                                        "scopedId": "entry",
                                                        "storeAsVariable": "idToRecolor"
                                                    },
                                                    {
                                                        "type": "setState",
                                                        "target": "((variable.idToRecolor))",
                                                        "key": "backgroundColor",
                                                        "value": "red"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        }
    ]  
}