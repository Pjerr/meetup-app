import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://bookaweb.s3.eu-central-1.amazonaws.com/media/29725/responsive-images/amsterdam-%281%29___media_library_original_1200_630.jpg",
    title: "Amsterdam",
    address: "Some address",
    description: "This is a frist meetup",
  },
  {
    id: "m2",
    image:
      "https://media.cntraveler.com/photos/5b914f76f014992d5bd1c3b1/master/w_1920%2Cc_limit/Charlottenburg-Palace_2018_GettyImages-80278815.jpg",
    title: "Berlin",
    address: "Some other adress",
    description: "This is the second metup",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //send http req and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
