module.exports = {
    env: {
        es6     : true,
        browser : true,
        node    : true,
    },
    reportUnusedDisableDirectives : true,
    extends                       : ["eslint:recommended", "plugin:import/recommended"],
    ignorePatterns                : [
        "*.min.*",
        "*.d.ts",
        "CHANGELOG.md",
        "dist",
        "LICENSE*",
        "output",
        "out",
        "coverage",
        "public",
        "temp",
        "package-lock.json",
        "pnpm-lock.yaml",
        "yarn.lock",
        "__snapshots__",
        "*.css",
        "*.png",
        "*.ico",
        "*.toml",
        "*.patch",
        "*.txt",
        "*.crt",
        "*.key",
        "Dockerfile",
        "!.github",
        "!.vscode",
    ],
    rules: {
        "max-len"           : ["error", { code: 120, ignoreTrailingComments: true, ignoreUrls: true }],
        "linebreak-style"   : ["error", "unix"],
        "eol-last"          : ["error", "always"],
        "indent"            : ["error", 4],
        "comma-dangle"      : ["error", "always-multiline"],
        "semi"              : ["error", "always", { omitLastInOneLineBlock: true }],
        "block-spacing"     : "error",
        "brace-style"       : "error",
        "func-call-spacing" : "error",
        "quotes"            : "error",
        "key-spacing"       : ["error", {
            "align": {
                "beforeColon" : true,
                "afterColon"  : true,
                "on"          : "colon",
            },
        }],
        "no-use-before-define"        : "off",
        "object-curly-spacing"        : ["error", "always", { "arraysInObjects": true, "objectsInObjects": true }],
        "space-before-blocks"         : "error",
        "space-before-function-paren" : "error",
        "space-infix-ops"             : ["error", { "int32Hint": false }],
        
        // Suggestions
        "default-param-last"    : "error",
        "no-invalid-this"       : ["error", { "capIsConstructor": false }],
        "no-loop-func"          : "warn",
        "no-unused-expressions" : ["error", { "allowShortCircuit": true, "allowTernary": true, "enforceForJSX": true }],
        "no-return-await"       : "error",




        // Layout & Formatting
        "keyword-spacing"             : "error",
        "lines-around-comment"        : "error",
        "lines-between-class-members" : "error",
        "no-extra-parens"             : ["error", "all", { ignoreJSX: "multi-line" }],



    },
    "overrides": [
        {
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:@typescript-eslint/strict",
                "plugin:import/typescript",
            ],
            plugins  : ["@typescript-eslint"],
            files    : ["*.ts", "*.cts", "*.mts", "*.tsx"],
            parser   : "@typescript-eslint/parser",
            settings : {
                "import/resolver": {
                    typescript : true,
                    node       : true,
                },
            },
            parserOptions: {
                tsconfigRootDir : process.cwd(),
                project         : ["tsconfig.json"],
            },
            rules: {
                // Typescript Rules
                "@typescript-eslint/consistent-type-exports"       : "error",
                "@typescript-eslint/consistent-type-imports"       : "error",
                "@typescript-eslint/explicit-function-return-type" : "error",
                "@typescript-eslint/explicit-member-accessibility" : ["error", {
                    "accessibility": "explicit",
                }],
                "@typescript-eslint/member-ordering"        : "error",
                "@typescript-eslint/method-signature-style" : "error",
                "@typescript-eslint/naming-convention"      : ["error", 
                    { 
                        selector : "function",
                        format   : ["camelCase", "PascalCase"], 
                    },
                ],
                "@typescript-eslint/no-confusing-void-expression"   : "error",
                "@typescript-eslint/no-duplicate-type-constituents" : "error",
                "@typescript-eslint/no-redundant-type-constituents" : "error",
                "@typescript-eslint/no-require-imports"             : "error",
                "@typescript-eslint/no-type-alias"                  : "error",
                "@typescript-eslint/no-unnecessary-qualifier"       : "error",
                "@typescript-eslint/no-useless-empty-export"        : "error",
                "@typescript-eslint/prefer-readonly"                : "error",
                "@typescript-eslint/prefer-regexp-exec"             : "error",
                "@typescript-eslint/promise-function-async"         : "error",
                "@typescript-eslint/require-array-sort-compare"     : "warn",
                "@typescript-eslint/sort-type-constituents"         : "error",
                "@typescript-eslint/switch-exhaustiveness-check"    : "error",

                // Extension Rules
                "default-param-last"                       : "off",
                "@typescript-eslint/default-param-last"    : "error",
                "no-dupe-class-members"                    : "off",
                "@typescript-eslint/no-dupe-class-members" : "error",
                "no-invalid-this"                          : "off",
                "@typescript-eslint/no-invalid-this"       : ["error", { "capIsConstructor": false }],
                "no-loop-func"                             : "off",
                "@typescript-eslint/no-loop-func"          : "warn",
                "no-redeclare"                             : "off",
                "@typescript-eslint/no-redeclare"          : "error",
                "no-unused-expressions"                    : "off",
                "@typescript-eslint/no-unused-expressions" : ["error", {
                    "allowShortCircuit" : true,
                    "allowTernary"      : true,
                    "enforceForJSX"     : true, 
                }],







                // Formatting
                "block-spacing"                    : "off",
                "@typescript-eslint/block-spacing" : "error",
                "brace-style"                      : "off",
                "@typescript-eslint/brace-style"   : "error",
                "comma-dangle"                     : "off",
                "@typescript-eslint/comma-dangle"  : [
                    "error",
                    "always-multiline",
                ],
                "func-call-spacing"                    : "off",
                "@typescript-eslint/func-call-spacing" : "error",
                "indent"                               : "off",
                "@typescript-eslint/indent"            : ["error", 4],
                "key-spacing"                          : "off",
                "@typescript-eslint/key-spacing"       : ["error", {
                    "align": {
                        "beforeColon" : true,
                        "afterColon"  : true,
                        "on"          : "colon",
                    },
                }],
                "keyword-spacing"                                : "off",
                "@typescript-eslint/keyword-spacing"             : "error",
                "lines-around-comment"                           : "off",
                "@typescript-eslint/lines-around-comment"        : "error",
                "lines-between-class-members"                    : "off",
                "@typescript-eslint/lines-between-class-members" : "error",
                "@typescript-eslint/member-delimiter-style"      : "error",
                "no-extra-parens"                                : "off",
                "@typescript-eslint/no-extra-parens"             : ["error", "all", { ignoreJSX: "multi-line" }],
                "object-curly-spacing"                           : "off",
                "@typescript-eslint/object-curly-spacing"        : [
                    "error", "always",
                    { "arraysInObjects": true, "objectsInObjects": true },
                ],
                "quotes"                    : "off",
                "@typescript-eslint/quotes" : "error",
                "semi"                      : "off",
                "@typescript-eslint/semi"   : [
                    "error",
                    "always",
                    { omitLastInOneLineBlock: true },
                ],
                "space-before-blocks"                            : "off",
                "@typescript-eslint/space-before-blocks"         : "error",
                "space-before-function-paren"                    : "off",
                "@typescript-eslint/space-before-function-paren" : "error",
                "space-infix-ops"                                : "off",
                "@typescript-eslint/space-infix-ops"             : ["error", { "int32Hint": false }],
                // "@typescript-eslint/type-annotation-spacing"     : ["error", 
                //     { 
                //         before    : false,
                //         after     : true,
                //         overrides : {
                //             before: true,
                //             after: true,
                //         },
                //     },
                // ],

            },
        },
    ],
};
