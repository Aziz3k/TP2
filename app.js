// API à utiliser pour le travail: https://randomuser.me/api/?results=5

function fetchData(){
    fetch("https://randomuser.me/api/?results=5")
    .then(response => {
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
        })
        .then(results => {
            const html = results.results.map(user => {
               return `
               <div class="user">
               <p><img src="${user.picture.large}" alt="${user.name.first}"/></p>
               <p>Nom: ${user.name.first +'  '+user.name.last}</p>
               <p>Email: ${user.email}</p>
               </div>
               `;
            })
            .join("");
             document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
        })
        .catch(error => {
            console.log(error);
        });
    }

    fetchData();
