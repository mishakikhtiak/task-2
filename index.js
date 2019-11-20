
function tasker() {

const task1 = document.createElement('h2');
task1.setAttribute("id","title");
task1.innerHTML = "Task 1";
document.body.appendChild(task1);

}
tasker();

function add() {

    const button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Click");
    button.setAttribute("id", "button");
    button.setAttribute("onclick", "createElements(), this.disabled = true;");
    document.body.appendChild(button);
}
add();

function createElements(){

const div = document.createElement('div');
div.setAttribute("id", "div");

const text1 = document.createElement('div');
text1.innerHTML = "A Node is an interface from which a number of DOM types inherit, and allows these various types to be treated (or tested) similarly.";
text1.setAttribute("id", "div");
div.appendChild(text1);

const text2 = document.createElement('p');
text2.innerHTML = "Node.appendChild() Adds the specified childNode argument as the last child to the current node. If the argument referenced an existing node on the DOM tree, the node will be detached from its current position and attached at the new position.";
text1.appendChild(text2);
const task1_1 = document.getElementById('title')
task1_1.after(div);
};

function tasker2() {

const task1 = document.createElement('h2');
task1.setAttribute("id","title2");
task1.innerHTML = "Task 2";
document.body.appendChild(task1);

}
tasker2();

const logform = document.createElement('form');
logform.setAttribute("id", "LGform");
logform.setAttribute("Method", "#");
logform.setAttribute("onsubmit", "writeData(event)");

const loginput = document.createElement('input');
loginput.setAttribute("id", "loginput");
loginput.setAttribute("placeholder", "e-mail");
logform.appendChild(loginput);

const label = document.createElement('label');
label.setAttribute("for", "error");
label.setAttribute("id", "er");
logform.appendChild(label);

const passinput = document.createElement('input');
passinput.setAttribute("id", "passinput");
passinput.setAttribute("placeholder", "password");
logform.appendChild(passinput);

const passerror = document.createElement('p');
passerror.setAttribute("id", "er1");
logform.appendChild(passerror);

const subm = document.createElement('input');
subm.setAttribute("type", "submit");
subm.setAttribute("id", "sbutton");
subm.setAttribute("value", "Submit");
logform.appendChild(subm);

document.body.appendChild(logform);



let mail = document.getElementById("loginput");
mail.onchange = function mailcheck(){
	let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!reg.test(mail.value)) {
    	document.getElementById('er').innerHTML = "Incorrect e-mail. Try again.	"		
        loginput.value = "";
        mail.value = "";
	}
    else {
        document.getElementById('er').innerHTML = " ";
    }
}

let password = document.getElementById('passinput');
password.onchange = function passcheck() {
    document.getElementById('er1').innerHTML = " ";
    if (!/[a-zA-Z]/.test(password.value)) {
        document.getElementById('er1').innerHTML = "Pass must contain letters."
        passinput.value = "";
    };
    if (!/[0-9]/.test(password.value)){
        document.getElementById('er1').innerHTML += "\n Pass must contain numbers."
        passinput.value = "";
    }
    if (password.value.length < 6){
        document.getElementById('er1').innerHTML += "\n Pass must contain 6 or more symbols."
        passinput.value = "";
    }
    else if (password.value.length > 20){
        document.getElementById('er1').innerHTML += "\n Pass must contain less than 20 symbols."
        passinput.value = "";
    }
    else {
        document.getElementById('er1').innerHTML = " ";
    }
}

function writeData(event) {
    event.preventDefault();
    console.log(mail.value + " " + password.value);     
};
