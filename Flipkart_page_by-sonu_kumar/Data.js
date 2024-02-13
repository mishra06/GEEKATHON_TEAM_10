const products = [
  {
    image: "https://rukminim2.flixcart.com/image/200/200/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xpytszpgx.jpeg?q=70",

    title: "Printer",

    rating: 4.5,

    flipkartAssured: true,

    price: 499.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 449.99,

    discountPrice: 50.0,

    popularity: 200,
  },

  {
    image: "https://rukminim2.flixcart.com/image/200/200/k3khevk0/camera/b/y/k/dkian-sa-digital-kids-camera-20mp-1080p-with-32gb-memory-card-original-imafmne6ueajav2g.jpeg?q=70",

    title: "Cameras",

    rating: 4.2,

    flipkartAssured: false,

    price: 299.99,

    deliveryIn1Day: false,

    noCostEMI: true,

    specialPrice: 279.99,

    discountPrice: 20.0,
    popularity: 100,
  },

  {
    image: "https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70",

    title: "PowerBank",

    rating: 3.9,

    flipkartAssured: true,

    price: 699.99,

    deliveryIn1Day: true,

    noCostEMI: false,

    specialPrice: 599.99,

    discountPrice: 100.0,
    popularity: 500,
  },

  {
    image: "https://rukminim2.flixcart.com/image/200/200/xif0q/projector/r/a/o/-original-imagtr8npfrsbx6s.jpeg?q=70",

    title: "Projector",

    rating: 4.7,

    flipkartAssured: true,

    price: 199.99,

    deliveryIn1Day: false,

    noCostEMI: true,

    specialPrice: 179.99,

    discountPrice: 20.0,
    popularity: 900,
  },

  {
    image: "https://rukminim2.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70",

    title: "Monitors",

    rating: 4.3,

    flipkartAssured: true,

    price: 899.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 849.99,

    discountPrice: 50.0,
    popularity: 10,
  },

  {
    image: "https://rukminim2.flixcart.com/image/200/200/xif0q/keyboard/gaming-keyboard/b/s/q/f2023-aula-original-imagnhc44uakb4zb.jpeg?q=70",

    title: "KeyBoard",

    rating: 4.0,

    flipkartAssured: false,

    price: 399.99,

    deliveryIn1Day: true,

    noCostEMI: false,

    specialPrice: 359.99,

    discountPrice: 40.0,

    popularity: 50,
  },

  {
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/0/4/-original-imagxaqu3samghjd.jpeg?q=70",

    title: "REDMI 12 5G (Pastel Blue, 256 GB)",

    rating: 2.5,

    flipkartAssured: true,

    price: 599.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 549.99,

    discountPrice: 50.0,
    popularity: 1000,
  },

  {
    image: "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70",

    title: "Apple iPhone 12 (Blue, 64 GB)",

    rating: 1,

    flipkartAssured: true,

    price: 349.99,

    deliveryIn1Day: false,

    noCostEMI: false,

    specialPrice: 329.99,

    discountPrice: 20.0,
    popularity: 2,
  },

  {
    image: "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dkyh2zgrh.jpeg?q=70",

    title: "Apple iPhone 12 (White, 64 GB)",

    rating: 3.8,

    flipkartAssured: true,

    price: 799.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 749.99,

    discountPrice: 50.0,
    popularity: 34634,
  },

  {
    image: "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/p/f/w/apple-iphone-12-dummyapplefsn-original-imafwg8dubf3nytw.jpeg?q=70",

    title: "Apple iPhone 12 (Green, 64 GB)",

    rating: 4.6,

    flipkartAssured: false,

    price: 249.99,

    deliveryIn1Day: false,

    noCostEMI: true,

    specialPrice: 229.99,

    discountPrice: 20.0,
    popularity: 9800,
  },

  {
    image: "https://rukminim2.flixcart.com/image/612/612/kyj0vbk0/showpiece-figurine/w/m/e/8-8-947-abdul-handicrafts-8-original-imagaqqzmhfzzxmt.jpeg?q=70",

    title: "Vishal Enterprises Decorative Showpiece - 9.5 cm",

    rating: 4.4,

    flipkartAssured: true,

    price: 599.99,

    deliveryIn1Day: true,

    noCostEMI: false,

    specialPrice: 579.99,

    discountPrice: 20.0,
    popularity: 201,
  },

  {
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=70",

    title: "Canon R100 Mirrorless Camera RF-S 18-45mm f/4.5-6.3 IS STM",

    rating: 4.9,

    flipkartAssured: true,

    price: 179.99,

    deliveryIn1Day: false,

    noCostEMI: true,

    specialPrice: 169.99,

    discountPrice: 10.0,
    popularity: 199,
  },

  {
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-cycle/b/t/w/urbn-long-range-standard-orange-blue-20-motovolt-single-speed-original-imagxf9z4gqxyfws.jpeg?q=70",

    title: "Motovolt URBN Long range Standard 20 inches Single Spee...",

    rating: 4.2,

    flipkartAssured: true,

    price: 899.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 849.99,

    discountPrice: 50.0,
    popularity: 2300,
  },

  {
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-cycle/r/6/j/monero-lr-black-17-5-ss-bikes-single-speed-original-imagtnpgrrfgbazj.jpeg?q=70",

    title: "SS Bikes Monero LR 27.5 inches Single Speed Lithium-ion...",

    rating: 4.3,

    flipkartAssured: false,

    price: "21,999",

    deliveryIn1Day: true,

    noCostEMI: false,

    specialPrice: "29,999",

    discountPrice: 20.0,
    popularity: 990,
  },

  {
    image: "https://rukminim2.flixcart.com/image/612/612/kmuxevk0/coffee/f/m/b/400-xtra-instant-coffee-pouch-continental-coffee-original-imagfnuhhcscepf8.jpeg?q=70",

    title: "Continental Coffee XTRA Instant Coffee",

    rating: 4.7,

    flipkartAssured: true,

    price: 299.99,

    deliveryIn1Day: false,

    noCostEMI: true,

    specialPrice: 269.99,

    discountPrice: 30.0,
    popularity: 1000,
  },

  {
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee/w/8/m/-original-imaggmwd8dy6zh7j.jpeg?q=70",

    title: "BRU Gold Instant Coffee",

    rating: 4.0,

    flipkartAssured: true,

    price: 699.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 649.99,

    discountPrice: 50.0,
    popularity: 0,
  },

  {
    image: "https://rukminim2.flixcart.com/image/612/612/km9ht3k0/coffee/d/p/v/200-speciale-instant-coffee-pouch-continental-coffee-original-imagf7ehvvph3hem.jpeg?q=70",

    title: "Continental Coffee SPECIALE Instant Coffee",

    rating: 3.9,

    flipkartAssured: true,

    price: 549.99,

    deliveryIn1Day: true,

    noCostEMI: false,

    specialPrice: 499.99,

    discountPrice: 50.0,
    popularity: 240,
  },

  {
    image: "https://rukminim2.flixcart.com/image/612/612/klphn680/coffee/e/p/9/200-xtra-instant-coffee-pouch-continental-coffee-original-imagyrtqhmnt3gkg.jpeg?q=70",

    title: "Continental Coffee XTRA Instant Coffee",

    rating: 4.5,

    flipkartAssured: false,

    price: 499.99,

    deliveryIn1Day: true,

    noCostEMI: true,

    specialPrice: 469.99,

    discountPrice: 30.0,
    popularity: 560,
  },

  {
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee/k/q/n/200-100-arabica-instant-coffee-powder-200-grams-premium-coffee-original-imagkycq2kztsfvh.jpeg?q=70",

    title: "Bevzilla 100% Arabica Instant Coffee Powder - 200 Grams...",

    rating: 4.6,

    flipkartAssured: true,

    price: 349.99,

    deliveryIn1Day: true,

    noCostEMI: false,

    specialPrice: 329.99,

    discountPrice: 20.0,
    popularity: 299,
  },

  {
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee/v/g/s/200-green-coffee-beans-for-weight-loss-unroasted-beans-organic-original-imagrwj2yhg7rqpx.jpeg?q=70",

    title: "NeutriOne Green Coffee Beans for Weight Loss ",

    rating: 3.8,

    flipkartAssured: true,

    price: 649.99,

    deliveryIn1Day: false,

    noCostEMI: true,

    specialPrice: 599.99,

    discountPrice: 50.0,
    popularity: 200,
  },
];
