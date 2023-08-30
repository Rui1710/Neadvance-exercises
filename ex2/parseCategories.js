"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function parseSubCategories(data) {
    var subCategoryRecord = {};
    for (var _i = 0, _a = data.categories; _i < _a.length; _i++) {
        var category = _a[_i];
        for (var _b = 0, _c = category.subcategories; _b < _c.length; _b++) {
            var subCategory = _c[_b];
            subCategoryRecord[subCategory.id] = subCategory;
        }
    }
    return subCategoryRecord;
}

var sidebarData = JSON.parse(fs.readFileSync('sidebar_default.json', 'utf-8'));
var result = parseSubCategories(sidebarData);
console.log(result);