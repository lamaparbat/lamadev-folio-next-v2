import { LuLayoutDashboard, LuShoppingBag, LuContact, LuFacebook, LuTwitter, LuYoutube, LuGithub, LuMail } from "react-icons/lu";
import { ImBlog } from "react-icons/im";
import { TAB_ITEMS } from "./interface";

export const DEFAULT_TAB_ITEMS: TAB_ITEMS[] = [
  { title: "Feed", path: "/", icon: <LuLayoutDashboard /> },
  { title: "Projects", path: "/projects", icon: <LuShoppingBag /> },
  { title: "Blog", path: "/blogs", icon: <ImBlog /> },
  { title: "Contact", path: "/contacts", icon: <LuContact /> },
]

export const MEDIA_TAB_ITEMS = [
  { title: "Facebook", path: "https://www.facebook.com/parbhat.thangwallama/", icon: <LuFacebook /> },
  { title: "Gmail", path: "mailto:parbatlama70@gmail.com", icon: <LuMail /> },
  // { title: "Twitter", path: "https://twitter.com/LamaParbat70", icon: <LuTwitter /> },
  // { title: "Youtube", path: "https://www.youtube.com/channel/UC46rzkF2tjnAPm-yEnyKpgQ", icon: <LuYoutube /> },
  { title: "Github", path: "https://github.com/lamaparbat", icon: <LuGithub /> },
]



// styles classname
export const styles = {
  wrapper: "top-0 left-0 w-[50vw] sm:w-[150px] h-screen fixed flex flex-col justify-center items-center z-[100] rounded-tr-2xl rounded-br-2xl backdrop-blur-[5px] bg-[#f8f8f800] bg-opacity-1 sm:backdrop-blur-none sm:bg-unset hidden sm:flex",
  vertical_navbar: "py-1 my-3 w-[60px] flex-center text-xl rounded-full shadow-xl border border-slate-50 dark:border-zinc-700",
  nav_button: "p-4 rounded-full hover:bg-slate-300 ease-in-out duration-500 cursor-pointer",
  tooltip: "ml-4 rounded-r-xl",
  badge: 'badge-circular shadow-xl block sm:hidden cursor-pointer fixed bottom-1 right-1 mb-[30px] mr-[20px] z-40',
  badgeWrapper: "bg-red-200 animateOff",
  menuIconSIze: 'text-3xl',
  navbar2: `w-[150px] h-screen fixed bottom-1 right-1 -mb-[70px] -mr-[30px] flex flex-col justify-center items-center z-30 rounded-tr-2xl rounded-br-2xl`,
}