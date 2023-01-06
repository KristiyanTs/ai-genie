import reloadOnUpdate from 'virtual:reload-on-update-in-background-script'

reloadOnUpdate('pages/background')

console.log('background loaded')

import { installListener } from './install'

// @ts-ignore
chrome.runtime.onInstalled.addListener(installListener)

chrome.runtime.onMessageExternal.addListener(function (
  request,
  sender,
  sendResponse
) {
  console.log(request, 'sending response')
  sendResponse({ newtab: true })
})
