/* eslint-disable */

function NewItem() {

    return (
        <div>
            <h2>ADD NEW ITEM</h2>
            <form>
                <input
                    placeholder="Name"
                    type="text"
                />
                <input
                    placeholder="Description"
                    type="text"
                />
                <input
                    placeholder="Image"
                    type="text"
                />
                <input
                    placeholder="Price"
                    type="number"
                />
                <input type="submit" value="ADD ITEM" />
            </form>
        </div>
    );
}

export default NewItem;