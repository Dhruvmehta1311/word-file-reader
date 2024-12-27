const fileInput = document.getElementById("fileInput");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

fileInput.addEventListener("change", (e) => {
  console.log(e);
  const file = e.target.files[0];

  const reader = new FileReader();
  reader.addEventListener("load", (e) => {
    const arrayBuffer = e.target.result;

    mammoth
      .convertToHtml({ arrayBuffer: arrayBuffer })
      .then(function (result) {
        output.innerHTML = result.value; 
        copyBtn.classList.toggle("hidden");
        finalResult = output.innerText
          .replace(/\n\s*\n/g, "\n") 
          .replace(/^\s+|\s+$/gm, "")
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  reader.readAsArrayBuffer(file);

  function copyText(){
    navigator.clipboard.writeText(finalResult).then(() => {
      console.log("Copied Successfully!");
      
      copyBtn.innerText = "Text Copied Successfully!";
    }).catch(err => {
      console.error("Some error Occured", err);
    })
  }

  copyBtn.addEventListener("click", () => {
    copyText();
  })

});
