import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "Hot to learn coding in 30 days | 30 days plan | code with me",
    image: "photo.jpg",
    thumbImage: "logo.jpg",
    author: "Kalesha",
    views: "350M views",
    timestamp: "2 days ago",
  },
  {
    title: "Hot to learn coding in 30 days | 30 days plan | code with me",
    image: "photo.jpg",
    thumbImage: "logo.jpg",
    author: "Kalesha",
    views: "350M views",
    timestamp: "2 days ago",
  },
  {
    title: "Hot to learn coding in 30 days | 30 days plan | code with me",
    image: "photo.jpg",
    thumbImage: "logo.jpg",
    author: "Kalesha",
    views: "350M views",
    timestamp: "2 days ago",
  },
  {
    title: "Hot to learn coding in 30 days | 30 days plan | code with me",
    image: "photo.jpg",
    thumbImage: "logo.jpg",
    author: "Kalesha",
    views: "350M views",
    timestamp: "2 days ago",
  },
  {
    title: "Hot to learn coding in 30 days | 30 days plan | code with me",
    image: "photo.jpg",
    thumbImage: "logo.jpg",
    author: "Kalesha",
    views: "1M views",
    timestamp: "2 days ago",
  },
  {
    title: "Hot to learn coding in 30 days | 30 days plan | code with me",
    image: "photo.jpg",
    thumbImage: "logo.jpg",
    author: "Kalesha",
    views: "1M views",
    timestamp: "2 days ago",
  }
];


export const  VideoGrid=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
              title={video.title}
              image={video.image}
              thumbImage={video.thumbImage}
              author={video.author}
              views={video.views}
              timestamp={video.timestamp}
            ></VideoCard>
          </div>)}
      </div>
}