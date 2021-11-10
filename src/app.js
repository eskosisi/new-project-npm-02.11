import { Girlsdata } from './girlsdata'
import './styles/index.css'
import './styles/anketa.css'
import { doc } from 'prettier'

const form = document.getElementById('form')
const user_city = document.getElementById('user_city')
const input_name = document.getElementById('name')
const input_surname = document.getElementById('surname')
const input_age = document.getElementById('age')
const input_phone = document.getElementById('phone')
const input_weight = document.getElementById('weight')
const input_height = document.getElementById('height')
const submit_button = document.querySelector('.accept_button')
const user_bust = document.getElementById('user_bust')

const arrayOfInputs = [user_city, input_name, input_surname, input_age, input_phone, input_weight, input_height]

if(submit_button) {
    submit_button.addEventListener('click', function testFunc(event) {
        event.preventDefault()
        arrayOfInputs.map(el => arrayOfInputs.push(`My ${el.id} is ${el.value}`));
        arrayOfInputs.splice(0, 7);
        console.log(arrayOfInputs)

        

        const girlsinfo = {
            text: {
                city: user_city.value.trim(),
                name: input_name.value.trim(), 
                surname: input_surname.value.trim(),
                age: input_age.value.trim(),                
                weight: input_weight.value.trim(),
                height: input_height.value.trim(),
                phone: input_phone.value.trim(),
                bust: user_bust.value.trim(),
            },
            date: new Date().toJSON()
        }

        Girlsdata.create(girlsinfo).then(()=>{
            console.log('Works!')
            user_city.value = '0'
            input_name.value = ''
            input_surname.value = ''
            input_age.value = ''
            input_weight.value = ''
            input_height.value = ''
            input_phone.value = ''
            user_bust.value = '0'
        })

        
        
    })
    
}