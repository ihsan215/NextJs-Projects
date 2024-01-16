import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://media1.thrillophilia.com/filestore/srbbdqsawiss1tpsdyt5t3h2zvee_IMG%20World%20Entrance.jpg",
    address: "Some address 5 , 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://media1.thrillophilia.com/filestore/srbbdqsawiss1tpsdyt5t3h2zvee_IMG%20World%20Entrance.jpg",
    address: "Some address 5 , 12345 Some City",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://media1.thrillophilia.com/filestore/srbbdqsawiss1tpsdyt5t3h2zvee_IMG%20World%20Entrance.jpg",
    address: "Some address 5 , 12345 Some City",
    description: "This is a third meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
