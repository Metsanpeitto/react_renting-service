/* eslint-disable */
import styles from './NewItem.module.scss';

function NewItem() {

    return (
        <div className={styles.container}>
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
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
}

export default NewItem;
