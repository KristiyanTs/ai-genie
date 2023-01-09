import packageJson from './package.json'

const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: 'AI Genie | ChatGPT New Tab',
  version: packageJson.version,
  description: packageJson.description,
  options_page: 'src/pages/options/index.html',
  background: { service_worker: 'src/pages/background/index.js' },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'icon-34.png',
  },
  chrome_url_overrides: {
    newtab: 'src/pages/newtab/index.html',
  },
  icons: {
    '128': 'icon-128.png',
  },
  permissions: [],
  web_accessible_resources: [
    {
      resources: ['assets/js/*.js', 'icon-128.png', 'icon-34.png'],
      matches: ['*://*/*'],
    },
  ],
  key: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnk8Cu62kkbYmb5VQRSSqlFvKrGW1IrlkFr2pHPBsgQP9bfDy62a20xBdewEfIz7PsXrGZpI7LcV36lAFNTpDi35UJqMFyYW3JQoqCKiFhRxSxOxO3mYTEZZ9mNw2nG9FyH86ewwAPSW5j6k+4COD0lfi7VAJP6CB02j9mHyS4LEhgXFVCO7tC82Dz62qK5RR3/1rdibQ9bcK5dpqte7j04eUULx1/0Cj9jN4JkNkVes2m+2r2UxVAauqf8EKF0ncK+TLkKuYXST3brOxfIhWru3ZGh++7d9i1RPHqCpIdLZNQ6OvFJmW8ul/IBXp34SbDPRU7jQd/QmoW03yNhLawQIDAQAB',
}

export default manifest
