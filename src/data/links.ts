import { profile } from './profile';

const l = profile.links;

// Dikelompokkan untuk section "Beyond the Data". Tambah/pindah item di sini.
export const linkGroups = [
  { title: 'Audio & Video', items: [{ label: 'Spotify', url: l.spotify }, { label: 'YouTube', url: l.youtube }] },
  { title: 'Writing', items: [{ label: 'Substack', url: l.substack }, { label: 'Medium', url: l.medium }] },
  {
    title: 'Design',
    items: [
      { label: 'Dribbble', url: l.dribbble },
      { label: 'Behance', url: l.behance },
      { label: 'Pinterest', url: l.pinterest },
      { label: 'DeviantArt', url: l.deviantart },
    ],
  },
  { title: 'Social', items: [{ label: 'X', url: l.x }, { label: 'Instagram', url: l.instagram }] },
  {
    title: 'Support',
    items: [
      { label: 'Patreon', url: l.patreon },
      { label: 'KaryaKarsa', url: l.karyakarsa },
      { label: 'Lynk.id', url: l.lynk },
    ],
  },
];
