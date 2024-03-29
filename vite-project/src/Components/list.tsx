import data from "./ListData.json"

function List(props: { input: string; }) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li><a key={item.id} href={item.href}>{item.text}</a></li>
            ))}
        </ul>
    )
}

export default List
