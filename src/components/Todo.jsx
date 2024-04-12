import { useState } from "react";

export default function Todo() {
    // Global state
    const [items, setItems] = useState([]);
    console.log(items);
    // handler function that takes item as a parameter
    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    return (
        <div>
            <Header />
            {/* passing handleAddItems as props */}
            <Nav handleAddItems={handleAddItems} /> 
            {/* passing items as props */}
            <ListArea items={items} />
            {/* passing items as props */}
            <Footer items={items} />
        </div>
    );
}

function Header() {
    return <h2>Todo List</h2>
}

function Nav({ handleAddItems }) {
    // local state function
    const [name, setName] = useState("");

    // create a handler function that is triggered by 'Add' button
    const handleAdd = () => {
        // creating a newItem object with name and id prperties
        const newItem = { name, id: Date.now() };
        console.log(newItem);

        // passing the newItem object into the handler function as an argument
        handleAddItems(newItem);

        // reset the input field after adding the item
        setName("");
    };

    return (
        <>
            <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </>
    );
}

// ListArea component receiving items as props from global state
function ListArea({ items }) {
    return (
        <>
            <ul>
                {/* mapping over items array to get individual item as list items */}
                { items.map((item) => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </>
    );
}

// Footer component receiving items as props from global state
function Footer({ items }) {
    return (
        <>
            { items.length !== 0 ? (
                <p>You have {items.length} items in your cart</p>
            ): (
                <p>You can start adding items to your list</p>
            )}
        </>
    );
}