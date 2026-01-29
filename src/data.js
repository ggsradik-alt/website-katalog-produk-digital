export const products = [
  {
    id: 'netflix',
    name: 'Netflix',
    image: 'public/images/netflix.png', // Sudah ada contoh untuk Netflix
    logoText: 'N',
    color: '#E50914',
    category: 'Video',
    featured: true,
    variants: [
      { name: '1P1U 1 Bulan (Sharing)', price: 'Rp40.000' },
      { name: '1P2U 1 Bulan (Sharing)', price: 'Rp28.000' },
      { name: '7 Hari (Sharing)', price: 'Rp15.000' },
      { name: '5 Hari (Sharing)', price: 'Rp10.000' },
      { name: '3 Hari (Sharing)', price: 'Rp9.000' },
      { name: '1 Hari (Sharing)', price: 'Rp7.000' }
    ]
  },
  {
    id: 'disney',
    name: 'Disney+',
    image: 'public/images/disney.png',
    logoText: 'D+',
    color: '#113CCF',
    category: 'Video',
    featured: true,
    variants: [
      { name: '1 Bulan (Sharing)', price: 'Rp22.000' },
      { name: '7 Hari (Sharing)', price: 'Rp12.000' },
      { name: '5 Hari (Sharing)', price: 'Rp9.000' },
      { name: '3 Hari (Sharing)', price: 'Rp6.000' },
      { name: '1 Hari (Sharing)', price: 'Rp3.000' }
    ]
  },
  {
    id: 'youtube',
    name: 'YouTube',
    image: 'public/images/youtube.png',
    logoText: 'YT',
    color: '#FF0000',
    category: 'Video',
    featured: true,
    variants: [
      { name: 'Family 1 Bulan', price: 'Rp12.000' },
      { name: 'Individu 1 Bulan', price: 'Rp7.000' },
      { name: 'Individu 3 Bulan', price: 'Rp13.000' },
      { name: 'Invite 1 Bulan', price: 'Rp3.000' }
    ]
  },
  {
    id: 'canva',
    name: 'Canva',
    image: 'public/images/canva.png',
    logoText: 'C',
    color: '#00C4CC',
    category: 'Productivity',
    featured: true,
    variants: [
      { name: 'Invite Member 1 Bulan', price: 'Rp5.000' },
      { name: 'Invite Designer 1 Bulan', price: 'Rp7.000' },
      { name: 'Edu Lifetime', price: 'Rp40.000' },
      { name: 'Owner Business 1 Bulan', price: 'Rp20.000' },
      { name: 'Owner Edu Lifetime', price: 'Rp50.000' }
    ]
  },
  {
    id: 'spotify',
    name: 'Spotify',
    image: 'public/images/spotify.png',
    logoText: 'Sp',
    color: '#1DB954',
    category: 'Music',
    featured: true,
    variants: [
      { name: 'IndPlan 1 Bulan', price: 'Rp10.000' },
      { name: 'IndPlan 3 Bulan', price: 'Rp20.000' }
    ]
  },
  {
    id: 'viu',
    name: 'Viu',
    image: 'public/images/viu.png',
    logoText: 'V',
    color: '#F4B400',
    category: 'Video',
    variants: [
      { name: 'Private Lifetime', price: 'Rp1.000' }
    ]
  },
  {
    id: 'vidio',
    name: 'Vidio',
    image: 'public/images/vidio.png',
    logoText: 'Vid',
    color: '#D81E36',
    category: 'Video',
    variants: [
      { name: 'AllDev 1 Bulan (Sharing)', price: 'Rp23.000' },
      { name: 'Mobile 1 Bulan (Sharing)', price: 'Rp17.000' },
      { name: 'AllDev 1 Bulan (Private)', price: 'Rp38.000' },
      { name: 'Mobile 1 Bulan (Private)', price: 'Rp25.000' },
      { name: 'TV 1 Tahun (Private)', price: 'Rp10.000' }
    ]
  },
  {
    id: 'dramabox',
    name: 'DramaBox',
    image: 'public/images/dramabox.png',
    logoText: 'DB',
    color: '#FF4081',
    category: 'Video',
    variants: [
      { name: 'Sharing 1 Bulan', price: 'Rp12.000' }
    ]
  },
  {
    id: 'capcut',
    name: 'CapCut',
    image: 'public/images/capcut.png',
    logoText: 'CC',
    color: '#000000',
    category: 'Productivity',
    variants: [
      { name: 'Private 7 Hari', price: 'Rp5.000' },
      { name: 'Private 1 Bulan (Gar 7D)', price: 'Rp10.000' },
      { name: 'Private 1 Bulan (FullGar)', price: 'Rp13.000' }
    ]
  },
  {
    id: 'getcontact',
    name: 'Getcontact',
    image: 'public/images/getcontact.png',
    logoText: 'Gc',
    color: '#2490F6',
    category: 'Tools',
    variants: [
      { name: 'Premium 1 Bulan', price: 'Rp10.000' }
    ]
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    image: 'public/images/chatgpt.png',
    logoText: 'AI',
    color: '#10A37F',
    category: 'Productivity',
    variants: [
      { name: 'Plus 1 Bulan (Private)', price: 'Rp15.000' },
      { name: 'Business 1 Bulan (Private)', price: 'Rp30.000' },
      { name: 'Business 1 Bulan (Invite)', price: 'Rp10.000' }
    ]
  },
  {
    id: 'iqiyi',
    name: 'iQIYI',
    image: 'public/images/iqiyi.png',
    logoText: 'iQ',
    color: '#00CC33',
    category: 'Video',
    variants: [
      { name: 'Premium 1 Tahun (Sharing)', price: 'Rp15.000' },
      { name: 'Premium 1 Bulan (Sharing)', price: 'Rp12.000' },
      { name: 'Standar 1 Bulan (Sharing)', price: 'Rp10.000' },
      { name: 'Premium 1 Bulan (Private)', price: 'Rp35.000' },
      { name: 'Standar 1 Bulan (Private)', price: 'Rp30.000' }
    ]
  },
  {
    id: 'wetv',
    name: 'WeTV',
    image: 'public/images/wetv.png',
    logoText: 'We',
    color: '#0099FF',
    category: 'Video',
    variants: [
      { name: 'Sharing 1 Bulan', price: 'Rp10.000' },
      { name: 'Private 1 Bulan', price: 'Rp28.000' }
    ]
  },
  {
    id: 'nordvpn',
    name: 'NordVPN',
    image: 'public/images/nordvpn.png',
    logoText: 'NV',
    color: '#4687FF',
    category: 'VPN',
    variants: [
      { name: 'Private 3 Bulan', price: 'Rp15.000' }
    ]
  },
  {
    id: 'meitu',
    name: 'Meitu',
    image: 'public/images/meitu.png',
    logoText: 'M',
    color: '#FF6699',
    category: 'Productivity',
    variants: [
      { name: 'Private 7 Hari', price: 'Rp7.000' },
      { name: 'Private 1 Bulan', price: 'Rp20.000' }
    ]
  },
  {
    id: 'hbomax',
    name: 'HBO Max',
    image: 'public/images/hbomax.png',
    logoText: 'HBO',
    color: '#5D2E8E',
    category: 'Video',
    variants: [
      { name: 'Ultimate 1 Bulan (Sharing)', price: 'Rp20.000' },
      { name: 'Standar 1 Bulan (Sharing)', price: 'Rp15.000' },
      { name: 'Ultimate 1 Bulan (Private)', price: 'Rp60.000' },
      { name: 'Standar 1 Bulan (Private)', price: 'Rp40.000' }
    ]
  },
  {
    id: 'bstation',
    name: 'Bstation',
    image: 'public/images/bstation.png',
    logoText: 'Bs',
    color: '#00A1D6',
    category: 'Video',
    variants: [
      { name: 'Sharing 1 Bulan', price: 'Rp10.000' },
      { name: 'Sharing 1 Tahun', price: 'Rp15.000' },
      { name: 'Private 1 Bulan', price: 'Rp35.000' }
    ]
  },
  {
    id: 'gagaoolala',
    name: 'GagaOOLala',
    image: 'public/images/gagaoolala.png',
    logoText: 'Go',
    color: '#FF3366',
    category: 'Video',
    variants: [
      { name: 'Sharing 1 Bulan', price: 'Rp10.000' }
    ]
  },
  {
    id: 'wink',
    name: 'Wink',
    image: 'public/images/wink.png',
    logoText: 'Wi',
    color: '#000000',
    category: 'Productivity',
    variants: [
      { name: 'Private 7 Hari', price: 'Rp8.000' }
    ]
  },
  {
    id: 'crunchyroll',
    name: 'Crunchyroll',
    image: 'public/images/crunchyroll.png',
    logoText: 'Cr',
    color: '#F47521',
    category: 'Video',
    variants: [
      { name: 'Sharing 1 Bulan', price: 'Rp10.000' },
      { name: 'Sharing 1 Tahun', price: 'Rp20.000' }
    ]
  },
  {
    id: 'primevideo',
    name: 'Prime Video',
    image: 'public/images/primevideo.png',
    logoText: 'PV',
    color: '#00A8E1',
    category: 'Video',
    variants: [
      { name: 'Sharing 1 Bulan', price: 'Rp7.000' },
      { name: 'Private 1 Bulan', price: 'Rp12.000' }
    ]
  },
  {
    id: 'zoom',
    name: 'Zoom',
    image: 'public/images/zoom.png',
    logoText: 'Zm',
    color: '#2D8CFF',
    category: 'Productivity',
    variants: [
      { name: 'Private 7 Hari', price: 'Rp7.000' },
      { name: 'Private 14 Hari', price: 'Rp12.000' }
    ]
  },
  {
    id: 'reelshort',
    name: 'ReelShort',
    image: 'public/images/reelshort.png',
    logoText: 'Rs',
    color: '#E50914',
    category: 'Video',
    variants: [
      { name: 'Sharing 1 Bulan', price: 'Rp15.000' }
    ]
  },
  {
    id: 'visionplus',
    name: 'Vision+',
    image: 'public/images/visionplus.png',
    logoText: 'V+',
    color: '#00C8FF',
    category: 'Video',
    variants: [
      { name: 'Sharing 1 Bulan', price: 'Rp10.000' }
    ]
  },
  {
    id: 'loklok',
    name: 'Loklok',
    image: 'public/images/loklok.png',
    logoText: 'Lo',
    color: '#8A2BE2',
    category: 'Category',
    variants: [
      { name: 'Sharing AllDev 1 Bulan', price: 'Rp22.000' },
      { name: 'Sharing NoTV 1 Bulan', price: 'Rp20.000' }
    ]
  },
  {
    id: 'scribd',
    name: 'Scribd',
    image: 'public/images/scribd.png',
    logoText: 'Sc',
    color: '#1E7E84',
    category: 'Productivity',
    variants: [
      { name: 'Private 1 Bulan', price: 'Rp5.000' }
    ]
  },
  {
    id: 'expressvpn',
    name: 'ExpressVPN',
    image: 'public/images/expressvpn.png',
    logoText: 'EV',
    color: '#C6161D',
    category: 'VPN',
    variants: [
      { name: 'Private 1 Bulan', price: 'Rp10.000' }
    ]
  },
  {
    id: 'duolingo',
    name: 'Duolingo',
    image: 'public/images/duolingo.png',
    logoText: 'Duo',
    color: '#58CC02',
    category: 'Productivity',
    variants: [
      { name: 'Private 1 Bulan', price: 'Rp10.000' }
    ]
  },
  {
    id: 'melolo',
    name: 'Melolo',
    image: 'public/images/melolo.png',
    logoText: 'Me',
    color: '#FFD700',
    category: 'Music',
    variants: [
      { name: 'Sharing 1 Bulan', price: 'Rp11.000' },
      { name: 'Sharing 3 Bulan', price: 'Rp15.000' }
    ]
  },
  {
    id: 'moviebox',
    name: 'MovieBox',
    image: 'public/images/moviebox.png',
    logoText: 'MB',
    color: '#00CE9F',
    category: 'Video',
    variants: [
      { name: 'Sharing 1 Bulan', price: 'Rp10.000' }
    ]
  },
  {
    id: 'dazz',
    name: 'Dazz',
    image: 'public/images/dazz.png',
    logoText: 'Dz',
    color: '#000000',
    category: 'Productivity',
    variants: [
      { name: 'Private Lifetime', price: 'Rp15.000' }
    ]
  }
];
