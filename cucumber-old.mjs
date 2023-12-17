export default [
    `--format-options '{"snippetInterface": "synchronous"}'`
].join(" ");

// eslint-disable-next-line no-undef
process.env.TS_NODE_PROJECT = "features/tsconfig.json";
