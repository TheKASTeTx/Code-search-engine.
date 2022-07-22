const menuBtn = document.querySelector('.menu-btn');
const exitNav = document.querySelector('.nav-mobile__exit');
const navMobile = document.querySelector('.nav-mobile');
const navLinks = document.querySelectorAll('.nav-mobile__item')

const formLog = document.querySelector('.form-log');
const joinBtn = document.querySelector('.join-btn');
const logBtn = document.querySelector('.log');
const registerBtn = document.querySelector('.register');
const exitFormLog = document.querySelector('.form__exit');

const inputName = document.querySelector('.username');
const inputPassword = document.querySelector('.password');
const usernameError = document.querySelector('.username-error-text');
const passwordError = document.querySelector('.password-error-text');

const userPhoto = document.querySelector('.user-photo');
const username = document.querySelector('.logged-user');

const infoBtn = document.querySelector('.info__btn');
const info = document.querySelector('.info');
const offers = document.querySelector('.offers');
const addOffer = document.querySelector('.offers__btn');

const offer = document.querySelector('.create-offer');
const exitOfferCreator = document.querySelector('.create-offer__exit');
const offerName = document.querySelector('.create-offer__name');
const offerPrice = document.querySelector('.create-offer__price');
const offerCode = document.querySelector('.create-offer__code');
const offerLink = document.querySelector('.create-offer__link');

const inputNameOffer = document.querySelector('.create-offer__name');
const inputPriceOffer = document.querySelector('.create-offer__price');
const inputCodeOffer = document.querySelector('.create-offer__code');
const inputLinkOffer = document.querySelector('.create-offer__link');
const offerBtn = document.querySelector('.create-offer__send');
const offersBox = document.querySelector('.offers__box');
const notActiveLink = document.querySelector('.offersLinkDesktop')
document.getElementById("footer__year").innerHTML = new Date().getFullYear();

const benefitsInput = document.querySelector('.benefits__input')
const benefitsBtn = document.querySelector('.benefits__btn')
const benefitsScore = document.querySelector('.benefits__score')

const calculateBenefit = () => {
	if (benefitsInput.value<=0) {
		benefitsScore.innerHTML = `Wydatki nie mogą być ujemne 😅`
	}	
	else if(benefitsInput.value!== '' && benefitsInput.value>0) {
		let sum = ((benefitsInput.value * 0.245) *52).toFixed(2)
		const pennies = sum.split(".")[1]
		const total = sum.split(".")[0]

		if(pennies==='00') {
			benefitsScore.innerHTML = `Oszczędzasz aż ${total} złotych rocznie!`
		}else{
			benefitsScore.innerHTML = `Oszczędzasz aż ${total} złotych i ${pennies} groszy rocznie!`
		}
		
	}
	benefitsInput.value=''
};

const openNav = () => {
	navMobile.style.transform = 'translate(0,0)';
	navMobile.style.position = 'sticky'
	navLinks.forEach(item => {
		item.addEventListener('click', ()=>{
			closeNav()
		})
	})
};

const closeNav = () => {
	navMobile.style.transform = 'translate(0,-1550px)';
	navMobile.style.position = 'absolute'
};

const openLog = () => {
	formLog.style.display = 'block';
};
const closeLog = () => {
	formLog.style.display = 'none';
	usernameError.textContent = '';
	passwordError.textContent = '';
	inputName.value = '';
	inputPassword.value = '';
};
const checkUsername = () => {
	if (inputName.value === '') {
		usernameError.textContent = 'Wpisz nazwę!';
	} else if (inputName.value.length < 6 || inputName.value.length > 12) {
		usernameError.textContent = 'Nazwa powinna mieć od 6 do 12 znaków!';
	} else {
		usernameError.textContent = '';
		return true;
	}
};

const checkPassword = () => {
	if (inputPassword.value === '') {
		passwordError.textContent = 'Wpisz hasło!';
	} else if (inputPassword.value.length < 7) {
		passwordError.textContent = 'Hasło powinna mieć minimum 8 znaków!';
	} else {
		passwordError.textContent = '';
		return true;
	}
};

const checkForm = (e) => {
	e.preventDefault();
	checkPassword();
	checkUsername();
	if (checkPassword() && checkUsername()) {
		joinBtn.style.display = 'none';
		username.textContent = inputName.value;
		userPhoto.style.display = 'block';
		infoBtn.innerHTML = 'Zobacz promocję!';
		notActiveLink.classList.remove('notactive')
		closeLog();
	}
};

const checkUser = () => {
	if (infoBtn.innerHTML === 'Zobacz promocję!') {
		offers.style.display = 'flex';
		info.style.display = 'none';
	} else {
		openLog();
	}
};

const openOfferCreator = () => {
	offer.style.display = 'flex';
};
const closeOfferCreator = () => {
	offer.style.display = 'none';
	inputNameOffer.value = '';
	inputPriceOffer.value = '';
	inputCodeOffer.value = '';
	inputLinkOffer.value = '';
};

const createOffer = () => {
	if (
		inputNameOffer.value !== '' &&
		inputPriceOffer.value !== '' &&
		inputCodeOffer.value !== '' &&
		inputLinkOffer.value !== ''
	) {
		let div = document.createElement('div');
		let pTitle = document.createElement('p');
		let pPrice = document.createElement('p');
		let pCode = document.createElement('p');
		let link = document.createElement('a');
		
		div.classList.add('offers__item');
		pTitle.classList.add('offers__title');
		pPrice.classList.add('offers__price');
		pCode.classList.add('offers__code');
		pTitle.classList.add('offers__title');
		link.classList.add('offers__link');
		
		pTitle.textContent=`${inputNameOffer.value}`
		pPrice.textContent=`${inputPriceOffer.value} PLN`
		pCode.textContent=`${inputCodeOffer.value}`
		link.innerHTML='Ustrzel promocje <i class="fa-solid fa-cart-arrow-down"></i>'
		link.setAttribute('target', '_blank')
		link.href = inputLinkOffer.value

		div.appendChild(pTitle);
		div.appendChild(pPrice);
		div.appendChild(pCode);
		div.appendChild(link);

		offersBox.prepend(div);

		closeOfferCreator()

	}
};






menuBtn.addEventListener('click', openNav);
exitNav.addEventListener('click', closeNav);
joinBtn.addEventListener('click', openLog);
infoBtn.addEventListener('click', checkUser);
exitFormLog.addEventListener('click', closeLog);
logBtn.addEventListener('click', checkForm);
addOffer.addEventListener('click', openOfferCreator);
exitOfferCreator.addEventListener('click', closeOfferCreator);
offerBtn.addEventListener('click', createOffer);
benefitsBtn.addEventListener('click', calculateBenefit)
