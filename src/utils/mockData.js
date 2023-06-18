import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: "1",
    title: "To Do",
    tasks: [
      {
        id: "1.1",
        title: "Learn JavaScript",
        priority: "Low",
        description:
          "Brainstorming brings team members' diverse experience into play. ",
      },
      {
        id: "1.2",
        title: "Learn Git",
        priority: "Low",
        description:
          "Brainstorming brings team members' diverse experience into play. ",
      },
      {
        id: "1.3",
        title: "Learn Python",
        priority: "Low",
        description:
          "Brainstorming brings team members' diverse experience into play. ",
      },
    ],
  },
  {
    id: "2",
    title: "On Progress",
    tasks: [
      {
        id: "2.1",
        title: "Learn CSS",
        priority: "Low",
        description:
          "Low fidelity wireframes include the most basic content and visuals.",
      },
      {
        id: "2.2",
        title: "Learn Golang",
        priority: "Low",
        description:
          "Low fidelity wireframes include the most basic content and visuals.",
      },
    ],
  },
  {
    id: "3",
    title: "Completed",
    tasks: [
      {
        id: "3.1",
        title: "Learn HTML",
        priority: "Completed",
        description:
          "Low fidelity wireframes include the most basic content and visuals.",
      },
    ],
  },
];

export default mockData;
