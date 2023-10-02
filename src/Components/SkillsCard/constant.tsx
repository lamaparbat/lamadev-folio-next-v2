import { LuFigma } from "react-icons/lu";
import {
    SiAdobeaftereffects, 
    SiReact, 
    SiTailwindcss, 
    SiSass, 
    SiBootstrap, 
    SiNodedotjs, 
    SiExpress, 
    SiPhp, 
    SiSocketdotio, 
    SiFirebase,
    SiMongodb,
    SiMysql,
    SiPostgresql
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const Skills = {
    uiux: [
        { name: 'Figma', Icon: <LuFigma /> },
        { name: 'Adobe XD', Icon: <SiAdobeaftereffects /> },
    ],
    frontend: [
        { name: 'React', Icon: <SiReact /> },
        { name: 'Next.JS', Icon: <TbBrandNextjs /> },
        { name: 'Tailwind CSS', Icon: <SiTailwindcss /> },
        { name: 'SaSS', Icon: <SiSass /> },
        { name: 'Bootstrap', Icon: <SiBootstrap /> }
    ],
    backend: [
        { name: 'Node.js', Icon: <SiNodedotjs /> },
        { name: 'Express.js', Icon: <SiExpress /> },
        { name: 'Hapi.js', Icon: <SiNodedotjs /> },
        { name: 'Core PHP', Icon: <SiPhp /> },
        { name: 'Socket.io', Icon: <SiSocketdotio /> },
        { name: 'Firebase', Icon: <SiFirebase /> },
    ],
    database: [
        { name: 'Mongodb', Icon: <SiMongodb /> },
        { name: 'Mysql', Icon: <SiMysql /> },
        { name: 'Sequelize', Icon: <SiPostgresql /> },
    ]
}