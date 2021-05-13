const randomFolks = document.querySelector(".random-peeps");

const getData = async function (){
    const usersRequest = await fetch("https://randomuser.me/api/?results=5");
    console.log(usersRequest);
    const data = await usersRequest.json();
    console.log(data);
};
getData();