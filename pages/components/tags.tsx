

const Tags = ({tag }) => {

    let tags = tag.split(' ');

  return (
    <>
      {tags?.map((tagElement, index) => {
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
