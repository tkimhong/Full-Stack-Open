const Persons = ({ personsToShow, deleteName }) => {
  return personsToShow.map((person) => (
    <p key={person.id}>
      {person.name} {person.number}{" "}
      <button
        onClick={() => {
          deleteName(person.name, person.id);
        }}
      >
        delete
      </button>
    </p>
  ));
};

export default Persons;
