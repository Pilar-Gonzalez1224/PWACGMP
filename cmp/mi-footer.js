class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Campos Gonzalez Maria del Pilar`;
  }
}
customElements.define(
  "mi-footer", MiFooter);