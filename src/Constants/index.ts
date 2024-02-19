import { CardType } from "@/Components/Card/interface"

export const pageStyles = {
  wrapper: 'wrapper',
  title: 'mb-8 animateOff',
  divider: 'divider',
  feed_child2: 'my-5 flex flex-wrap justify-center sm:justify-between '
}

export const products: CardType[] = [
  {
    title: "Blockchain Election System",
    description: "NEXT JS, WEB3, EXPRESS-NODE, MONGODB, METAMASK WALLET",
    image: "/images/evoting.png",
    link: { site: "https://dappvote.vercel.app/", github: "https://github.com/lamaparbat/BLOCKCHAIN-ELECTION-DAPP" },
    id: 0
  },
  {
    title: "Clothing Ecommerce Site",
    description: "PHP, HTML, CSS, JS, BOOTSTRAP 3, AJAX, JQUERY",
    image: "/images/aroma.png",
    link: { site: "", github: "https://github.com/lamaparbat/eCommerceApp" },
    id: 1,
  },
  {
    title: "Whatsapp Clone",
    description: "REACT JS, NODE JS (Express), MongoDB, JWT, Google Auth",
    image: "/images/whatsapp.png",
    link: { site: "https://whatsapp-clone-2b15a.firebaseapp.com/", github: "https://github.com/lamaparbat/whatsapp-frontend" },
    id: 2
  },
  {
    title: "Elibrary",
    description: "PHP, HTML, CSS, JS, BOOTSTRAP 3, AJAX, JQUERY",
    image: "/images/elibrary.png",
    link: { site: "", github: "https://github.com/lamaparbat/eLibrary" },
    id: 3
  },
  {
    title: "Course Management System",
    description: "FRONTEND (JAVA SWING), BACKEND (CORE JAVA), NETBEANS IDE",
    image: "/images/cms.jpeg",
    link: { site: "", github: "https://github.com/lamaparbat/Course-Management-System" },
    id: 3
  },
  {
    title: "Ecommerce Clothing Brand System",
    description: "NEXT JS, TAILWIND CSS, SANITY.IO, MONGODB, ",
    image: "/images/ecommerce-cms-1.png",
    link: { site: "https://clothing-verse.vercel.app/", github: "https://github.com/lamaparbat/11VERSE-CLIENT" },
    id: 3
  },
  {
    title: "Scala Technologies Portfolio",
    description: "NEXT JS, PAYLOAD CMS,  TAILWIND CSS, MONGODB, AWS EC2",
    image: "/images/scala.png",
    link: { site: "https://scala-tech.net/", github: "https://github.com/lamaparbat/SCALA-CLIENT" },
    id: 3
  }

]