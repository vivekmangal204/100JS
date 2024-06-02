const items = document.querySelectorAll(".item");
let imageURLs = [
  "image-1.png",
  "image-2.png",
  "image-3.png",
  "image-4.png",
  "image-5.png",
];

//initially empty
let deviceType = "";
let events = {
  mouse: {
    start: "mouseover",
    end: "mouseout",
  },
  touch: {
    start: "touchstart",
    end: "touchend",
  },
};

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

items.forEach((item, index) => {
  let img = document.createElement("img");
  img.setAttribute("src", imageURLs[index]);
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  item.appendChild(img);

  //Initial CSS properties for all items
  item.style.flex = "1";
  item.style.transition = "flex 0.8s ease";

  item.addEventListener(events[deviceType].start, () => {
    item.style.flex = "9"; //Expand the item
  });
  item.addEventListener(events[deviceType].end, () => {
    item.style.flex = "1"; //Contract the item
  });
});