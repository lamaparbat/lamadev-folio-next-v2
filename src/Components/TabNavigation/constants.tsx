import { LuLayoutDashboard, LuShoppingBag, LuContact, LuFacebook, LuTwitter, LuYoutube, LuGithub } from "react-icons/lu";
import { ImBlog } from "react-icons/im";
import { TAB_ITEMS } from "./interface";

export const DEFAULT_TAB_ITEMS: TAB_ITEMS[] = [
  { title: "Feed", path: "/", icon: <LuLayoutDashboard /> },
  { title: "Projects", path: "/projects", icon: <LuShoppingBag /> },
  { title: "Blog", path: "/blog", icon: <ImBlog /> },
  { title: "Contact", path: "/contact", icon: <LuContact /> },
]

export const MEDIA_TAB_ITEMS = [
  { title: "Facebook", path: "https://www.facebook.com/parbhat.thangwallama/", icon: <LuFacebook /> },
  { title: "Twitter", path: "https://twitter.com/LamaParbat70", icon: <LuTwitter /> },
  { title: "Youtube", path: "https://www.youtube.com/channel/UC46rzkF2tjnAPm-yEnyKpgQ", icon: <LuYoutube /> },
  { title: "Github", path: "https://github.com/lamaparbat", icon: <LuGithub /> },
]




// styles classname
export const styles = {
  wrapper: "w-fit h-screen absolute flex-center",
  vertical_navbar: "py-1 my-3 w-[75px] flex-center text-black text-2xl rounded-full shadow-xl border border-slate-300",
  nav_button: "p-4 my-2 rounded-full hover:bg-slate-300 ease-in-out duration-500 hover:animate__animated hover:animate__slideInDown"
}