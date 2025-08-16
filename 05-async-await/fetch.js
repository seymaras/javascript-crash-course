fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((Response) => Response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Hata:", error));
