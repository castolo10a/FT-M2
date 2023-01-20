const [boton] = $("#boton");
const [search] = $("#search");
const [deleteBtn] = $("#delete");

const [lista] = $("#lista");

const responseHandler = (response) => {
    lista.innerHTML = "";
    response.forEach(friend => {
        const newLi = document.createElement("li");
        newLi.innerHTML = `${friend.id} - ${friend.name}`;
        lista.appendChild(newLi);
    });
}

const showFriends = () => {
    // tambien $("#lista").empty();
    $.get('http://localhost:5000/amigos', responseHandler);
}

const searchFriend = () => {
    const [input] = $("#input");
    const id = input.value;
    input.value = "";

    $.get(`http://localhost:5000/amigos/${id}`, (response) => {
        const [amigo] = $("#amigo");
        amigo.innerHTML = response.name;
    });
}

const deleteFriend = () => {
    const [inputDelete] = $("#inputDelete");
    const id = inputDelete.value;
    inputDelete.value = "";

    $.ajax({
        type: "DELETE",
        url: `http://localhost:5000/amigos/${id}`,
        success: (response) => responseHandler(response),
    });
}

boton.addEventListener("click", showFriends);
search.addEventListener("click", searchFriend);
deleteBtn.addEventListener("click", deleteFriend)







