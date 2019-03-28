const menu = [
  {
    name: 'Logo',
    path: '/',
    subMenu: [],
    isCollapsable: false,
    icon: 'https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg'
  },
  {
    name: 'Mac',
    path: '/mac',
    subMenu: [
      {
        name: 'MacBook',
        icon: 'https://www.apple.com/v/mac/home/af/images/familybrowser/macbook__fjd32xo0xwmm_large.svg',
        path: '/macbook',
      },
      {
        name: 'MacBook Air',
        icon: 'https://www.apple.com/v/mac/home/af/images/familybrowser/macbookair__by1vem70tkc2_large.svg',
        path: '/macbook-air',
      },
      {
        name: 'MacBook Pro',
        icon: 'https://www.apple.com/v/mac/home/af/images/familybrowser/macbookpro__e0wcugzmt26a_large.svg',
        path: '/macbook-pro',
      },
      {
        name: 'iMac',
        icon: 'https://www.apple.com/v/mac/home/af/images/familybrowser/imac__dlz2ciyr6hm6_large.svg',
        path: '/imac',
        isNew: true
      },
      {
        name: 'iMac Pro',
        icon: 'https://www.apple.com/v/mac/home/af/images/familybrowser/imac_pro__el8kcar06qky_large.svg',
        path: '/imac-pro',
        isNew: false,
      },
      {
        name: 'Mac Pro',
        icon: 'https://www.apple.com/v/mac/home/af/images/familybrowser/macpro__dt69qr0ywncm_large.svg',
        path: '/mac-pro',
        isNew: false,
      },
      {
        name: 'Mac Mini',
        icon: 'https://www.apple.com/v/mac/home/af/images/familybrowser/macmini__rzlk7b0xsmqq_large.svg',
        path: '/mac-mini',
        isNew: false,
      },
      {
        name: 'Accessories',
        icon: 'https://www.apple.com/v/mac/home/af/images/familybrowser/mac_acc__fia3ihqup4ae_large.svg',
        path: '/mac/accessories',
        isNew: false,
      },
      {
        name: 'Mojave',
        icon: 'https://www.apple.com/v/mac/home/af/images/familybrowser/mac_osx__dq0x03ehapyu_large.svg',
        path: '/macos/mojave',
        isNew: false,
      },
      {
        name: 'Compare',
        icon: 'https://www.apple.com/v/mac/home/af/images/familybrowser/mac_comp__by57zw2zt32a_large.svg',
        path: '/mac/compare',
        isNew: false,
      },
    ],
    isCollapsable: true
  },
  {
    name: 'iPad',
    path: '/ipad',
    subMenu: [
      {
        name: 'iPad Pro',
        icon: 'https://www.apple.com/v/ipad/home/ao/images/chapternav/ipadpro_light__dxq7nxjgsd2e_large.svg',
        path: '/ipad-pro',
        isNew: false,
      },
      {
        name: 'iPad Air',
        icon: 'https://www.apple.com/v/ipad/home/ao/images/chapternav/ipadair_light__gan6yfrffc66_large.svg',
        path: '/ipad-air',
        isNew: true,
      },
      {
        name: 'iPad',
        icon: 'https://www.apple.com/v/ipad/home/ao/images/chapternav/ipad_light__expohijp19si_large.svg',
        path: '/ipad-9.7',
        isNew: false,
      },
      {
        name: 'iPad Mini',
        icon: 'https://www.apple.com/v/ipad/home/ao/images/chapternav/ipadmini_light__bxpulkud30s2_large.svg',
        path: '/ipad-mini',
        isNew: false,
      },
      {
        name: 'Compare',
        icon: 'https://www.apple.com/v/ipad/home/ao/images/chapternav/ipad_comp_light__f80dzq6i8sq6_large.svg',
        path: '/ipad/compare',
        isNew: false,
      },
      {
        name: 'Apple Pencil',
        icon: 'https://www.apple.com/v/ipad/home/ao/images/chapternav/apple_pencil_light__e9zorbynwqie_large.svg',
        path: '/apple-pencil',
        isNew: false,
      },
      {
        name: 'Smart Keyboard',
        icon: 'https://www.apple.com/v/ipad/home/ao/images/chapternav/keyboard_light__cjbr6d6i2vbm_large.svg',
        path: 'smart-keyboard',
        isNew: false,
      },
      {
        name: 'Accessories',
        icon: 'https://www.apple.com/v/ipad/home/ao/images/chapternav/ipad_acc_light__ebtftz3r2rwy_large.svg',
        path: '/ipad/accessories',
        isNew: false,
      },
      {
        name: 'iOS 12',
        icon: 'https://www.apple.com/v/ipad/home/ao/images/chapternav/ios_light__d8hlu55ivueu_large.svg',
        path: '/ios/ios-12',
        isNew: false,
      },
    ],
    isCollapsable: false
  },
  {
    name: 'iPhone',
    path: '/iphone',
    subMenu: [
      {
        name: 'iPhone Xs',
        icon: 'https://www.apple.com/v/iphone/home/z/images/chapternav/iphonexs_large.svg',
        path: '/iphone-xs',
        isNew: true,
      },
      {
        name: 'iPhone Xr',
        icon: 'https://www.apple.com/v/iphone/home/z/images/chapternav/iphonexr_large.svg',
        path: '/iphone-xr',
        isNew: true,
      },
      {
        name: 'iPhone 8',
        icon: 'https://www.apple.com/v/iphone/home/z/images/chapternav/iphone8_large.svg',
        path: '/iphone-8',
        isNew: false,
      },
      {
        name: 'iPhone 7',
        icon: 'https://www.apple.com/v/iphone/home/z/images/chapternav/iphone7_large.svg',
        path: '/iphone-7',
        isNew: false,
      },
      {
        name: 'iOS 12',
        icon: 'https://www.apple.com/v/ipad/home/ao/images/chapternav/ios_light__d8hlu55ivueu_large.svg',
        path: '/ios/ios-12',
        isNew: false,
      },
      {
        name: 'AirPods',
        icon: 'https://www.apple.com/v/iphone/home/z/images/chapternav/airpods_large.svg',
        path: '/airpods',
        isNew: false,
      },
      {
        name: 'Accessories',
        icon: 'https://www.apple.com/v/iphone/home/z/images/chapternav/accessories_large.svg',
        path: '/iphone/accessories',
        isNew: false,
      },
      {
        name: 'Compare',
        icon: 'https://www.apple.com/v/iphone/home/z/images/chapternav/compare_large.svg',
        path: '/iphone/compare',
        isNew: false,
      },
    ],
    isCollapsable: true
  },
  {
    name: 'Watch',
    path: '/watch',
    subMenu: [
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
    ],
    isCollapsable: true
  },
  {
    name: 'TV',
    path: '/tv',
    subMenu: [
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
    ],
    isCollapsable: true
  },
  {
    name: 'Music',
    path: '/music',
    subMenu: [
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
      {
        name: '',
        icon: '',
        path: '',
        isNew: false,
      },
    ],
    isCollapsable: true
  },
  {
    name: 'Support',
    path: '/support',
    subMenu: [],
    isCollapsable: true
  },
  {
    name: 'Search',
    path: '/search',
    subMenu: [
      {
        name: 'Apple ID Account Page',
        icon: '',
        path: '/appleid',
        isNew: false,
      },
      {
        name: 'Manuals',
        icon: '',
        path: '/manuals',
        isNew: false,
      },
      {
        name: 'Tech Specs',
        icon: '',
        path: '/specs',
        isNew: false,
      },
      {
        name: 'Apple Support Communities',
        icon: '',
        path: '/discussions',
        isNew: false,
      },
      {
        name: 'Contact Apple Support',
        icon: '',
        path: '/contact',
        isNew: false,
      },
    ],
    isCollapsable: false,
    icon: 'https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg'
  },
  {
    name: 'Shop',
    path: '/shop',
    subMenu: [
      {
        name: 'Bag',
        icon: 'https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg',
        path: '/shop/bag',
        isNew: false,
      },
      {
        name: 'Favorites',
        icon: '<i class="fas fa-heart"></i>',
        path: '/shop/favorites',
        isNew: false,
      },
      {
        name: 'Orders',
        icon: '',
        path: '/shop/orders',
        isNew: false,
      },
      {
        name: 'Account',
        icon: '',
        path: '/shop/account',
        isNew: false,
      },
      {
        name: 'Sign in',
        icon: '<i class="far fa-user"></i>',
        path: '/login',
        isNew: false,
      },
    ],
    isCollapsable: false,
    icon: 'https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg'
  }

]