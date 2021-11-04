const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const confirmEl = document.querySelector(".confirm");
const closeBtn = document.querySelector(".close");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const btnOk = document.querySelector(".btn-ok");
const btnCancel = document.querySelector(".btn-cancel");

// btn1.addEventListener("click",()=>{
//     changeBg("red");
// });
// btn2.addEventListener("click",()=>{
//     changeBg("purple");
// });

// function changeBg(color) {
//     let x = confirm("Change background to " + color);
//     if(x) {
//         document.body.style.backgroundColor=color;
//     } 
// }

//Custom confirm box

class ShowConfirm {
    constructor(title,content, ok, cancel){
        this.title = title;
        this.content=content;
        this.ok = ok;
        this.cancel=cancel;
    }

    trigger(callbackFn) {
        title.textContent = this.title;
        content.textContent = this.content;
        btnOk.innerText = this.ok;
        btnCancel.innerText=this.cancel;
        confirmEl.classList.remove("close-modal");

        closeBtn.addEventListener("click",this.closeModal);
        btnCancel.addEventListener("click", this.closeModal);

        btnOk.addEventListener("click", ()=>{
            callbackFn();
            this.closeModal();
        });
    }

    closeModal() {
        confirmEl.classList.add("close-modal");
    }
}


//Btn event listener

btn1.addEventListener("click",()=>{
    changeBg("red");
});
btn2.addEventListener("click",()=>{
    changeBg("purple");
});

const changeBag = new ShowConfirm(
    "Change background",
    "You are about to change the background!",
    "Change",
    "Don't Change"
    );


function changeBg(color) {
    changeBag.trigger(setBg);
    function setBg() {
        document.body.style.backgroundColor=color;
    }
    
}

































