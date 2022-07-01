const Total = ({ courseInfo }) => {
  let total = 0;

  courseInfo.map((info) => {
    total += info.exercises;
  });

  return <p>Number of exercises: {total}</p>;
};

export default Total;
