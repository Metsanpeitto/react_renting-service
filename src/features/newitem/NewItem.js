/* eslint-disable */
import styles from './NewItem.module.scss';

function NewItem() {

    return (
        <div className={styles.container}>
            <h2>ADD NEW ITEM</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
