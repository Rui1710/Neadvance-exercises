import * as fs from 'fs';

interface SubCategory {
    id: string;
    name: string;
}

interface Category {
    id: string;
    name: string;
    subcategories: SubCategory[];
}

interface SidebarDefault {
    categories: Category[];
}

function parseSubCategories(data: SidebarDefault): Record<string, SubCategory> {
    const subCategoryRecord: Record<string, SubCategory> = {};

    for (const category of data.categories) {
        for (const subCategory of category.subcategories) {
            subCategoryRecord[subCategory.id] = subCategory;
        }
    }

    return subCategoryRecord;
}

const sidebarData: SidebarDefault = JSON.parse(fs.readFileSync('sidebar_default.json', 'utf-8'));
const result = parseSubCategories(sidebarData);
console.log(result);
