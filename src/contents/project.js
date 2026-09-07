import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picExp from '../assets/picture.png';
import pic241 from '../assets/241.png';
import pic322 from '../assets/322.png';
import pic342 from '../assets/342.png';
import pic354 from '../assets/354.png';
import pic499 from '../assets/499.png';

export const data = [
    {
        date: "ปี 2 ภาคปลาย",
        title: "02739241 · Internet Technology Final Project",
        link: "https://github.com/TitaniumSalmon/02739241_Project",
        materials: [
            { type: faGithub, link: "https://github.com/TitaniumSalmon/02739241_Project" },
        ],
        descriptions: [
            "ระบบจองห้องพักที่มีระบบ log in และระบบ CRUD อย่างง่าย",
        ],
        skills: [
            ["JavaScript", "HTML", "CSS"],
        ],
        picture: pic241,
    },
    {
        date: "ปี 3 ภาคต้น",
        title: "02739342 · Application Development for Mobile Devices Final Project",
        link: "https://github.com/THEBAOxCucumber/book",
        materials: [
            { type: faGithub, link: "https://github.com/THEBAOxCucumber/book" },
        ],
        descriptions: [
            "แอพลิเคชัน READ AND TELL เป็นแอพซื้อหนังสือ ที่มีระบบเสียงอ่านเรื่องย่อได้ มีระบบซื้อ มีระบบแอดมินที่สามารถเพิ่ม ลบ ดูคำสั่งซื้อของลูกค้าได้ แอพมีระบบ log in และเก็บข้อมูลต่าง ๆ ใน Firebase ",
        ],
        skills: [
            ["Flutter","Firebase"],
        ],
        picture: pic342,
    },
    {
        date: "ปี 3 ภาคปลาย",
        title: "02739354 · Design and Development for Internet of Things Final Project",
        link: "https://github.com/TitaniumSalmon/02739354-Project_IoT-Backend",
        materials: [
            { type: faGithub, link: "https://github.com/TitaniumSalmon/02739354-Project_IoT-Backend" },
        ],
        descriptions: [
            "ระบบหลังบ้านของกล้องวงจรปิดอัฉริยะ เมื่อส่งรูปภาพผ่านทาง API ระบบจะใช้ Image Processing ตรวจจับว่าเป็นคนหรือยานพาหนะ"
        ],
        skills: [
            ["Python","Roboflow"],
        ],
        picture: pic354, 
    },
    {
        title: "02739322 · Information System Analysis and Design Bonus",
        link: "https://github.com/BuGaman47/project_fiveper",
        materials: [
            { type: faGithub, link: "https://github.com/BuGaman47/project_fiveper"},
        ],
        descriptions: [
            "ระบบติดตามการดำเนินงานของนิสิต"
        ],
        skills: [
            ["Vite","React","Spring Boot","Tailwind"],
        ],
        picture: pic322, 
    },
    {
        date: "ปี 4 ภาคต้น",
        title: "02739499 · Information Technology Project",
        link: "https://github.com/BuGaman47/project_fiveper",
        materials: [
            { type: faGithub, link: "https://github.com/TitaniumSalmon/02739499-IT_Project"},
        ],
        descriptions: [
            "ระบบจัดการคิวของสถานพยาบาล เป็นระบบที่จะช่วยเรียกและจัดการคิวในสถานพยาบาลมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน เพื่อลดภาระให้กับพยาบาล และมีระบบ Dashboard ที่นำมาวิเคราะห์ว่ามีผู้ใช้บริการกี่คนต่อวัน ส่วนไหนใช้เวลาเยอะสุดอีกด้วย"
        ],
        skills: [
            ["React"],
        ],
        picture: pic499, 
    },
]