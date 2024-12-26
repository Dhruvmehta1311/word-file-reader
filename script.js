const fileInput = document.getElementById("inputFile");
const output = document.getElementById("output");

fileInput.addEventListener("change", (e) => {
  console.log(e);
  const file = e.target.files[0];

  const reader = new FileReader();
  reader.addEventListener("load", (e) => {
    const arrayBuffer = e.target.result;

    mammoth
      .convertToHtml({ arrayBuffer: arrayBuffer })
      .then(function (result) {
        output.innerHTML = result.value; // The generated HTML
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  reader.readAsArrayBuffer(file);
});
