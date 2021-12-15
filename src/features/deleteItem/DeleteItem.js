/* eslint-disable */

const DeleteItem = () => {

    return (
        <>
            {user.id ? <div>
                {calledItems ?
                    calledItems.map(item => {
                        return (
                            <div>
                                <h4>{item.name}</h4>
                                -
                                <button id={item.id}>Delete Item</button>
                            </div>
                        )
                    }) : null
                }
            </div> : null}

        </>
    )
};

export default DeleteItem;
