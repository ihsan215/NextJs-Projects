import React from "react";
import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetailsPage(props) {
  return (
    <React.Fragment>
      <MeetupDetail
        image="https://media1.thrillophilia.com/filestore/srbbdqsawiss1tpsdyt5t3h2zvee_IMG%20World%20Entrance.jpg"
        title="First Meetup"
        address="Some Address 5 , Some City"
        description="This is a first meetup"
      />
    </React.Fragment>
  );
}

// export async function getStaticProps(context) {
//   // fetch data for a single meetup

//   const meetupId = context.params.meetupId;
//   console.log(meetupId);
//   return {
//     porps: {
//       meetupData: {
//         image:
//           "https://media1.thrillophilia.com/filestore/srbbdqsawiss1tpsdyt5t3h2zvee_IMG%20World%20Entrance.jpg",
//         title: "First Meetup",
//         address: "Some Address 5 , Some City",
//         description: "This is a first meetup",
//       },
//     },
//   };
// }

export default MeetupDetailsPage;
