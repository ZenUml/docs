import { visit } from 'unist-util-visit';

function attr(name, value) {
  return {
    type: 'mdxJsxAttribute',
    name,
    value,
  };
}

async function handleNode(node) {
  const code = encodeURIComponent(
    JSON.stringify({
      js: node.value,
    }),
  );
  const params = new URLSearchParams(node.meta);

  const jsxNode = {
    type: 'mdxJsxTextElement',
    name: 'div',
    attributes: [attr('className', 'zenuml-embed')],
    children: [
      {
        type: 'mdxJsxTextElement',
        name: 'iframe',
        attributes: [
          attr(
            'src',
            `https://app.zenuml.com?embed=1&code=${code}&title=${
              params.get('title') || ''
            }&stickyOffset=30`,
          ),
          attr('width', '100%'),
          attr('height', '600px'),
          attr('frameBorder', '0'),
        ],
        children: [],
      },
    ],
  };

  Object.keys(node).forEach((key) => delete node[key]);
  Object.keys(jsxNode).forEach((key) => (node[key] = jsxNode[key]));
}

const plugin = () => {
  const transformer = async (ast) => {
    const nodesToProcess = [];
    visit(ast, 'code', (node) => {
      // Need help constructing this AST node?
      // Use the MDX Playground and explore what your output mdast should look like
      // https://mdxjs.com/playground/
      if (node.lang === 'zenuml') {
        nodesToProcess.push(handleNode(node));
      }
    });
    await Promise.all(nodesToProcess);
  };
  return transformer;
};

export default plugin;
