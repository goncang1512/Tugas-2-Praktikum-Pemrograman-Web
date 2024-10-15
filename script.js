const root = document.getElementById("root");

root.classList.add("container");

// Section website
const containerAll = document.createElement("section");
containerAll.classList.add("hero-section");
root.appendChild(containerAll);

// Container Header
const containerHeader = document.createElement("div");
containerHeader.style.width = "100%";
containerAll.appendChild(containerHeader);

// Header website
const headerOne = document.createElement("h2");
headerOne.innerText = "Tugas-2 Praktikum Pemrograman Web";
headerOne.classList.add("headerOne");
headerOne.style.padding = "20px 0px";
headerOne.style.textAlign = "center";
containerHeader.appendChild(headerOne);

// HR website
const line = document.createElement("hr");
line.style.width = "100%";
containerHeader.appendChild(line);

// Container Hero
const containerHero = document.createElement("div");
containerHero.classList.add("container-hero");
containerAll.appendChild(containerHero);

// Container Input
const formContainer = document.createElement("form");
formContainer.classList.add("form-input");
containerHero.appendChild(formContainer);

const inputData = [
  {
    type: "text",
    name: "Nama",
    label: "Nama:",
  },
  {
    type: "number",
    name: "NIM",
    label: "NIM:",
  },
  {
    type: "text",
    name: "KOM",
    label: "KOM:",
  },
  {
    type: "file",
    name: "foto",
    label: "Upload Photo:",
  },
];

inputData.map((data) => {
  // div input
  const containerInput = document.createElement("div");
  containerInput.classList.add("label-input");

  // Input
  const input = document.createElement("input");
  input.setAttribute("placeholder", data.name);
  input.setAttribute("id", data.name);
  input.setAttribute("name", data.name);
  input.setAttribute("type", data.type);

  // Label input
  const labelInput = document.createElement("label");
  labelInput.innerText = data.label;
  labelInput.setAttribute("for", data.name);

  containerInput.append(labelInput, input);
  formContainer.appendChild(containerInput);
});

const buttonSubmit = document.createElement("button");
buttonSubmit.innerText = "Submit";
buttonSubmit.classList.add("button-submit");
buttonSubmit.setAttribute("type", "submit");
formContainer.appendChild(buttonSubmit);

// RESULT FORM
document.querySelector(".form-input").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  if (
    formData.get("foto") &&
    formData.get("NIM") &&
    formData.get("Nama") &&
    formData.get("KOM")
  ) {
    const divImg = document.createElement("div");
    const image = document.createElement("img");
    divImg.appendChild(image);
    divImg.classList.add("div-image");

    window.alert("Form berhasil di submit!");
    const previousResult = containerHero.querySelector(".container-result");
    if (previousResult) {
      containerHero.removeChild(previousResult);
    }

    const file = formData.get("foto");
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        image.setAttribute("src", `${reader.result}`);
      };

      reader.readAsDataURL(file);
    }

    const res = [
      {
        label: "Nama:",
        data: formData.get("Nama"),
      },
      {
        label: "NIM:",
        data: formData.get("NIM"),
      },
      {
        label: "KOM:",
        data: formData.get("KOM").toUpperCase(),
      },
    ];

    const containerResult = document.createElement("div");
    containerResult.classList.add("container-result");

    const buttonClose = document.createElement("button");
    buttonClose.innerText = "x";
    buttonClose.classList.add("button-close");

    containerResult.appendChild(buttonClose);

    // Close Result
    buttonClose.addEventListener("click", () => {
      const previousResult = containerHero.querySelector(".container-result");
      containerHero.removeChild(previousResult);
    });

    image.classList.add("img-result");
    containerResult.appendChild(divImg);

    const containerData = document.createElement("div");
    containerData.classList.add("div-data");

    res.map((data) => {
      const paragraf = document.createElement("p");
      paragraf.innerText = `${data.label} ${data.data}`;
      containerData.appendChild(paragraf);
    });

    containerResult.appendChild(containerData);
    containerHero.appendChild(containerResult);

    form.reset();
  } else {
    window.alert("Data tidak lengkap!");
    return null;
  }
});
