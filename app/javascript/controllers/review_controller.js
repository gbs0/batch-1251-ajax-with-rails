import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="review"
export default class extends Controller {
  static targets = ["form", "list"]

  static values = { position: String }
  connect() {
    // console.log("Div Principal:", this.element)
    // console.log("Lista de Reviews:", this.listTarget)
    // console.log("Formulário", this.formTarget)
  }

  send(event) {
    event.preventDefault()
    const url = this.formTarget.action
    console.log("Request em AJAX")
    fetch(url, {
      method: "POST",
      headers: { "Accept": "application/json"},
      body: new FormData(this.formTarget)
    })
    .then(response => response.json())
    .then(data => {
      if (data.item) {
        this.listTarget.insertAdjacentHTML(this.positionValue, data.item)
      }
      this.formTarget.outerHTML = data.form
    }
      
    )
  }


}
