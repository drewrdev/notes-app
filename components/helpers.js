function templateToDOM(html) {
  const temp = document.createElement('temp')

  temp.innerHTML = html
  
  return temp.firstChild
}