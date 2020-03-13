console.log('carregou')

const colors = {
    span: 'orange',
    p: 'coral',
    form: 'green',
    ol: 'navy',
    padrao: '#616161',
    header: 'brown',
    footer: 'red',
    nav: 'yellow',
    main: 'orange',
    get(tag) {
        console.log(tag)        
        return this[tag] ? this[tag] : this.padrao
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