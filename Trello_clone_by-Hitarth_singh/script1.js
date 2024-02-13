let toastBox = document.getElementById("toastBox");

function showToast(){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>You cant go back now';
    toastBox.appendChild(toast);

    setTimeout(() =>{
        toast.remove();
    },6000)
}