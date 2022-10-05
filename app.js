fetch("https://api.github.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("hatan var");
    }
    return response.json(); //* dataları json formatında istiyoruz
  })
  .then((data) => getDataDOM(data))
  .catch((err) => console.log(err));

const getDataDOM = (users) => {
  const usersDiv = document.querySelector(".users");
  users.forEach((user) => {
    usersDiv.innerHTML += `
    <div class="card mx-auto m-3 shadow-lg" style="width: 18rem;">
        <h1>${user.login}</h1>
        <p>${user.id}</p>
        <div class="card-body">
        <img src="${user.avatar_url}" class="card-img-top" alt=""/>
        </div>
        </div>

    `;
  });
};
