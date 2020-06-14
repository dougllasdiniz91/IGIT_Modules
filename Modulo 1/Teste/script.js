let globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
let inputName = null;
let isEditing = false;
let currentIndex = null;

//verifica se a pagina html esta totalment carregada
window.addEventListener('load', () => {
  inputName = document.querySelector('#inputName');
  preventFormSubmit();
  activateInput();
  render();
});

function preventFormSubmit() {
  //evita que o form seja recarregado
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

//foca no input
function activateInput() {
  // add valores no array
  function insertName(newName) {
    //globalNames.push(newName);
    globalNames = [...globalNames, newName];
  }

  function updateName(newName) {
    globalNames[currentIndex] = newName;
  }
  //funcao para pegar valor do evento
  function handleTyping(event) {
    if (event.key === 'Enter') {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value);
      }

      render();
      isEditing = false;
      clearInput();
    }
  }

  inputName.focus();
  inputName.addEventListener('keyup', handleTyping);
}

//redenriza o as informações
function render() {
  //funcao para crias os botões de deletar
  function createDeleteButton(index) {
    //deleta os nomes quando clica no botão
    function deleteName() {
      //globalNames.splice(index, 1);
      //refatoração do codigo
      globalNames = globalNames.filter((_, i) => i !== index);
      render();
    }

    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'X';
    button.addEventListener('click', deleteName);
    return button;
  }
  function createSpan(name, index) {
    function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }

    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;
    span.addEventListener('click', editItem);
    return span;
  }
  var divNames = document.querySelector('#names');

  //criar ul
  //fazer n li's, conforme tamanho de globalNames
  var ul = document.createElement('ul');
  divNames.innerHTML = '';

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
}

//funçaão para limpar o valor do input
function clearInput() {
  inputName.value = '';
  inputName.focus();
}
