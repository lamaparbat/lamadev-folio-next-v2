import { LuFigma } from "react-icons/lu";
import { SiAdobeaftereffects, SiReact, SiTailwindcss, SiSass, SiBootstrap } from "react-icons/si";
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
        { name: 'Node.js', Icon: <LuFigma /> },
        { name: 'Express.js', Icon: <SiAdobeaftereffects /> },
        { name: 'Firebase', Icon: <LuFigma /> },
        { name: 'Express.js', Icon: <SiAdobeaftereffects /> },
    ],
    database: [
        { name: 'Mongodb', Icon: <LuFigma /> },
        { name: 'Mysql', Icon: <SiAdobeaftereffects /> },
        { name: 'Sequelize', Icon: <LuFigma /> },
    ]
}