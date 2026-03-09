function customRender(reactElement, continer) {
    const domElment = document.createElement(reactElement.type)
    domElment.innerHTML = reactElement.children
    domElment.setAttribute('href',reactElement.props.href)
    domElment.setAttribute('target',reactElement.props.target)
    continer.appendChild(domElment)
}

const reactElement = {
    type:'a',
    props: {
        href : 'https://hoogle.com',
        target: '_blank'
    },
    children : 'Click me to visit google'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
