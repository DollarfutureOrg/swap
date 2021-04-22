import { MenuEntry } from 'dlf-ui-kit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://dollarswap.io/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://app.dollarswap.io',
      },
      {
        label: 'Liquidity',
        href: 'https://app.dollarswap.io/#/pools',
      },
    ],
  },
  {
    label: 'Den',
    icon: 'FarmIcon',
    href: 'https://dollarswap.io/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https:/s/dollarswap.io/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://dollarswap.io/lottery',
  },
  {
    label: 'NFT Lions',
    icon: 'NftIcon',
    href: '#',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://dollarswap.io/teams',
      },
      {
        label: 'Task Center',
        href: 'https://dollarswap.io/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://dollarswap.io/profile',
      },
    ],
  },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  {
    label: 'Launchpad',
    icon: 'IfoIcon',
    href: 'https://dollarswap.io/ifo',
  },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Voting',
  //       href: 'https://voting.fi.Dollarswap.io',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.fi.Dollarswap.io',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //   ],
  // },
]

export default config
