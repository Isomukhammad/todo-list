export const getList= async () => {
    const list = [];
    try{
        await fetch(`https://my-json-server.typicode.com/Isomukhammad/todo-list/todos/`)
            .then(response => response.json())
            .then(json => json.map(item => list.push(item)));

        return list;
    } catch (error) {
        alert('Something went wrong. Try again!');
        console.log(error);
    }
}


export const addList = async (title, id) => {
    const task = [];
    try{
        await fetch('https://my-json-server.typicode.com/Isomukhammad/todo-list/todos', {
            method: 'POST',
            body: JSON.stringify({
                userId: 1,
                id: id,
                title: title,
                completed: true
        }),
        headers: {
            "Content-type": 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then(json => task.push(json));
        
        return task;
    } catch(error) {
        alert('Something went wrong. Try again!');
        console.log(error);
    }
}