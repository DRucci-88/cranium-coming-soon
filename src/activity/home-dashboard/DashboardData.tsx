import { ReactNode } from "react"
import { BsCalendar, BsClipboard, BsCurrencyDollar, BsPerson } from "react-icons/bs"

interface DashData {
  title: string,
  path: string,
  icon: ReactNode
}

const classes = "w-7 h-7"

export const DashboardData: DashData[]=[
  {
    title: 'Overview',
    path: 'overview',
    icon: <BsClipboard className={classes} />
  },
  {
    title: 'Events',
    path: 'events',
    icon: <BsCalendar className={classes} />
  },
  {
    title: 'Billing',
    path: 'billing',
    icon: <BsCurrencyDollar className={classes} />
  },
  {
    title: 'Profile',
    path: 'profile',
    icon: <BsPerson className={classes} />
  },
]

