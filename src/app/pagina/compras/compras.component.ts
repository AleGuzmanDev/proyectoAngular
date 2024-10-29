import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface LocationPrices {
  [key: string]: number;
}

interface Event {
  id: number;
  name: string;
  band: string;
  description: string;
  location: string;
  date: string;
  image: string;
}

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  bookingForm!: FormGroup;
  paymentForm!: FormGroup;
  verificationForm!: FormGroup;

  showPaymentModal: boolean = false;
  showVerificationModal: boolean = false;
  discount: number = 0;
  isFirstPurchase: boolean = true;
  selectedPaymentMethod: string = ''; 
  cartItems: any[] = [];

  selectedEvent: Event = {
    id: 1,
    name: 'Concierto de Rock',
    band: 'CURA',
    description: 'La Mejor Banda de Rock de la Región',
    location: 'Salón de Eventos Norte',
    date: '15 de Septiembre de 2024',
    image: '/img/event-image.jpg' // Ruta absoluta para asegurar carga
  };

  locations: LocationPrices = {
    'VIP': 80000,
    'Platea': 60000,
    'General': 50000
  };

  constructor(private fb: FormBuilder) {
    this.initializeForms();
  }

  private initializeForms(): void {
    this.bookingForm = this.fb.group({
      location: ['VIP', Validators.required],
      quantity: [2, [Validators.required, Validators.min(1)]],
      promoCode: ['']
    });

    this.paymentForm = this.fb.group({
      cardHolder: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });

    this.verificationForm = this.fb.group({
      verificationCode: ['', Validators.required]
    });
  }

  getSubtotal(): number {
    const location = this.bookingForm.get('location')?.value as string;
    const quantity = this.bookingForm.get('quantity')?.value as number;
    return this.locations[location] * quantity;
  }

  calculateTotal(): number {
    const subtotal = this.getSubtotal();
    const discountAmount = subtotal * this.discount;
    const firstPurchaseDiscount = this.isFirstPurchase ? subtotal * 0.15 : 0;
    return subtotal - discountAmount - firstPurchaseDiscount;
  }

  updateQuantity(change: number): void {
    const currentQuantity = this.bookingForm.get('quantity')?.value ?? 1;
    const newQuantity = Math.max(1, currentQuantity + change);
    this.bookingForm.patchValue({ quantity: newQuantity });
  }

  applyPromoCode(): void {
    const promoCode = this.bookingForm.get('promoCode')?.value;
    if (promoCode === 'CURA2024') {
      this.discount = 0.20;
    } else {
      this.discount = 0;
    }
  }

  addToCart(): void {
    const item = {
      event: this.selectedEvent,
      location: this.bookingForm.get('location')?.value,
      quantity: this.bookingForm.get('quantity')?.value,
      subtotal: this.getSubtotal()
    };
    this.cartItems.push(item);
    alert('Añadido al carrito');
  }

  openPaymentModal(): void {
    if (this.cartItems.length > 0) {
      this.showPaymentModal = true;
    } else {
      alert('Agrega productos al carrito antes de generar la orden de compra');
    }
  }

  selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
  }

  isPaymentFormValid(): boolean {
    return this.paymentForm.valid && this.selectedPaymentMethod !== '';
  }

  verifyPurchase(): void {
    if (this.isPaymentFormValid()) {
      this.showPaymentModal = false;
      this.showVerificationModal = true;
      console.log("Modal de verificación activado"); // Diagnóstico
    }
  }

  closePaymentModal(): void {
    this.showPaymentModal = false;
    this.paymentForm.reset();
    this.selectedPaymentMethod = '';
  }

  closeVerificationModal(): void {
    this.showVerificationModal = false;
    this.verificationForm.reset();
  }

  confirmVerification(): void {
    if (this.verificationForm.valid) {
      alert("Compra confirmada con éxito");
      this.closeVerificationModal();
    } else {
      alert("Por favor, ingrese el código de verificación");
    }
  }

  getLocationOptions(): string[] {
    return Object.keys(this.locations);
  }

  getLocationPrice(location: string): string {
    return this.locations[location].toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP'
    });
  }

  getDiscountAmount(): number {
    const subtotal = this.getSubtotal();
    return subtotal * this.discount;
  }

  getFirstPurchaseDiscount(): number {
    if (!this.isFirstPurchase) return 0;
    const subtotal = this.getSubtotal();
    return subtotal * 0.15;
  }
}
