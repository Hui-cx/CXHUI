import { defineConfig } from 'dumi';
import path from 'path';

let base: string | undefined;
let publicPath: string | undefined;
let logo: string | undefined;

// Github Pages 部署时需要更换为自己的仓库名
if (process.env.NODE_ENV === 'production' && process.env.PREVIEW !== '1') {
  base = '/CXHUI/';
  publicPath = '/CXHUI/';
  logo='/CXHUI/logo.png';
} else {
  logo='/logo.png';
}

export default defineConfig({
  base,
  publicPath,
  themeConfig: {
    logo: logo,
    lastUpdated: false,
    editLink:false,
    footer: 'CXH',
    rtl:true
  },
  title: 'cxh-ui',
  outputPath: 'CXHUI',
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
  },
  exportStatic: {},
  forkTSChecker: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'cxh-ui',
        libraryDirectory: '',
        customStyleName: (name: string) => path.resolve(__dirname, `src/${name}/style/index.ts`),
      },
    ],
  ],
});