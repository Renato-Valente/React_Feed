import Feed from "./components/feed"
import images from "./images"

const feed = [
    {
      title: "Space",
      text: "If you could, would you like to vitit other planets?",
      img: images.mars
    },
    {
      title:"Desert",
      text: "Isn't it funny how poeple tend to walk in circles when lost in the desert?",
      img: images.desert
    },
    {
      title: "Nice view",
      text: "Do you like going to the beach? I prefer staying home."+
            " One way or another, you can't deny this is a great view",
      img: images.beach
    }
  ]

  const content = feed.map(feed => <Feed feed={feed} />);

  export default content;