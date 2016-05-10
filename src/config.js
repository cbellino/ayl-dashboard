import getMuiTheme from 'material-ui/styles/getMuiTheme'

export const port = process.env.PORT || 5000
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`
export const googleAnalyticsId = process.env.GA_ID || 'UA-XXXXX-X'
export const firebaseURL = process.env.FIREBASE_URL || 'https://ayl-dashboard-dev.firebaseio.com'
export const defaultMuiTheme = getMuiTheme()
