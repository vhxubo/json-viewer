# JSON Viewer

This is a simple online JSON viewer for automatically formatting clipboard content with some awesome features.

## Example

```json
{
  "data": {
    "options": "{\"method\":\"get\",\"dataPath\":\"res.result[0]\",\"isLazyLoad\":true}",
    "meta": "[{\"user\":{\"show\":true}}]"
  }
}
```

1. Copy the JSON text from above
2. Then open this online JSON Viewer in your browser.

The text will be automatically formatted as follows:

```json
{
  "data": {
    "options": {
      "method": "get",
      "dataPath": "res.result[0]",
      "isLazyLoad": true
    },
    "meta": [
      {
        "user": {
          "show": true
        }
      }
    ]
  }
}
```
