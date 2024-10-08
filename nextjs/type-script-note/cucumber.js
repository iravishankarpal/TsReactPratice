module.exports = {
    default: {
        require: ['src/tests/steps/**/*.ts'],  // Path to step definition files
        paths: ['src/features/**/*.feature'],  // Path to feature files
        format: ['@cucumber/pretty-formatter'],
        publishQuiet: true,
        'require-module': ['ts-node/register'],  // Ensures Cucumber understands TypeScript
    },
};
