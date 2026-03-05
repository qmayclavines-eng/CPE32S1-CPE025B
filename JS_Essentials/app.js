const teamDirectory = [
  {
    name: "Leo Brooks",
    role: "Designer",
    skills: ["UI", "UX", "Figma"],
    available: true
  },
  {
    name: "Sasha Ivana",
    role: "Developer",
    skills: ["HTML", "CSS", "JS"],
    available: false
  },
  {
    name: "Jordan Lee",
    role: "Manager",
    skills: ["Planning", "Agile"],
    available: true
  }
];

teamDirectory.push({
  name: "Casey Moore",
  role: "QA Engineer",
  skills: ["Testing", "Debugging"],
  available: true
});

teamDirectory[1].available = true;

console.log("First Team Member");
console.log("Name:", teamDirectory[0].name);
console.log("First Skill:", teamDirectory[0].skills[0]);

const lastIndex = teamDirectory.length - 1;
console.log("\nLast Team Member");
console.log("Name:", teamDirectory[lastIndex].name);
console.log("Total Skills:", teamDirectory[lastIndex].skills.length);

console.log("\nDirectory Summary");
console.log("Total People in Directory:", teamDirectory.length);

console.log("\nFull Team Directory");
console.log(teamDirectory);