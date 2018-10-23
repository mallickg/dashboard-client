
var schema = {
    "type": "object",
    "properties": {
        "users": {
            "type": "array",
            "minItems": 1,
            "maxItems": 2,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 12,
                        "pattern": "\\d{3}"
                    },
                    "firstName": {
                        "type": "string",
                        "faker": "name.firstName",
                        "pattern": "([A-Z][a-zA-Z]*)"
                    },
                    "lastName": {
                        "type": "string",
                        "faker": "name.lastName"
                    },
                    "email": {
                        "type": "string",
                        "faker": "internet.email"
                    }
                },
                "required": ["id", "type", "lastname", "email"]
            }
        }
    },
    "required": ["users"]
};

module.exports = schema;
