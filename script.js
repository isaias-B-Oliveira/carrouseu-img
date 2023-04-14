const wrapper = document.querySelector(".wrapper"),
corousel = document.querySelector(".carousel"),
images = document.querySelectorAll("img"),
buttons = document.querySelectorAll(".button");

let imageindex = 1,
intervalid;

const autoslid = () => {
 intervalid = setInterval(() => slidimage(++imageindex),2000);
}
autoslid();

const slidimage = () => {
    imageindex = imageindex === images.length ? 0 : imageindex <0 ? images.length -1 : imageindex;
    corousel.style.transform = `translate(-${imageindex * 100}%)`;
};

const updateclick = (e) => {
    clearInterval(intervalid);
    imageindex += e.target.id === "next" ? 1 : -1; 
    slidimage(imageindex);
    autoslid();
};

buttons.forEach((button) => button.addEventListener("click", updateclick));

wrapper.addEventListener("mouseover", () => clearInterval(intervalid));
wrapper.addEventListener("mouseleave", autoslid);
