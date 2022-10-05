//* backend veri çekme işlemleri
//* 1. ajax
//* 2. promise()
//* 3.Fetch()
//* 4.Async-Await

//* syntax : fetch("url").then((res)=>...json()).then((data)=>...)
// fetch("https://api.github.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
//   .catch((error) => console.log(error));
//*zorunlu hata fırlatma : //Error Handling
//*syntax : throw new Error("...")

fetch("https://api.github.com/user")
  .then((response) => {
    if (!response.ok) {
      throw new Error("bi şeyler yanlış gitti");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
