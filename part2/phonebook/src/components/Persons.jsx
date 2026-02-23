const Persons = ({ personsToShow }) => {
  return personsToShow.map((person) => (
    <p key={person.id}>
      {person.name} {person.number} <button>delete</button>
    </p>
  ));
};

export default Persons;
