
const List = ({list}) => {
  return (
    <>
      <ol>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </>
  );
};

export default List
