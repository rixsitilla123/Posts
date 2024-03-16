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
                <button onclick="submitUser(${item.id})" class="w-[100px] p-2 rounded-[10px] bg-teal-500 text-white show__post-btn border border-teal-1">
                    Show Post
                </button>
            </div>
        `; 
        list.appendChild(elItem);
    });
};

function submitUser(id){
    elModalWrapper.classList.add("open-modal")

    getData(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
        elModal.innerHTML = `
            <form class="flex flex-col gap-5 submit-form">
                <label class="flex flex-col w-[60%] mx-auto">
                    <span class="">
                        User Name
                    </span>
                    <input class="p-2 rounded-[10px]" value=${res.name} name="userName" type="text" autocomplete="off" required placeholder="User Name"/> 
                </label>
                <label class="flex flex-col w-[60%] mx-auto">
                    <span class=""> 
                        User Phone
                    </span>
                    <input class="p-2 rounded-[10px]" value=${res.phone.split(" ")[0]} name="userPhone" type="tel" autocomplete="off" required placeholder="User Phone"/> 
                </label>
                <button type="submit" class="bg-teal-500 text-white font-bold mt-4 p-3 rounded-[10px] mx-auto w-[50%]">
                    Submit
                </button>
            </form>
        `

        let elForm = document.querySelector(".submit-form")
        elForm.addEventListener("submit", function(evt){
            evt.preventDefault()

            
        })
    })
}
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
function postBtnClick(id){
    commentList.innerHTML = `Loading....`
    getData(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res => {
        getComment(res, commentList)
    })
}
function getComment(arr, list){
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
                    Post ID: 
                </span>
                ${item.postId}
            </p>
            <p>
                <span class="font-bold">
                    Name: 
                </span>
                ${item.name}
            </p>
            <p>
                <span class="font-bold">
                    Email: 
                </span>
                ${item.email}
            </p>
            <p>
                <span class="font-bold">
                    Body: 
                </span>
                ${item.body}
            </p>
        `; 
        list.appendChild(elItem);
    });
};
// ------------- comment end ----------------------

elModalWrapper.addEventListener("click", function(evt){
    if(evt.target.id == "modal-wrapper"){
        elModalWrapper.classList.remove("open-modal")
    }
})