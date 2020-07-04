import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import getWeather from './js/getWeather'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForName);

// alert("I EXIST")
console.log("CHANGE!!");

getWeather()
    .then((res) => {
        console.log(res)
    })

export {
    checkForName,
    handleSubmit,
    getWeather
}