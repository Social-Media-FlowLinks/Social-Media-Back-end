import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    
    createUser(userName: string, password: string, phoneNumber: string) {
        throw new Error('Method not implemented.');
    }

    isActive(userName, password, activeWithPhoneNumber) {
        throw new Error('Method not implemented.');
    }
}
