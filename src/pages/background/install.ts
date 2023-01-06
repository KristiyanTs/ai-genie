type OnInstalledReason =
  | 'install'
  | 'update'
  | 'chrome_update'
  | 'shared_module_update'

interface InstalledParams {
  id: string | undefined
  previousVersion: string | undefined
  reason: OnInstalledReason
}

// Redirect users to a form when the extension is uninstalled.
export const installListener = (details: InstalledParams): void => {
  // @ts-ignore
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    // Redirect users to a form when the extension is uninstalled.
    chrome.runtime.setUninstallURL('https://forms.gle/167NMy3Cr9uuV9ZaA')
  }
}
