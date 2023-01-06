import { DragEvent } from 'react'

export interface Badge {
  label: string
  when: number
}

export type Badges = Array<Badge>

export interface Notification {
  iconUrl: string
  title: string
  message: string
  priority: number
  type: string
  eventTime: number
}

export type Notifications = Array<Notification>

export interface UserInfo {
  _id: string
  email: string
  googleId: string
  grantedGoogleCalendar: boolean
  name: string
  picture: string
  proExpiry: number
}

export interface Auth {
  accessToken?: string
  refreshToken?: string
  user?: UserInfo
}

export enum AlertTypes {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info',
}

export interface Alert {
  id?: number
  message: string
  info?: string
  multiplier?: number
  severity?: AlertTypes
  expiresIn?: number | null
}

export type Alerts = Array<Alert>

export interface Widgets {
  time: { enabled: boolean; format: string; size: number }
  organizeTabs: { enabled: boolean }
  bookmarks: { enabled: boolean }
  googleCalendar: { enabled: boolean }
  tasks: { enabled: boolean }
  search: { provider: string; enabled: boolean }
  calendar: { enabled: boolean }
}

export type WidgetsUpdate = Partial<Widgets>

export type Mode = 'dark' | 'light'

export type SortOrder = 'asc' | 'desc'

export interface Theme {
  mode: Mode
  opacity: number
  blur: number
  borderRadius: number
  fontFamily: string
  fontSize: number
}

export interface System {
  showChangelog: boolean
}

export interface Provider {
  title: string
  url: string
}

export type BookmarkView = 'icon' | 'table'

export type BookmarkVariant = 'link' | 'folder'

export interface Bookmark {
  id?: string
  parentId?: string
  title: string
  url?: string
  children?: Array<Bookmark>
  index?: number
}

export interface NewBookmark {
  parentId?: string
  title: string
  url: string
}

export type Bookmarks = Array<Bookmark>

export interface Window {
  id?: number
  alwaysOnTop: boolean
  focused: boolean
  height?: number
  incognito: boolean
  left?: number
  sessionId?: string
  state?: WindowState
  tabs?: Tabs
  top?: number
  type?: WindowType
  width?: number
}

export type Windows = Array<Window>

export type WindowType = 'normal' | 'popup' | 'panel' | 'app' | 'devtools'

export type CustomDragEvent = DragEvent<
  HTMLAnchorElement | HTMLTableRowElement | HTMLLIElement | HTMLDivElement
>
export type WindowState =
  | 'normal'
  | 'minimized'
  | 'maximized'
  | 'fullscreen'
  | 'locked-fullscreen'

export type TabStatus = 'unloaded' | 'loading' | 'complete'

export interface Tab {
  active: boolean
  audible?: boolean
  autoDiscardable: boolean
  discarded: boolean
  favIconUrl?: string
  groupId: number
  height?: number
  highlighted: boolean
  id?: number
  incognito: boolean
  index: number
  mutedInfo?: any
  openerTabId?: number
  pendingUrl?: string
  pinned: boolean
  sessionId?: string
  status?: TabStatus
  title?: string
  url?: string
  width?: number
  windowId: number
}

export type Tabs = Array<Tab>

export interface TabGroup {
  collapsed: boolean
  color: string
  id: number
  title?: string
  windowId: number
  index?: number
  children?: Tabs
}

export type TabGroups = Array<TabGroup>

export interface DateRangeRequest {
  timeMin: string
  timeMax: string
}

export interface Alarm {
  name: string
  scheduledTime: number
}

export interface Permissions {
  origins?: string[]
  permissions?: string[]
}

export interface StorageChange {
  oldValue?: unknown
  newValue?: unknown
}

export type StorageArea = 'sync' | 'local' | 'managed' | 'session'
