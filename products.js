const products = [
  {
    id: 'price_1MFSePAfVNgIAFWktuhsiT5W',
    name: '39 串串Lok Lok',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2022/06/Copy-of-Lok-Lok-Stock-Photo-768x518.png',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSerAfVNgIAFWkMk6pyiSx',
    name: 'Alkaber',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Indian-Muslim-768x514.png',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSfZAfVNgIAFWkQtRnRFrb',
    name: 'Asialicious',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/Asialicious-768x512.jpg',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSg2AfVNgIAFWkG5tfe9et',
    name: 'Asian Wok',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/asian-wok-768x432.jpg',
    rating: {
      count: 213,
      rate: 5,
    },
  },
  {
    id: 'price_1MFSgjAfVNgIAFWkvxj4VZ0T',
    name: 'Bella Italia',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/11/Bella-Italia-768x768.jpeg',
    rating: {
      count: 104,
      rate: 4,
    },
  },
  {
    id: 'price_1MFShAAfVNgIAFWkHsfCcRTC',
    name: 'Bottle Shop',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Bottle-Shop-768x527.jpg',
    rating: {
      count: 213,
      rate: 5,
    },
  },
  {
    id: 'price_1MFShgAfVNgIAFWkZXhsYoof',
    name: 'Burgs by Project Warung',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/burgs-768x514.jpg',
    rating: {
      count: 271,
      rate: 5,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: 'Coffee Station',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Drink-Station-768x514.png',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: 'Each a Cup',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Each-a-Cup-768x512.jpg',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: 'Grains & Co',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/grains-768x960.jpg',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: 'Hungry Thai',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Hungry-Thai-768x768.jpeg',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: 'ICG Chicken & Burger',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/96767615_123323359359844_8809384734808342528_n-e1662714035400-768x574.jpeg',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: 'Ishiro Fusion',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/ishiro-768x1057.jpeg',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: 'Iskina Cebu by Byaheng Lami',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/cebu-768x576.jpg',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: 'JC Fruits & Beverages',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Fruit-Juice-768x513.png',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: 'JC Nasi Lemak',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/jc_nasi_lemak1-768x768.jpg',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: 'Kebabs Factory',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/GYRO-min-768x513.jpg',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: 'Kim’s Fruit Stall',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Kims-Fruit-Stall-768x512.jpeg',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: 'Kopifellas',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/kopi-768x432.jpg',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: 'Nasi Padang',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Nasi-Padang-768x512.jpeg',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: 'Noodlefellas',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/noddle-768x641.jpg',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: 'Savour Delights Korean Food',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/savour-768x945.jpg',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: 'Sincere Kitchen',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/Sincere-Kitchen.png',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: 'Smokbites',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/285894669_404189061611802_5899189282573678506_n-e1656640552636-768x768.jpg',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: 'Streets of Bangkok',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/mookata-768x588.jpg',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: 'Teh Tarik',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Teh-Tarik-768x609.png',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: 'Verimix',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Vermix-2-768x521.jpeg',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: 'Wong Kee Wanton Noodles',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/Dumpling-Tomato-noodle-02-768x512.jpg',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: '光荣Mixed Rice',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Mixed-Rice-2-768x506.png',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: '南兴Chicken Rice',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Chicken-Rice-768x511.png',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: '友财Mixed Food',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Bee-Hoon-768x508.png',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: '大海 Mala Hot Pot',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/Mala-Pot.png',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: '好 Mixed Food',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Mixed-Rice-768x515.png',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: '旺角Ban Mian',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/Ban-Mian-768x512.jpeg',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: '榮妈 Curry Rice',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/curry-rice-768x768.jpg',
    rating: {
      count: 78,
      rate: 4,
    },
  },
  {
    id: 'price_1MFSi7AfVNgIAFWkbF8rENUz',
    name: '爽口面 Shuang Kou Mian',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/05/shuang_kou-768x512.jpeg',
    rating: {
      count: 85,
      rate: 4.5,
    },
  },
  {
    id: 'price_1MFSiUAfVNgIAFWkqipmVVsw',
    name: '老掌柜La Mian',
    price: 1000,
    currency: 'USD',
    image: 'https://timbreplus.sg/wp-content/uploads/2021/09/TON-La-Mian-XLB-768x538.png',
    rating: {
      count: 78,
      rate: 4,
    },
  },
];

export default products;
