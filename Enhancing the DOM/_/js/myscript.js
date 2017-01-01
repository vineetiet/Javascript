document.getElementById('page_home');
document.body
document.getElementById('#comingtoevent');
document.getElementById('comingtoevent');
var myNode = document.getElementById('comingtoevent')
dir(myNode)
console.log(myNode.firstChild)
console.log(myNode.childNodes)

document.getElementsByTagName('li')

document.getElementById('featuredartists').getElementsByTagName('li')
var myNode = document.getElementById('featuredartists').getElementsByTagName('li')
console.log(myNode);
console.log(myNode[2]);

console.log(myNode.firstChild)

console.log(myNode[2].firstChild)


document.getElementsByClassName('artist');
document.getElementById('artistlist').getElementByClassName('artist')
document.getElementById('artistlist').getElementsByClassName('artist')

document.querySelector('article')
document.querySelectorAll('article')
document.querySelector('article').childNodes
document.querySelectorAll[1]('article').childNodes
document.querySelector('input[type=checkbox]')
document.querySelector('input[type=radio]')
document.querySelectorAll('input[type=radio]')
document.querySelectorAll('input[type=radio]')
document.querySelectorAll('#artistlist li')
document.querySelectorAll('#artistlist li>img')
document.querySelectorAll('#artistlist li>img')
document.querySelectorAll('#artistlist li>img', '#coming')
document.querySelectorAll('#artistlist li>img', '#coming img')


document.forms
document.forms[0]
document.register
document.register.myname
document.register.myname.value = 'vinet'
document.getElementsByName('subscribe')[0]
document.getElementsByName('subscribe')[1].checked ="checked'
document.getElementsByName('subscribe')[1].checked ="checked"
document.register.refrence
document.register.reference
document.register.reference.value = 'facebook'
document.register.reference.selectedIndex


var myNode = document.querySelectorAll('nav li a')[4]
console.log(myNode)
myNode.nodeType
myNode.nodeName
myNode.attributes
myNode.attributes[0]
myNode.attributes[0].nodeType
myNode.attributes[0].nodeName
myNode.firstChild
myNode.firstChild.type
myNode.firstChild = "registration"
myNode.firstChild.nodeValue = 'registration'


var myNode = document.querySelector('.artistlist li')
myNode
var myNode = document.querySelector('.artistlist li')
dir(myNode)
myNode.parentNode
myNode.parentNode.chileNodes
myNode.parentNode.fisrtChild
myNode.parentNode.firstChild.nextSibling


var myNode = document.querySelector('.artistlist li')
myNode
myNode.parentNode
myNode.parentNode.chileNodes
myNode.parentNode.children
myNode.parentNode.firstChild
myNode.parentNode.firstElementChild

var myNode = document.querySelector('.artistlist img')
myNode
myNode.src
myNode.src='images/artist/a.jpg'
myNode.id="selected"
myNode
myNode.className = "myClass"
myNode
myNode
myNode = document.querySelector('label')
myNode
myNode.htmlFor = "companyName"
myNode
myNode = document.querySelector("input[type='radio']")
myNode.checked = 0
myNode


var myNode = document.querySelector('#register label')
myNode
myNode.htmlFor
myNode.getAttribute('for')
myNode.setAttribute('for','something')
myNode
myNode.hasAttribute('something')
myNode.hasAttribute('id')
myNode.hasAttribute('for')
myNode.removeAttribute('for')
myNode


var myNode = document.querySelectorAll('featuredlists img')
myNode
var myNode = document.querySelectorAll('featuredartists img')
myNode
myNode[1]
myNode[1].dataset.task
myNode[1].dataset.task = "presenter"


var myNode = document.querySelector('.artistlist img')
myNode
myNode.clas
myNode.classList.add('faded')
myNode
myNode.classList.add('pulse')
myNode
myNode.classList.remove('pulse')
myNode
myNode.classList.remove('faded')
myNode.classList.toggle('hidden')
myNode.classList.toggle('hidden')
myNode.classList.contains('hidden')


var myNode = document.querySelector('#featuredartists img')
myNode
myNode.attributes
myNode.attributes[0]
myNode.attributes['src]
myNode.attributes.src


var myNode = document.querySelector('#abouttheevent')
myNode
myNode.innerHtml
myNode.innerHtml = 'hello'
myNode.outerHtml
myNode.insertAdjacentHTML('afterend','<p>Need to be inserted</p>')
myNode.insertAdjacentHTML('beforebegin','<p>Need to be inserted</p>')
myNode.insertAdjacentHTML('afterbegin','<p>Need to be inserted</p>')
myNode.insertAdjacentHTML('beforeend','<p>Need to be inserted</p>')


myNode = document.querySelector('#abouttheevent')
myNode
myNode = document.querySelector('#artistlist h2')
dir(myNode)
myNode.innerText
myNode.innerText = 'test'


var myElement = document.createElement('img')
myElement
myElement.src = 'images/artists/LaVonne_LaRue_tn.jpg'
myElement.alt = 'photo of LaVonne LaRue'
myElement
myElement.setAttribute('data-task','speaker')
myElement
var myNode = document.querySelectorAll('.artistlist ul li')
myNode
dir(myNode)
dir(myNode)
myNode[6].appendChild(myElement)


var pNode = document.createElement('p')
pNode
var myText = document.createTextNode('hello')
pNode.appendChild(myText)
pNode
var newNode = document.querySelector('#thevenue')
newNode
newNode.insertBefore(pNode, newNode.childNodes[5])


var myNode = document.querySelector('#featuredartists')
myNode
var replaceNode = document.querySelector('#comingtoevent')
replaceNode.parentNode.replaceChild(myNode, replaceNode)


