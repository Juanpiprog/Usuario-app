import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.addUser(this.user);
    this.user = new User(); // Resetea el formulario después de añadir el usuario
  }
}