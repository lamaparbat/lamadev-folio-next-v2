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
    SiPostgresql,
    SiGraphql,
    SiPayloadcms
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const Skills = {
    uiux: [
        { name: 'Figma', Icon: <LuFigma /> },
        { name: 'Adobe XD', Icon: <SiAdobeaftereffects /> },
    ],
    frontend: [
        { name: 'React JS', Icon: <SiReact /> },
        { name: 'Next.JS', Icon: <TbBrandNextjs /> },
        { name: 'Tailwind CSS', Icon: <SiTailwindcss /> },
        { name: 'SaSS', Icon: <SiSass /> },
        { name: 'Bootstrap', Icon: <SiBootstrap /> }
    ],
    backend: [
        { name: 'Node.js', Icon: <SiNodedotjs /> },
        { name: 'Express.js / REST', Icon: <SiExpress /> },
        { name: 'Graphql', Icon: <SiGraphql /> },
        { name: 'PayloadCMS', Icon: <SiPayloadcms /> },
        { name: 'Hapi.js', Icon: <SiNodedotjs /> },
        { name: 'Socket.io', Icon: <SiSocketdotio /> },
        { name: 'Firebase', Icon: <SiFirebase /> },
    ],
    database: [
        { name: 'Mongodb', Icon: <SiMongodb /> },
        { name: 'Mysql', Icon: <SiMysql /> },
        { name: 'Sequelize', Icon: <SiPostgresql /> },
    ]
}