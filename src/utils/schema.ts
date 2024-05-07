export const todoSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "user_id": {
          "type": "integer"
        },
        "title": {
          "type": "string"
        },
        "due_on": {
          "type": "string"
        },
        "status": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "user_id",
        "title",
        "due_on",
        "status"
      ]
    }
  };
  