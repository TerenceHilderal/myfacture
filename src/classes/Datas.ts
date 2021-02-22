import { HasHtmlFormat } from '../interfaces/HasHtmlFormat.js';

export class Datas implements HasHtmlFormat {
	constructor(
		private documentType: string,
		private firstName: string,
		private lastName: string,
		private address: string,
		private country: string,
		private town: string,
		private zip: number,
		private product: string,
		private price: number,
		private quantity: number,
		private tva: number,
		private date: Date,
	) {}
	htmlFormat() {
		return `<div class="row p-5">
    <div class="col-md-6">
        <h2 class="text-left">LOGO</h2>
    </div>
    <div class="col-md-6 text-right">
        <p class="font-weight-bold mb-1">xxxxxxxxxxxxxxx<span class="font-weight-normal">xxxxxxxxxx</span></p>
        <p class="font-weight-bold mb-1">Date <span class="font-weight-normal">xxxxxxxxxxxxxxx</span></p>
    </div>
</div>

<div class="row pb-5 p-5">
    <div class="col-sm-6 text-left">
        <p class="font-weight-bold">Entreprise de Toto</p>
        <p class="mb-1">22 boulevard Moe Szyslak</p>
        <p>75008 - Paris</p>
        <p class="mb-1">Tél: 00.00.00.00.00</p>
    </div>

    <div class="col-sm-6 text-right">
        <p class="font-weight-bold">Informations du client</p>
        <p class="mb-1">Mr/Mme xxxxxxxxxxxxxxx</p>
        <p class="mb-1">xxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxx</p>
    </div>
</div>`;
	}
}
