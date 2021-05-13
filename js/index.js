const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async function (numUsers){
    const usersRequest = await fetch(`https://randomuser.me/api/?results=${numUsers}`);
    // console.log(usersRequest);
    const data = await usersRequest.json();
    // console.log(data);
    const userResults = data.results;
    // console.log(userResults);
    displayUsers(userResults);
    console.log(numUsers);
};


const displayUsers = function(userResults){
    randomFolks.innerHTML= "";
    for (const user of userResults){
        const country = user.location.country;
        const name = user.name.first + " " + user.name.last;
        const imageUrl = user.picture.medium;
        console.log(imageUrl);
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User Avatar" />
        `;
        randomFolks.append(userDiv);
    }
    
};

getData(1);

selectUserNumber.addEventListener("change", function(e){
    const numUsers = e.target.value;
    getData(numUsers);
});

