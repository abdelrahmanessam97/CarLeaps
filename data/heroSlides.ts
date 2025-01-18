interface BannerSlide {
  imgSrc: string;
  subTitle: string;
  subTitleSmall: string;
  title: string;
  details: { iconClass: string; text: string }[];
  btnText: string;
}

interface BannerSlide2 {
  imgSrc: string;
  price: string;
  title: string;
  details: { icon: string; label: string; value: string }[];
}

interface BannerSlide3 {
  imageSrc: string;
  width: number;
  height: number;
  subTitle: string;
  title: string;
}

interface Banner {
  src: string;
  width: number;
  height: number;
  subTitle: string;
  mainTitle: string;
}

// Define the data arrays with type annotations
export const bannerSlides: BannerSlide[] = [
  {
    imgSrc: "/images/banner/bg-2.jpg",
    subTitle: "$1204",
    subTitleSmall: "/ Month",
    title: "Mercedes New E-Class",
    details: [
      { iconClass: "flaticon-gasoline-pump", text: "Petrol" },
      { iconClass: "flaticon-speedometer", text: "72,925 miles" },
      { iconClass: "flaticon-gearbox", text: "Automatic" },
    ],
    btnText: "Learn More",
  },
  {
    imgSrc: "/images/banner/bg-2.jpg",
    subTitle: "$1204",
    subTitleSmall: "/ Month",
    title: "Mercedes New E-Class",
    details: [
      { iconClass: "flaticon-gasoline-pump", text: "Petrol" },
      { iconClass: "flaticon-speedometer", text: "72,925 miles" },
      { iconClass: "flaticon-gearbox", text: "Automatic" },
    ],
    btnText: "Learn More",
  },
  {
    imgSrc: "/images/banner/bg-2.jpg",
    subTitle: "$1204",
    subTitleSmall: "/ Month",
    title: "Mercedes New E-Class",
    details: [
      { iconClass: "flaticon-gasoline-pump", text: "Petrol" },
      { iconClass: "flaticon-speedometer", text: "72,925 miles" },
      { iconClass: "flaticon-gearbox", text: "Automatic" },
    ],
    btnText: "Learn More",
  },
  {
    imgSrc: "/images/banner/bg-2.jpg",
    subTitle: "$1204",
    subTitleSmall: "/ Month",
    title: "Mercedes New E-Class",
    details: [
      { iconClass: "flaticon-gasoline-pump", text: "Petrol" },
      { iconClass: "flaticon-speedometer", text: "72,925 miles" },
      { iconClass: "flaticon-gearbox", text: "Automatic" },
    ],
    btnText: "Learn More",
  },
];

export const bannerSlides2: BannerSlide2[] = [
  {
    imgSrc: "/images/banner/bg-4-1.jpg",
    price: "$1204",
    title: "Volvo XC90 Recharge",
    details: [
      { icon: "flaticon-gasoline-pump", label: "Fuel Type", value: "Petrol" },
      { icon: "flaticon-speedometer", label: "Mileage", value: "72,925 miles" },
      { icon: "flaticon-gearbox", label: "Transmisson", value: "Automatic" },
      { icon: "flaticon-calendar", label: "Year", value: "2023" },
    ],
  },
  {
    imgSrc: "/images/banner/bg-4-1.jpg",
    price: "$1204",
    title: "Volvo XC90 Recharge",
    details: [
      { icon: "flaticon-gasoline-pump", label: "Fuel Type", value: "Petrol" },
      { icon: "flaticon-speedometer", label: "Mileage", value: "72,925 miles" },
      { icon: "flaticon-gearbox", label: "Transmisson", value: "Automatic" },
      { icon: "flaticon-calendar", label: "Year", value: "2023" },
    ],
  },
  {
    imgSrc: "/images/banner/bg-4-1.jpg",
    price: "$1204",
    title: "Volvo XC90 Recharge",
    details: [
      { icon: "flaticon-gasoline-pump", label: "Fuel Type", value: "Petrol" },
      { icon: "flaticon-speedometer", label: "Mileage", value: "72,925 miles" },
      { icon: "flaticon-gearbox", label: "Transmisson", value: "Automatic" },
      { icon: "flaticon-calendar", label: "Year", value: "2023" },
    ],
  },
];

export const bannerSlides3: BannerSlide3[] = [
  {
    imageSrc: "/images/banner/bg-7.jpg",
    width: 1700,
    height: 660,
    subTitle: "Find cars for sale and for rent near you",
    title: "Find Your Perfect New <br />or Used Car",
  },
  {
    imageSrc: "/images/banner/bg-7.jpg",
    width: 1700,
    height: 660,
    subTitle: "Find cars for sale and for rent near you",
    title: "Find Your Perfect New <br />or Used Car",
  },
  {
    imageSrc: "/images/banner/bg-7.jpg",
    width: 1700,
    height: 660,
    subTitle: "Find cars for sale and for rent near you",
    title: "Find Your Perfect New <br />or Used Car",
  },
];

export const banners: Banner[] = [
  {
    src: "/images/banner/bg-7.jpg",
    width: 1700,
    height: 660,
    subTitle: "Find cars for sale and for rent near you",
    mainTitle: "Find Your Perfect New <br /> or Used Car",
  },
  {
    src: "/images/banner/bg-7.jpg",
    width: 1700,
    height: 660,
    subTitle: "Find cars for sale and for rent near you",
    mainTitle: "Find Your Perfect New <br /> or Used Car",
  },
  {
    src: "/images/banner/bg-7.jpg",
    width: 1700,
    height: 660,
    subTitle: "Find cars for sale and for rent near you",
    mainTitle: "Find Your Perfect New <br /> or Used Car",
  },
];
