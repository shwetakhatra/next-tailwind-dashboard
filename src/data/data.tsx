import { RxDashboard, RxPerson } from 'react-icons/rx'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { FiSettings, FiLogOut } from 'react-icons/fi'

export const data = [
  {
    id: 1,
    name: {
      first: 'John',
      last: 'Smith',
    },
    total: 2795.95,
    status: 'On Hold',
    method: 'PayPal',
    date: '15 Minutes ago',
  },
  {
    id: 2,
    name: {
      first: 'Chris',
      last: 'Adams',
    },
    total: 1195.95,
    status: 'Processing',
    method: 'PayPal',
    date: '23 Minutes ago',
  },
  {
    id: 3,
    name: {
      first: 'Sarah',
      last: 'Smith',
    },
    total: 495.85,
    status: 'Completed',
    method: 'Visa',
    date: '1 Hour ago',
  },
  {
    id: 4,
    name: {
      first: 'Joseph',
      last: 'Choo',
    },
    total: 150.45,
    status: 'Processing',
    method: 'MasterCard',
    date: '1 Hour ago',
  },
  {
    id: 5,
    name: {
      first: 'Steve',
      last: 'Harding',
    },
    total: 175.25,
    status: 'On Hold',
    method: 'PayPal',
    date: '2 Hour ago',
  },
  {
    id: 6,
    name: {
      first: 'Laura',
      last: 'Croft',
    },
    total: 1295.75,
    status: 'Completed',
    method: 'Check',
    date: '3 Hour ago',
  },
  {
    id: 7,
    name: {
      first: 'Michael',
      last: 'Jones',
    },
    total: 89.95,
    status: 'Completed',
    method: 'MasterCard',
    date: '3 Hour ago',
  },
  {
    id: 8,
    name: {
      first: 'James',
      last: 'Bond',
    },
    total: 689.45,
    status: 'Completed',
    method: 'Visa',
    date: '7 Hour ago',
  },
  {
    id: 9,
    name: {
      first: 'Haley',
      last: 'Whiting',
    },
    total: 14.99,
    status: 'Completed',
    method: 'PayPal',
    date: '1 Day ago',
  },
  {
    id: 10,
    name: {
      first: 'Tim',
      last: 'Thomas',
    },
    total: 218.99,
    status: 'Completed',
    method: 'MasterCard',
    date: '1 Day ago',
  },
];

export const sidebarItems = [
  { href: "/", icon: <RxDashboard size={20} />, label: "Dashboard" },
  { href: "/customers", icon: <HiOutlineBookOpen size={20} />, label: "Customers" },
  { href: "/orders", icon: <RxPerson size={20} />, label: "Orders" },
  { href: "/settings", icon: <FiSettings size={20} />, label: "Settings" }
];

export const tabs = [
    { 
      id: 'generalsettings', 
      label: 'General Settings', 
      content: 'Configure general settings for your application.'
    },
    { 
      id: 'preferences', 
      label: 'Preferences', 
      content: 'Customize your preferences to tailor your experience.'
    }
  ];