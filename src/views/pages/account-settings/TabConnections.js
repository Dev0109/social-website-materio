// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const connectedAccountsArr = [
  {
    checked: true,
    title: 'Google',
    logo: '/images/logos/google.png',
    subtitle: 'Calendar and Contacts'
  },
  {
    checked: false,
    title: 'Slack',
    logo: '/images/logos/slack.png',
    subtitle: 'Communications'
  },
  {
    checked: true,
    title: 'Github',
    logo: '/images/logos/github.png',
    subtitle: 'Manage your Git repositories'
  },
  {
    checked: true,
    title: 'Mailchimp',
    subtitle: 'Email marketing service',
    logo: '/images/logos/mail-chimp.png'
  },
  {
    title: 'Asana',
    checked: false,
    subtitle: 'Communication',
    logo: '/images/logos/asana.png'
  }
]

const socialAccountsArr = [
  {
    title: 'Facebook',
    isConnected: false,
    logo: '/images/logos/facebook.png'
  },
  {
    title: 'Twitter',
    isConnected: true,
    username: '@ThemeSelection',
    logo: '/images/logos/twitter.png'
  },
  {
    title: 'Instagram',
    isConnected: true,
    username: '@ThemeSelection',
    logo: '/images/logos/instagram.png'
  },
  {
    title: 'Dribbble',
    isConnected: false,
    logo: '/images/logos/dribbble.png'
  },
  {
    title: 'Behance',
    isConnected: false,
    logo: '/images/logos/behance.png'
  }
]

const TabConnections = () => {
  return (
    <Card>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Box sx={{ mb: 6 }}>
              <Typography variant='h6'>Connected Accounts</Typography>
              <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                Display content from your connected accounts on your site
              </Typography>
            </Box>
            {connectedAccountsArr.map(account => {
              return (
                <Box
                  key={account.title}
                  sx={{
                    gap: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '&:not(:last-of-type)': { mb: 4 }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ mr: 2.5, display: 'flex', justifyContent: 'center' }}>
                      <img src={account.logo} alt={account.title} height='30' width='30' />
                    </Box>
                    <div>
                      <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>{account.title}</Typography>
                      <Typography variant='body2'>{account.subtitle}</Typography>
                    </div>
                  </Box>
                  <Switch defaultChecked={account.checked} />
                </Box>
              )
            })}
          </CardContent>
        </Grid>

        <Grid item xs={12} md={6}>
          <CardContent>
            <Box sx={{ mb: 6 }}>
              <Typography variant='h6'>Social Accounts</Typography>
              <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                Display content from social accounts on your site
              </Typography>
            </Box>
            {socialAccountsArr.map(account => {
              return (
                <Box
                  key={account.title}
                  sx={{
                    gap: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '&:not(:last-of-type)': { mb: 4 }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ mr: 2.5, minWidth: 45, display: 'flex', justifyContent: 'center' }}>
                      <img src={account.logo} alt={account.title} height='30' />
                    </Box>
                    <div>
                      <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>{account.title}</Typography>
                      <Typography variant='body2'>
                        {account.isConnected ? account.username : 'Not Connected'}
                      </Typography>
                    </div>
                  </Box>
                  <Button variant='outlined' sx={{ p: 1.5, minWidth: 38 }} color='secondary'>
                    <Icon icon={account.isConnected ? 'mdi:delete-outline' : 'mdi:link-variant'} />
                  </Button>
                </Box>
              )
            })}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default TabConnections
