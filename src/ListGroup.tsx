import {useState} from "react";

interface Props {
    items: string[];
    heading: string
}

const  ListGroup = ({ items, heading}: Props) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedItem(index);
    }

    return (
        <>
            <h1 className='text-2xl font-bold text-cyan-800'>{heading}</h1>
            {items.length === 0 && <p>No items in the list</p>}
            <ul className='cursor-pointer divide-y divide-pink-200 border border-pink-200 rounded'>
            {items.map((item, index) => (
                <li onClick={() => handleClick(index)}
                    className={`p-2 ${selectedItem === index ? 'bg-pink-300 text-white' : ''}`}
                    key={index}>{item}</li>
            ))}
            </ul>
        </>
    )

}

export default ListGroup;