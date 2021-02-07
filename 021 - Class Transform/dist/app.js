"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const product_models_1 = require("./product-models");
const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 }
];
const loadedProducts = class_transformer_1.plainToClass(product_models_1.Product, products);
for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
//# sourceMappingURL=app.js.map