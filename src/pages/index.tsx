import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "@/components/VideoCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div>
    <VideoCard title={"Hot to learn coding in 30 days | 30 days plan | code with me"}
    image={"photo.jpg"}
    thumbImage={"logo.jpg"}
    author={"Kalesha"}
    views={"1M views"}
    timestamp={"2 days ago"}></VideoCard>
  </div>
  )
}
