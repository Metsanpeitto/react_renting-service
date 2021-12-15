/* eslint-disable */

const Details = () => {

  return (
    <div>
      <div>
        <img src={itemDisplay.image} alt="image" />
        <h1>{itemDisplay.title}</h1>
        <h5>{itemDisplay.description}</h5>
        <h5>{itemDisplay.price}</h5>

        <Link
          to={{
              pathname: `/new_reservation/${itemDisplay.id}`,
          }}
          data={itemDisplay}
        >
          Reserve
        </Link>
      </div>
    </div>
  );
};

export default Details;
