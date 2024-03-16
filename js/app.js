let usersList = document.querySelector(".users-list");
let postList = document.querySelector(".post-list");
let commentList = document.querySelector(".comment-list");

let elModalWrapper = document.querySelector(".modal-wrapper");
let elModal = document.querySelector(".modal");

const getData = async(URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
};

// ------------- user start ----------------------
usersList.innerHTML = "Loading....";

getData("https://jsonplaceholder.typicode.com/users").then(res => {
    getUsers(res, usersList)
});

function getUsers(arr, list){
    list.innerHTML = ``;
    arr.map(item => {
        let elItem = document.createElement("li");
        elItem.className = `bg-rose-800 rounded-[20px] p-3`
        elItem.innerHTML = `
            <p>
                <span class="font-bold">
                    ID: 
                </span>
                ${item.id}
            </p>
            <p>
                <span class="font-bold">
                    Name: 
                </span>
                ${item.name}
            </p>
            <p>
                <span class="font-bold">
                    Username: 
                </span>
                ${item.username}
            </p>
            <p>
                <span class="font-bold">
                    Phone: 
                </span>
                ${item.phone.split(" ")[0]}
            </p>
            <p>
                <span class="font-bold">
                    Email: 
                </span>
                ${item.email}
            </p>
            <div class="mt-3">
                <button onclick="userBtnClick(${item.id})" class="w-[100px] p-2 rounded-[10px] bg-teal-500 text-white show__post-btn border border-teal-1">
                    Show Post
                </button>
            </div>
        `; 
        list.appendChild(elItem);
    });
};
// ------------- user end ----------------------

// ------------- post start ----------------------
function userBtnClick(id){
    postList.innerHTML = `Loading....`
    getData(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`).then(res => {
        getPosts(res, postList)
    })
}

function getPosts(arr, list){
    list.innerHTML = ``;
    arr.map(item => {
        let elItem = document.createElement("li");
        elItem.className = `bg-rose-800 rounded-[20px] p-3`
        elItem.innerHTML = `
            <p>
                <span class="font-bold">
                    ID: 
                </span>
                ${item.id}
            </p>
            <p>
                <span class="font-bold">
                    User ID: 
                </span>
                ${item.userId}
            </p>
            <p>
                <span class="font-bold">
                    Title: 
                </span>
                ${item.title}
            </p>
            <p>
                <span class="font-bold">
                    Body
                </span>
                ${item.body}
            </p>
            <div class="mt-3">
                <button onclick="postBtnClick(${item.id})" class="w-[100px] p-2 rounded-[10px] bg-teal-500 text-white show__post-btn border border-teal-1">
                    Show Comment
                </button>
            </div>
        `; 
        list.appendChild(elItem);
    });
};
// ------------- post end ----------------------

// ------------- comment start ----------------------

// ------------- comment end ----------------------

