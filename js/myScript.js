        const menu=document.querySelector('.menu')
		const exit=document.querySelector('.exit')
		const nav=document.querySelector('nav')

		menu.addEventListener('click', () =>{
			nav.classList.add('open-nav')
		})
		exit.addEventListener('click', () =>{
			nav.classList.remove('open-nav')
		})