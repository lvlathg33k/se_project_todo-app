class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this.popupCloseButton = this._popupElement.querySelector(".popup__close");
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _handleOverlayClose = (evt) => {
    if (evt.target === this._popupElement) {
      this.close();
    }
  };

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("mousedown", this._handleOverlayClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("mousedown", this._handleOverlayClose);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this.popupCloseButton.addEventListener("click", () => {
      this.close();
    });
  }
}

export default Popup;
