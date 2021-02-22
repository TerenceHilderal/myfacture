"use strict";
class FormInput {
    constructor() {
        // 2 recover necessary informations
        this.form = document.getElementById('form');
        this.type = document.getElementById('type');
        this.firstName = document.getElementById('firstName');
        this.lastName = document.getElementById('lastName');
        this.address = document.getElementById('address');
        this.country = document.getElementById('country');
        this.town = document.getElementById('town');
        this.zip = document.getElementById('zip');
        this.product = document.getElementById('product');
        this.price = document.getElementById('price');
        this.quantity = document.getElementById('quantity');
        this.tva = document.getElementById('tva');
        // 3 Invocking Listener once all datas as been recover by the constructor
        this.submitFormListener();
    }
    //4 Defining submitFormListener Method
    submitFormListener() {
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    }
    // 5 defining handleFormSubmit Method
    handleFormSubmit(e) {
        e.preventDefault();
        // 7 recovering an array or undefined
        const inputs = this.inputDatas();
        // 8 if we have an array we logged values
        if (Array.isArray(inputs)) {
            const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva,] = inputs;
            console.log(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);
        }
    }
    // 6 create a private methode which returns a tuple with input on valid format
    inputDatas() {
        const type = this.type.value;
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const address = this.address.value;
        const country = this.country.value;
        const town = this.town.value;
        const zip = this.zip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const tva = this.tva.valueAsNumber;
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [
                type,
                firstName,
                lastName,
                address,
                country,
                town,
                zip,
                product,
                price,
                quantity,
                tva,
            ];
        }
        else {
            alert('les valeurs numériques doivent êtres supérieur à 0');
            return;
        }
    }
}
// submitting form
new FormInput();
