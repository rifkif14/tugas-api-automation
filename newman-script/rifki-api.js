const newman = require("newman")

newman.run({
    collection: "json-collection/rifki.postman_collection.json",
    environment: "json-env/rifki-env.json",
    reporters: ["cli", "htmlextra"]
})