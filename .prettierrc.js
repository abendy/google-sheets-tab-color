'use strict'

/** @type {import("prettier").Config} */
module.exports = {
    // Transform arrow function parameters
    // 'avoid' = no parens when single param
    // 'always' = always parens
    arrowParens: 'avoid',

    // Put the closing bracket of JSX elements on a new line
    bracketSameLine: false,

    // Print spaces between brackets in object literals
    bracketSpacing: true,

    // Add trailing commas in multi-line arrays/objects
    commaDangle: 'always-multiline',

    // Print spaces before and after commas
    commaSpacing: true,

    // Take .editorconfig file into account when formatting
    editorconfig: true,

    // Line Feed only (\n) line endings
    endOfLine: 'lf',

    // Don't flatten nested ternary expressions onto a single line
    flattenTernaries: true,

    // Add spaces around the * in generator functions
    generatorStarSpacing: true,

    // Put closing angle bracket of JSX elements on new line
    jsxBracketSameLine: false,

    // Use double quotes in JSX attributes
    jsxSingleQuote: false,

    // Add spaces around colons in object literals
    keySpacing: true,

    // Indent nested ternary expressions
    offsetTernaryExpressions: true,

    // Wrap code at 80 characters where possible
    printWidth: 80,

    // Quote object properties consistently when needed
    quoteProps: 'consistent',

    // Use quotes around strings
    quotes: true,

    // Don't use semicolons at the end of statements
    semi: false,

    // Use single quotes instead of double quotes
    singleQuote: true,

    // Add space before function parentheses
    spaceBeforeFunctionParen: true,

    // Use 4 spaces for indentation
    tabWidth: 4,

    // Add trailing commas wherever possible
    trailingComma: 'all',

    // Use spaces for indentation instead of tabs
    useTabs: false,

    // Add spaces around * in yield* expressions
    yieldStarSpacing: true,
}
