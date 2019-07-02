import Customer from'../interfaces/customer.interface';
const customers: Array<Customer> =[
  {
    "_id": '5d1b2bcf3d49e32e343bfe9e',
    "index": 0,
    "guid": "cdf90ab3-0e5b-443b-bba7-2d52c23a7f2b",
    "isActive": true,
    "balance": "$2,383.69",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": {
      "first": "Lara",
      "last": "Walter"
    },
    "company": "TINGLES",
    "email": "lara.walter@tingles.info",
    "phone": "+1 (838) 582-3180",
    "address": "656 Frost Street, Weeksville, Montana, 928"
  },
  {
    "_id": "5d1b2bcf4e2dc98797e5b821",
    "index": 1,
    "guid": "28e07700-bb95-4ffb-b0d1-10514684fb19",
    "isActive": false,
    "balance": "$3,407.01",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "green",
    "name": {
      "first": "Deanna",
      "last": "Thompson"
    },
    "company": "XYLAR",
    "email": "deanna.thompson@xylar.ca",
    "phone": "+1 (946) 588-3772",
    "address": "907 Pitkin Avenue, Macdona, Marshall Islands, 2030"
  },
  {
    "_id": "5d1b2bcfe3d85c193217d655",
    "index": 2,
    "guid": "3082aa22-03ee-4e75-b9f4-2edd521a30e2",
    "isActive": false,
    "balance": "$1,823.76",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": {
      "first": "Velazquez",
      "last": "Hudson"
    },
    "company": "ZEPITOPE",
    "email": "velazquez.hudson@zepitope.co.uk",
    "phone": "+1 (857) 468-3809",
    "address": "725 Schaefer Street, Walland, Massachusetts, 3689"
  },
  {
    "_id": "5d1b2bcff874b9d7c7c9a5cb",
    "index": 3,
    "guid": "a7d82875-060c-4f10-933b-df0383e61c48",
    "isActive": false,
    "balance": "$1,106.78",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "green",
    "name": {
      "first": "Mathews",
      "last": "Woodard"
    },
    "company": "GLUKGLUK",
    "email": "mathews.woodard@glukgluk.biz",
    "phone": "+1 (980) 413-3967",
    "address": "494 Fulton Street, Trexlertown, Alabama, 4313"
  },
  {
    "_id": "5d1b2bcf43de11bfc48ef574",
    "index": 4,
    "guid": "8f4d406e-73a2-46a5-8f9a-c2d664aab90c",
    "isActive": false,
    "balance": "$2,973.99",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "brown",
    "name": {
      "first": "Lenora",
      "last": "Wynn"
    },
    "company": "CENTICE",
    "email": "lenora.wynn@centice.name",
    "phone": "+1 (978) 561-2311",
    "address": "763 Montgomery Street, Bagtown, South Dakota, 7927"
  },
  {
    "_id": "5d1b2bcfa5e9f2aee08eae1a",
    "index": 5,
    "guid": "6a0798ca-a373-4a6f-9d6e-8da44a371880",
    "isActive": false,
    "balance": "$2,276.07",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "blue",
    "name": {
      "first": "Peterson",
      "last": "Howe"
    },
    "company": "ENERVATE",
    "email": "peterson.howe@enervate.biz",
    "phone": "+1 (843) 555-2317",
    "address": "820 Joval Court, Osmond, Maine, 5941"
  },
  {
    "_id": "5d1b2bcf3cf3ca82cb93ec54",
    "index": 6,
    "guid": "3496edf8-2d5e-406b-898b-fc156cc58d09",
    "isActive": false,
    "balance": "$3,063.11",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": {
      "first": "Jan",
      "last": "Cherry"
    },
    "company": "PRINTSPAN",
    "email": "jan.cherry@printspan.com",
    "phone": "+1 (810) 552-2780",
    "address": "891 Havens Place, Groton, North Carolina, 9059"
  },
  {
    "_id": "5d1b2bcfb6d6082886bbac1a",
    "index": 7,
    "guid": "1e9d5d9a-ad79-446c-911f-d8db8f049115",
    "isActive": true,
    "balance": "$2,844.54",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "green",
    "name": {
      "first": "George",
      "last": "Reyes"
    },
    "company": "INEAR",
    "email": "george.reyes@inear.io",
    "phone": "+1 (880) 596-2626",
    "address": "979 Bayview Place, Cashtown, Nevada, 3557"
  },
  {
    "_id": "5d1b2bcfe2b47bd3c8215cbd",
    "index": 8,
    "guid": "05ff9942-976f-4e91-bcc8-0044142515d6",
    "isActive": false,
    "balance": "$2,621.25",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "blue",
    "name": {
      "first": "Kellie",
      "last": "Sosa"
    },
    "company": "COMCUR",
    "email": "kellie.sosa@comcur.tv",
    "phone": "+1 (833) 509-3643",
    "address": "911 Thomas Street, Fairhaven, Tennessee, 6712"
  },
  {
    "_id": "5d1b2bcf0252fc66435560c5",
    "index": 9,
    "guid": "7d6e7fc1-59e8-486c-9610-7f3ed74f4f29",
    "isActive": true,
    "balance": "$1,615.26",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "blue",
    "name": {
      "first": "Valarie",
      "last": "Woodward"
    },
    "company": "VENDBLEND",
    "email": "valarie.woodward@vendblend.me",
    "phone": "+1 (960) 479-3427",
    "address": "796 Bliss Terrace, Coleville, Maryland, 9505"
  },
  {
    "_id": "5d1b2bcfef14809be486bfdd",
    "index": 10,
    "guid": "f6d0be7c-7305-4801-8a86-4feda4efd793",
    "isActive": false,
    "balance": "$2,223.48",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "blue",
    "name": {
      "first": "Maude",
      "last": "Wilkerson"
    },
    "company": "PRIMORDIA",
    "email": "maude.wilkerson@primordia.us",
    "phone": "+1 (868) 522-2761",
    "address": "577 Canton Court, Callaghan, Georgia, 5014"
  }
]
