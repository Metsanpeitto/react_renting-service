/* eslint-disable */

const DeleteItem = () => {

  return (
    <section>
      { calledItems.map((item) => {
        return (
          <div>
            <h4>{item.name}</h4>
            <button id={item.id}>Delete Item</button>
          </div>
        )
    }) }
    </section>
  );
};

export default DeleteItem;
