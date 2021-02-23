// import { HasRender } from '../interfaces/HasRender.js';
export class Display {
    constructor(container, hiddenDiv, btnPrint) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.btnPrint = btnPrint;
        this.formContainer = document.getElementById('form-container');
    }
    render(docObj, docType) {
        const htmlString = docObj.htmlFormat();
        this.container.innerHTML = htmlString;
        if (docType === 'invoice') {
            this.btnPrint.innerText = 'Print invoice';
        }
        else {
            this.btnPrint.innerText = 'Print estimate';
        }
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = '';
    }
}
