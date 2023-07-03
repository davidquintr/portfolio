

const Tags = ({tag }) => {

  return (
    <>
      {tag?.map((tagElement, index) => {
        return (
          <div className="tag" key={index}>
            <p>{tagElement}</p>
          </div>
        );
      })}
    </>
  );
};

export default Tags;
