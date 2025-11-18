import { StaticImageData } from "next/image";

import avatar_1 from "@/assets/imgs/resources/testimonials-2.png"
import avatar_2 from "@/assets/imgs/resources/testimonials-1.png"

interface DataType {
   id: number;
   page: string;
   avatar: StaticImageData;
   name: string;
   designation: string;
   desc: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      avatar: avatar_1,
      name: "Jackson Lee",
      designation: "Homeowner • Dallas, TX",
      desc: "“Toth Shield spotted hail damage before I even filed a claim. Their photos and inspector notes helped my carrier approve repairs in days.”"
   },
   {
      id: 2,
      page: "home_1",
      avatar: avatar_2,
      name: "Melissa Carter",
      designation: "Property Manager • Nashville, TN",
      desc: "“The Silver Shield plan keeps every rooftop in my portfolio documented and storm-ready. Their alerts save me countless emergency trips.”"
   },
   {
      id: 3,
      page: "home_1",
      avatar: avatar_1,
      name: "Roberto Diaz",
      designation: "Insurance Agent • Phoenix, AZ",
      desc: "“Having Toth Shield involved means my clients show up with organized reports, moisture readings, and mitigation proof. Claims move faster.”"
   },
   {
      id: 4,
      page: "home_1",
      avatar: avatar_2,
      name: "Brittany Howell",
      designation: "Homeowner • Tampa, FL",
      desc: "“When a hurricane spun up overnight, Toth Shield already had crews staged. They tarped our roof before sunrise and handled the paperwork.”"
   },
];

export default testi_data;