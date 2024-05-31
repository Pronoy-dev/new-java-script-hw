function chain() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        if (response.ok) {
          return response;
        }
      })
      .then((value) => {
        return value.json();
      })
      .then((jValue) => {
        resolve(jValue);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {
        console.log("data fetching done");
      });
  });
}

function cuttingIteam(allData) {
  return new Promise((resolve, reject) => {
    const cuttingData = allData.splice(0, 10);
    const filterIteam = cuttingData.filter((item) => {
      return item.title === "reprehenderit est deserunt velit ipsam";
    });
    resolve(filterIteam);
  });
}

function output(item) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = item;
  div.appendChild(img);
  document.body.appendChild(div);
}

// chain()
//   .then((data) => {
//     return cuttingIteam(data);
//   })
//   .then((cuttingData) => {
//     return cuttingData.splice(0, 11);
//   })
//   .then((elevenIteam) => {
//     filterItem = elevenIteam.filter((item) => {
//       return item.title === "reprehenderit est deserunt velit ipsam";
//     });
//     return filterItem;
//   })
//   .then((data) => {
//     output(data[0].thumbnailUrl);
//   });

async function callingPromise() {
  const data = await chain();
  const cuttingData = await cuttingIteam(data);

  const [item] = cuttingData;
  console.log(item);
  output(item.thumbnailUrl);
}

callingPromise();
