
import "./Experiments.css";
import { useState } from "react";
import ExperimentCard from "./ExperimentCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
function Experiments() {

  const [search, setSearch] = useState("");
const [level, setLevel] = useState("All");
  const experiments = [
    {
      name: " Mini Volcano",
      description: "Create a volcano using baking soda and vinegar!",
      level: "Beginner"
    },
    {
      name: " Rainbow Milk",
      description: "Discover colors using milk and food coloring!",
      level: "Beginner"
    },
    {
      name: " Crystal Garden",
      description: "Discover how crystals grow!",
      level: "Intermediate"
    },
    {
      name: " Magic Color Changes",
      description: "Explore how colors change with simple ingredients!",
      level: "Beginner"
    },
   
  ];

  const filteredExperiments = experiments.filter((experiment) => {
  const matchesSearch = experiment.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesLevel =
    level === "All" || experiment.level === level;

  return matchesSearch && matchesLevel;
});

  return (
    <section className="experiments">

      <h2>Explore Our Experiments</h2>

      <p>Choose an experiment and become a little scientist!</p>

      <SearchBar search={search} setSearch={setSearch} />
<CategoryFilter level={level} setLevel={setLevel} />
      <div className="experiments-list">

        {filteredExperiments.map((experiment, index) => (
          <ExperimentCard
            key={index}
            name={experiment.name}
            description={experiment.description}
            level={experiment.level}
          />
        ))}

      </div>

    </section>
  );
}

export default Experiments;
