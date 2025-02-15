class ToDo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  _formatChecked() {
    if (this._data.completed) {
      this._todoLabel.classList.add("todo__label__completed");
    } else {
      this._todoLabel.classList.remove("todo__label__completed");
    }
  }

  _setEventListeners() {
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      this._formatChecked();
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _setDueDate() {
    const dueDate = new Date(this._data.date);
    const todoDate = this._todoElement.querySelector(".todo__date");
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");

    todoNameEl.textContent = this._data.name;

    this._generateCheckboxEl();
    this._setEventListeners();
    this._setDueDate();
    this._formatChecked();

    return this._todoElement;
  }
}

export default ToDo;
