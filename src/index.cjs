module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    reportUnusedDisableDirectives: true,
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    ignorePatterns: [
        "*.min.*",
        "*.d.ts",
        "node_modules",
        "dist",
        "output",
        "out",
        "coverage",
        "public",
        "temp",
        "__snapshots__",
        "!.github",
        "!.vscode",
    ],
    rules: {
        // Suggestions
        "default-param-last": "error",
        "no-invalid-this": ["error", { capIsConstructor: false }],
        "no-loop-func": "warn",
        "no-unused-expressions": [
            "error",
            {
                allowShortCircuit: true,
                allowTernary: true,
                enforceForJSX: true,
            },
        ],
        "no-return-await": "error",

        // Layout & Formatting
        "lines-between-class-members": "error",
    },
    overrides: [
        {
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:@typescript-eslint/strict",
                "plugin:prettier/recommended",
            ],
            plugins: ["@typescript-eslint"],
            files: ["*.ts", "*.cts", "*.mts", "*.tsx"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                tsconfigRootDir: process.cwd(),
                project: ["tsconfig.json"],
            },
            rules: {
                // Typescript Rules
                "@typescript-eslint/consistent-type-exports": "error",
                "@typescript-eslint/consistent-type-imports": "error",
                "@typescript-eslint/explicit-function-return-type": "error",
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {
                        accessibility: "explicit",
                    },
                ],
                "@typescript-eslint/member-ordering": "error",
                "@typescript-eslint/method-signature-style": "error",
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        selector: "function",
                        format: ["camelCase", "PascalCase"],
                    },
                ],
                "@typescript-eslint/no-confusing-void-expression": "error",
                "@typescript-eslint/no-duplicate-type-constituents": "error",
                "@typescript-eslint/no-redundant-type-constituents": "error",
                "@typescript-eslint/no-require-imports": "error",
                "@typescript-eslint/no-type-alias": [
                    "error",
                    {
                        allowAliases: "in-unions-and-intersections",
                        allowCallbacks: "always",
                        allowConditionalTypes: "always",
                        allowUnionAndIntersectionTypes: "always",
                        allowMappedTypes: "always",
                        allowTupleTypes: "always",
                        allowGenericTypes: "always",
                    },
                ],
                "@typescript-eslint/no-unnecessary-qualifier": "error",
                "@typescript-eslint/no-useless-empty-export": "error",
                "@typescript-eslint/prefer-readonly": "error",
                "@typescript-eslint/prefer-regexp-exec": "error",
                "@typescript-eslint/promise-function-async": "error",
                "@typescript-eslint/require-array-sort-compare": "warn",
                "@typescript-eslint/sort-type-constituents": "error",
                "@typescript-eslint/switch-exhaustiveness-check": "error",

                // Extension Rules
                "default-param-last": "off",
                "@typescript-eslint/default-param-last": "error",
                "no-dupe-class-members": "off",
                "@typescript-eslint/no-dupe-class-members": "error",
                "no-invalid-this": "off",
                "@typescript-eslint/no-invalid-this": [
                    "error",
                    { capIsConstructor: false },
                ],
                "no-loop-func": "off",
                "@typescript-eslint/no-loop-func": "warn",
                "no-redeclare": "off",
                "@typescript-eslint/no-redeclare": "error",
                "no-unused-expressions": "off",
                "@typescript-eslint/no-unused-expressions": [
                    "error",
                    {
                        allowShortCircuit: true,
                        allowTernary: true,
                        enforceForJSX: true,
                    },
                ],

                // Formatting
                "lines-between-class-members": "off",
                "@typescript-eslint/lines-between-class-members": "error",
            },
        },
    ],
};
