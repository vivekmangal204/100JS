//References
let browserDetailsRef = document.getElementById("browser-details");
let osDetailsRef = document.getElementById("os-details");
var browserList = [
  { name: "Firefox", value: "Firefox" },
  { name: "Opera", value: "OPR" },
  { name: "Edge", value: "Edg" },
  { name: "Chrome", value: "Chrome" },
  { name: "Safari", value: "Safari" },
];
var os = [
  { name: "Android", value: "Android" },
  { name: "iPhone", value: "iPhone" },
  { name: "iPad", value: "Mac" },
  { name: "Macintosh", value: "Mac" },
  { name: "Linux", value: "Linux" },
  { name: "Windows", value: "Win" },
];

let broswerChecker = () => {
  //Useragent contains browser details and OS  details but we need to separate them
  let userDetails = navigator.userAgent;
  for (let i in browserList) {
    //check if the string contains any value from the array
    if (userDetails.includes(browserList[i].value)) {
      //extract browser name and version from the string
      browserDetailsRef.innerHTML = browserList[i].name || "Unknown Browser";
      break;
    }
  }
  for (let i in os) {
    //check if string contains any value from the object
    if (userDetails.includes(os[i].value)) {
      //displau name of OS from the object
      osDetailsRef.innerHTML = os[i].name;
      break;
    }
  }
};

window.onload = broswerChecker();