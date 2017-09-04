module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        'plugin:react/recommended'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"], 
        "arrow-body-style": ["error", "as-needed"],
        "no-multiple-empty-lines": "error",
        "no-multi-spaces": ["error", {
            "exceptions": {
            "ImportDeclaration": true
            }
        }],
        "no-lonely-if": "error",
        "no-trailing-spaces": "error",
        "require-jsdoc": ["warn", {
            "require": {
            "FunctionDeclaration": true,
            "MethodDefinition": true,
            "ClassDeclaration": true
            }
        }],

        "space-in-parens": ["warn", "never"],
        "no-underscore-dangle": ["error", {
            "allowAfterThis": true,
            "allowAfterSuper": true
        }],

        "valid-jsdoc": [2, { "requireReturn": false, "requireReturnDescription": false }],
        "valid-typeof": 2,
        "wrap-iife": [2, "any"],

        "indent": ["error", 2, {"SwitchCase": 1}],
        "global-require": "warn",
        "comma-dangle": ["error", "never"],

        // Class Rules
        "class-methods-use-this": [0],

        // Parents Rules
        "arrow-parens": [2, "as-needed"],
        "no-confusing-arrow": 0,

        // Object Rules
        "object-shorthand": ["error", "methods"],

        // String Rules
        "max-len": ["error", 150],

        // Numbers Rules
        "space-infix-ops": ["warn", {"int32Hint": false}],

        // Import Rules
        "import/no-named-as-default": 0,
        "import/no-extraneous-dependencies": [0],
        "import/no-unresolved": [0]
    }
};