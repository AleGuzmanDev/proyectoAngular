import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Interfaz para el perfil de usuario
interface UserProfile {
    cedula: string;
    nombre: string;
    direccion: string;
    telefono: string;
    email: string;
    password?: string;
}

@Component({
    selector: 'app-datos-perfil-usuario',
    templateUrl: './datos-perfil-usuario.component.html',
    styleUrls: ['./datos-perfil-usuario.component.css']
})
export class DatosPerfilUsuarioComponent implements OnInit {
    userProfileForm: FormGroup;
    isEditMode: boolean = false;
    
    currentProfile: UserProfile = {
        cedula: '12345874',
        nombre: 'Khal Drogo',
        direccion: 'Tierras Dothraki',
        telefono: '12345852',
        email: 'khaldrogo@email.com'
    };

    constructor(private fb: FormBuilder) {
        this.userProfileForm = this.fb.group({
            cedula: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
            nombre: ['', [Validators.required]],
            direccion: ['', [Validators.required]],
            telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
            email: ['', [Validators.required, Validators.email]],
            password: [''],
            confirmPassword: ['']
        });
    }

    ngOnInit(): void {
        this.loadCurrentProfile();
    }

    loadCurrentProfile(): void {
        this.userProfileForm.patchValue({
            cedula: this.currentProfile.cedula,
            nombre: this.currentProfile.nombre,
            direccion: this.currentProfile.direccion,
            telefono: this.currentProfile.telefono,
            email: this.currentProfile.email
        });
    }

    toggleEditMode(): void {
        this.isEditMode = !this.isEditMode;
        if (this.isEditMode) {
            this.userProfileForm.enable();
        } else {
            this.userProfileForm.disable();
        }
    }

    onSubmit(): void {
        if (this.userProfileForm.valid) {
            const formValue = this.userProfileForm.value;
            
            if (formValue.password && formValue.password !== formValue.confirmPassword) {
                // Aquí podrías usar un servicio de notificación en lugar de alert
                alert('Las contraseñas no coinciden');
                return;
            }

            const updatedProfile: UserProfile = {
                cedula: formValue.cedula,
                nombre: formValue.nombre,
                direccion: formValue.direccion,
                telefono: formValue.telefono,
                email: formValue.email,
                password: formValue.password || undefined
            };

            // Aquí irían las llamadas al servicio para actualizar el perfil
            console.log('Perfil actualizado', updatedProfile);
            this.currentProfile = updatedProfile;
            this.isEditMode = false;
            this.userProfileForm.disable();
        }
    }

    deleteProfile(): void {
        if (confirm('¿Estás seguro de que deseas eliminar tu perfil?')) {
            // Aquí iría la llamada al servicio para eliminar el perfil
            console.log('Perfil eliminado');
        }
    }

    // Getters para el acceso fácil en la plantilla
    get cedulaControl() { return this.userProfileForm.get('cedula'); }
    get nombreControl() { return this.userProfileForm.get('nombre'); }
    get direccionControl() { return this.userProfileForm.get('direccion'); }
    get telefonoControl() { return this.userProfileForm.get('telefono'); }
    get emailControl() { return this.userProfileForm.get('email'); }
    get passwordControl() { return this.userProfileForm.get('password'); }
    get confirmPasswordControl() { return this.userProfileForm.get('confirmPassword'); }
}