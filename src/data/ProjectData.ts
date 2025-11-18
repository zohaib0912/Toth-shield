
import { StaticImageData } from "next/image";

import project_1 from "@/assets/imgs/toth/bronze-shield.png"
import project_2 from "@/assets/imgs/toth/silver-shield.png"
import project_3 from "@/assets/imgs/toth/gold-shield.png"
import project_4 from "@/assets/imgs/toth/platinum-shield.png"
import project2_1 from "@/assets/imgs/project/project-1.jpg"
import project2_2 from "@/assets/imgs/project/project-2.jpg"
import project2_3 from "@/assets/imgs/project/project-3.jpg"
import project2_4 from "@/assets/imgs/project/project-4.jpg"
import project2_5 from "@/assets/imgs/project/project-9.jpg"
import project2_6 from "@/assets/imgs/project/project-10.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   sub_title: string;
   title: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: project_1,
      sub_title: "Membership",
      title: "Bronze Shield Plan",
   },
   {
      id: 2,
      page: "home_1",
      thumb: project_2,
      sub_title: "Membership",
      title: "Silver Shield Plan",
   },
   {
      id: 3,
      page: "home_1",
      thumb: project_3,
      sub_title: "Membership",
      title: "Gold Shield Plan",
   },
   {
      id: 4,
      page: "home_1",
      thumb: project_4,
      sub_title: "Membership",
      title: "Platinum Shield Plan",
   },
   {
      id: 5,
      page: "home_1",
      thumb: project_3,
      sub_title: "Membership",
      title: "Storm Response Playbook",
   },

   // home_2
   {
      id: 1,
      page: "home_2",
      thumb: project2_1,
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 2,
      page: "home_2",
      thumb: project2_2,
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 3,
      page: "home_2",
      thumb: project2_3,
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 4,
      page: "home_2",
      thumb: project2_4,
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 5,
      page: "home_2",
      thumb: project2_3,
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 6,
      page: "home_2",
      thumb: project2_3,
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },

   // inner_page
   {
      id: 1,
      page: "inner_page",
      thumb: project2_1,
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 2,
      page: "inner_page",
      thumb: project2_2,
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 3,
      page: "inner_page",
      thumb: project2_3,
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 4,
      page: "inner_page",
      thumb: project2_4,
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 5,
      page: "inner_page",
      thumb: project2_5,
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 6,
      page: "inner_page",
      thumb: project2_6,
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
];

export default project_data;