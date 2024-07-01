import { TabButton } from '@/types';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const tabsButtonsList: TabButton[] = [
  {
    id: 1,
    label: 'User A',
    email: 'jane.smith@example.com',
  },
  {
    id: 2,
    label: 'User B',
    email: 'bob@example.com',
  },
  {
    id: 3,
    label: 'User C',
    email: 'norecord@example.com',
  },
];

export { tabsButtonsList, apiUrl };
