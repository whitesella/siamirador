import Mirador from 'mirador/dist/es/src/index';
import miradorImageToolsPlugin from 'mirador-image-tools/es/plugins/miradorImageToolsPlugin.js';
import miradorDownloadPlugins from './plugins/mirador-dl-plugin/src';

const config = {
  id: 'mirador-viewer',
  windows: [
    {
      manifestId: 'https://ids.si.edu/ids/manifest/SIA-95-1209',
      allowMaximize: false,
      allowFullscreen: true,
      allowClose: false,
      //showZoomControls: true,
    }
  ],
  themes: {
    dark: {
      palette: {
        type: 'dark',
        primary: {
          main: '#FBC33C',
        },
        secondary: {
          main: '#FBC33C',
        },
      },
    },
  },

  workspace:{
    showZoomControls: true,
  },

  selectedTheme: 'dark',
         workspaceControlPanel: [{
          enabled: false, // Configure if the control panel should be rendered.  Useful if you want to lock the viewer down to only the configured manifests
        }],



};



const plugins = [
  ...miradorImageToolsPlugin,
  ...miradorDownloadPlugins,
];


Mirador.viewer(config, plugins);
