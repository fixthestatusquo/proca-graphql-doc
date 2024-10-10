import path from 'path'
import { fileURLToPath } from 'url'

function relativePath(target) {
  const resolvedPath = path.join(path.dirname(fileURLToPath(import.meta.url)), target);
  console.log(`Resolved path for ${target}:`, resolvedPath,"aa");
  return resolvedPath;
}

const staticAssetsPath = relativePath('./assets');

const customErrorHandler = {
  handleHttpError: (error) => {
    console.log('HTTP Error occurred (ignored):', error);
    // Do nothing else
  },
  // Add other error handling methods as needed
};

export const htmlConfig = {
  introspection: {
    type: 'url',
    url: 'https://api.proca.app/api',
  },
  errorHandler: customErrorHandler,
staticAssets: fileURLToPath(new URL('./assets', import.meta.url)),
  website: {
    template: 'carbon-multi-page',
    options: {
      appTitle: 'Proca graphql API',
      appLogo: 'https://doc.proca.app/pics/proca-ftsql.png',
      appFavicon: 'https://doc.proca.app/pics/favicon.png',
      siteMeta: {
        description: "Proca GraphQL API.",
        'og:description': "Documentation for Proca GraphQL API.",
      },
      pages: [{
        title: 'Welcome',
        content: `
This is the graphql API documentation for proca.

## Where to go next
check the existing queries and mutations, with the types used.

- Star the project on [GitHub](https://github.com/fixthestatusquo/proca) 
- Check out the cli [that uses this API](https://github.com/fixthestatusquo/proca-cli)

`
      },
//        { title: 'Introduction', content: './intro.md' },

],
      queryGenerationFactories: {
        'NaiveDateTime': '1999-12-31 23:59:59',
        'Json': '\'\{"key":"value"}\}'
      }
    }
  },
}

// NOT WORKING
export const markdownConfig = {
  introspection: {
    type: 'url',
    url: 'https://api.proca.app/api',
  },
  staticAssetsPath: staticAssetsPath,
  website: {
    template: 'markdown',
    output: './docs/markdown',
    options: {
      appTitle: 'Proca GraphQL API',
      pages: [
        { title: 'Introduction', content: './intro.md' },
        { title: 'Schema', content: 'schema' },
        { title: 'Queries', content: 'queries' },
        { title: 'Mutations', content: 'mutations' }
      ]
    }
  }
};
export default process.env.FORMAT === 'markdown' ? markdownConfig : htmlConfig;
