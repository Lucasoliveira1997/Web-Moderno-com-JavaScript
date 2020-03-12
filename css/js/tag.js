console.log('carregou')

const colors = {
    span: 'orange',
    p: 'coral',
    form: 'green',
    ol: 'navy',
    padrao: '#616161',
    get(tag) {
        tag = this[tag]
        console.log(tag)        
        return tag       
    }
}

document.querySelectorAll('.tag').forEach(element => {
    const tagName = element.tagName.toLowerCase()
  
    element.style.borderColor = colors.get(tagName)

    if(!element.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        element.insertBefore(label, element.childNodes[0])
    }
})