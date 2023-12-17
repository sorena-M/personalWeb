console.log(
  "%cthis website is created by  sorena mahmoudi",
  "    color: #143fed; font-family:sans-serif; font-size:14px;"
);
console.log(
  "%c --- version : 1.3",
  "color: #cccdd1;  font-family:sans-serif; font-size:14px;"
);
console.log(
  "%c --- date : 17 Des , 2023",
  "color: #cccdd1;  font-family:sans-serif; font-size:14px;"
);

console.log(
  "%c --- project done",
  "color: rgb(11, 134, 34);  font-family:sans-serif; font-size:14px;"
);
$(document).ready(function () {
  $("div.menu>nav>ul>li>a").click(function () {
    let attr = $(this).attr("href");

    $("html,body").animate(
      {
        scrollTop: $(attr).offset().top,
      },
      600,
      "linear"
    );
  });
  $(document).scroll(function () {
    let st = $(this).scrollTop();
    if (
      st >= $("div#home").offset().top - 50 &&
      st <= $("div#about").offset().top - 100
    ) {
      $("div.menu>nav>ul>li:nth-of-type(1)>a").addClass("active");
      $("div.menu>nav>ul>li:nth-of-type(2)>a").removeClass("active");
    } else if (
      st >= $("div#about").offset().top - 100 &&
      st <= $("div#contact").offset().top - 100
    ) {
      $("div.menu>nav>ul>li:nth-of-type(1)>a").removeClass("active");
      $("div.menu>nav>ul>li:nth-of-type(3)>a").removeClass("active");
      $("div.menu>nav>ul>li:nth-of-type(2)>a").addClass("active");
    } else if (
      st >= $("div#contact").offset().top - 100 &&
      st <= $("div#gallery").offset().top - 100
    ) {
      $("div.menu>nav>ul>li:nth-of-type(2)>a").removeClass("active");
      $("div.menu>nav>ul>li:nth-of-type(4)>a").removeClass("active");
      $("div.menu>nav>ul>li:nth-of-type(3)>a").addClass("active");
    } else if (st >= $("div#gallery").offset().top - 100) {
      $("div.menu>nav>ul>li:nth-of-type(3)>a").removeClass("active");
      $("div.menu>nav>ul>li:nth-of-type(4)>a").addClass("active");
    }
  });
});
//api system
document.getElementById("postData").addEventListener("click", postData);
function postData() {
  /* {for getting the email --> not working (turned off by programmer)}
  let postEmail = document.getElementById("email").value;
  let postName = document.getElementById("name").value;
  let postMassage = document.getElementById("massage").value;
  fetch(" http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
      email: postEmail,
      name: postName,
      massage: postMassage,
    }),
    headers: { "Content-type": "aplication/json" },
  });
  */
}
//fourth page
let result2 = document.getElementById("result2");
let closeResult2 = document.getElementById("closeResult2");
let emailForm = document.getElementById("emailForm");
let nameForm = document.getElementById("nameForm");
let messageForm = document.getElementById("messageForm");
let submitEmail = document.getElementById("postData");
submitEmail.addEventListener("click", function () {
  if (
    emailForm.value != "" &&
    nameForm.value != "" &&
    messageForm.value != "" &&
    emailForm.value.includes("@") == true &&
    emailForm.value.length >= 4 &&
    nameForm.value.length >= 3
  ) {
    console.log("SUCSESS !");
    setTimeout(() => {
      result2.classList.add("block");
    }, 1000);
    setTimeout(() => {
      result2.classList.remove("block");
    }, 12000);

    closeResult2.addEventListener("click", function () {
      result2.classList.remove("block");
    });
  } else {
    console.log(2);
    console.log(emailForm.value);
    console.log(nameForm.value);
    console.log(messageForm.value);
  }
});
//more btn
let more = document.getElementById("more-ap");
let resome = document.getElementById("resome");
let backdrop = document.getElementById("backdrop");
let Close = document.getElementById("close");
more.addEventListener("click", moreFunc);
function moreFunc() {
  setTimeout(() => {
    resome.classList.add("block1");
    backdrop.classList.add("block1");
  }, 800);
}
Close.addEventListener("click", function () {
  setTimeout(() => {
    resome.classList.remove("block1");
    backdrop.classList.remove("block1");
  }, 100);
});
//AI commands
let bugReportAI = document.getElementById("bugReportAI");
let closeReport = document.getElementById("closeReport");
let submitReport = document.getElementById("submitReport");
let result = document.getElementById("result");
let closeResult = document.getElementById("closeResult");
let reporter = document.getElementById("reporter");
bugReportAI.addEventListener("click", function () {
  reporter.classList.add("block");
});
closeReport.addEventListener("click", function () {
  reporter.classList.remove("block");
});
submitReport.addEventListener("click", function () {
  reporter.classList.remove("block");
  resome.classList.remove("block1");
  backdrop.classList.remove("block1");
  result.classList.add("block");
  setTimeout(() => {
    result.classList.remove("block");
  }, 11000);
  setTimeout(() => {}, 1000);
});
closeResult.addEventListener("click", function () {
  result.classList.remove("block");
});
//talk to AI
let inputChat = document.getElementById("inputChat");
let submitChat = document.getElementById("submitChat");
submitChat.addEventListener("click", function () {
  if (inputChat.value !== "" && inputChat.value !== "GODMODESYSTEM") {
    console.log(inputChat.value);
    setTimeout(() => {
      submitChat.classList.remove("disable");
    }, 600);
    submitChat.classList.add("disable");

    document.getElementById("chatContainer").innerHTML += `
       <div class="chat mineChat">
      <img src="./img/user.jpg" alt="" />
      <p class="chat-p">you</p>
      <p class="wrap">${inputChat.value}</p>
    </div>`;
    setTimeout(() => {
      document.getElementById("chatContainer").innerHTML += `
      <div class="chat topChat">
     <img src="./img/bot.jpg" alt="" />
     <p class="chat-p">personal assistant</p>
     <p class="wrap">Blocked user from chat . refesh the page to have full acsessabilty </p>
   </div>`;
    }, 700);
  } else if (inputChat.value == "GODMODESYSTEM") {
    document.getElementById("chatContainer").innerHTML += `
       <div class="chat mineChat">
      <img src="./img/user.jpg" alt="" />
      <p class="chat-p">you</p>
      <p class="wrap">GODMODESYSTEM</p>
      <P class="wrap">{developer mode request}</P>
    </div>`;
    setTimeout(() => {
      document.getElementById("chatContainer").innerHTML += `
      <div class="chat topChat">
     <img src="./img/bot.jpg" alt="" />
     <p class="chat-p">personal assistant</p>
     <p class="wrap">the developer mode request FAILED . refesh the page to have full acsessabilty  </p>
   </div>`;
    }, 600);
  }
});
let contactBtn = document.getElementById("contactBtn");
let talkContainer = document.getElementById("talkContainer");
let closeTalkContainer = document.getElementById("closeTalkContainer");
contactBtn.addEventListener("click", function () {
  talkContainer.classList.remove("PTR");
  talkContainer.classList.add("PTL");
  backdrop.classList.add("block");
});
closeTalkContainer.addEventListener("click", function () {
  talkContainer.classList.add("PTR");
  talkContainer.classList.remove("PTL");
  backdrop.classList.remove("block");
});
let moreAI = document.getElementById("moreAI");
moreAI.addEventListener("click", function () {
  talkContainer.classList.remove("PTR");
  talkContainer.classList.add("PTL");
  backdrop.classList.add("block");
});
