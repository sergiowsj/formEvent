function save() {
  let name = document.querySelector('input[name="name"]').value
  let programing = document.querySelector('select[name="programing"]').value
  alert(`Nome: ${name}\nPrograma em: ${programing}`)
}
