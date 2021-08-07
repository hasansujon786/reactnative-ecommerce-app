import Product from '../models/product'
import Cart from '../models/cart'

export const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Sony ZX Series Wired On-Ear Headphones, Black MDR-ZX110',
    'https://m.media-amazon.com/images/I/51eJUpMRnzL._AC_UY218_.jpg',
    'Sony ZX Series Wired On-Ear Headphones, Black MDR-ZX110',
    29.99
  ),
  new Product(
    'p2',
    'u1',
    'Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa Voice Control - Black',
    'https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_UY218_.jpg',
    'Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa Voice Control - Black',
    99.99
  ),
  new Product(
    'p3',
    'u2',
    'Kids Headphones - noot products K11 Foldable Stereo Tangle-Free 3.5mm Jack Wired Cord On-Ear Headset for Children/Teens/Boys/Girls/Smartphones/School/Kindle/Airplane Travel/Plane/Tablet (Navy/Teal)',
    'https://images-na.ssl-images-amazon.com/images/I/715Sv8XftgL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    'Kids Headphones - noot products K11 Foldable Stereo Tangle-Free 3.5mm Jack Wired Cord On-Ear Headset for Children/Teens/Boys/Girls/Smartphones/School/Kindle/Airplane Travel/Plane/Tablet (Navy/Teal)',
    8.99
  ),
  new Product(
    'p4',
    'u3',
    'Elecder i37 Kids Headphones Children Girls Boys Teens Foldable Adjustable On Ear Headphones 3.5mm Jack Compatible Cellphones Computer MP3/4 Kindle School Tablet Green/Purple',
    'https://m.media-amazon.com/images/I/61xoxvuPsAS._AC_SL1500_.jpg',
    "What the content is? Why would that matter? It's a limited edition!",
    15.99
  ),
  new Product(
    'p5',
    'u3',
    'Apple AirPods with Charging Case (Wired)',
    'https://m.media-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg',
    'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
    2299.99
  ),
  new Product(
    'p6',
    'u1',
    'Apple EarPods with Lightning Connector - White',
    'https://m.media-amazon.com/images/I/41wYbyr3LLL._AC_SL1144_.jpg',
    "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
    5.49
  ),
]

export const CART_ITEMS = [
  new Cart(
    'p1',
    'Red Shirt',
    29.99,
    'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
    1
  ),
  new Cart(
    'p2',
    'Blue Carpet',
    29.99,
    'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    1
  ),
  new Cart(
    'p3',
    'Coffee Mug',
    29.99,
    'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
    1
  ),
  new Cart(
    'p4',
    'Coffee Mug',
    29.99,
    'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
    1
  ),
]
