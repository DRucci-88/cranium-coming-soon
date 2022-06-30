import { ReactNode } from "react"
import { BsArrow90DegLeft, BsBarChart, BsBook, BsCameraVideo, BsClipboard, BsCurrencyDollar, BsGear, BsPencilSquare, BsPeople } from "react-icons/bs"
import { BiHomeAlt } from "react-icons/bi"

interface DashData {
  title: string,
  path: string,
  icon: ReactNode
}

const classes = "w-7 h-7"

export const DashboardData: DashData[]=[
  {
    title: 'Back to Dashboard',
    path: '/home-dashboard',
    icon: <BsArrow90DegLeft className={classes} />
  },
  {
    title: 'Overview',
    path: 'overview',
    icon: <BsClipboard className={classes} />
  },
  {
    title: 'Basic Setup',
    path: 'basic-setup',
    icon: <BsGear className={classes} />
  },
  {
    title: 'Registration',
    path: 'registration',
    icon: <BsPencilSquare className={classes} />
  },
  {
    title: 'Schedule',
    path: 'schedule',
    icon: <BsBook className={classes} />
  },
  {
    title: 'Venue',
    path: 'venue',
    icon: <BiHomeAlt className={classes} />
  },
  {
    title: 'People',
    path: 'people',
    icon: <BsPeople className={classes} />
  },
  {
    title: 'Marketing',
    path: 'marketing',
    icon: <BsCurrencyDollar className={classes} />
  },
  {
    title: 'Recording',
    path: '/',
    icon: <BsCameraVideo className={classes} />
  },
  {
    title: 'Analytics',
    path: '/',
    icon: <BsBarChart className={classes} />
  },
]

