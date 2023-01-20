import { Injectable } from '@angular/core';

interface User {
  firstname: string;
  lastname: string;
  password: string;
  grade: number;
  age: number;
  birthdate: Date;
  studyfield: string;
  gender: string;
  weight: number;
  disabled: boolean;
  lastedit: Date;
  trophies: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  public users: User[] = [
    {
      firstname: 'Viliam',
      lastname: 'Polak',
      password: '666',
      grade: 1,
      age: 18,
      birthdate: new Date(2004, 9, 11, 0, 0, 0, 0),
      studyfield: 'programovanie',
      gender: 'muz',
      weight: 75,
      disabled: true,
      lastedit: new Date(20204, 9, 11, 0, 0, 0, 0),
      trophies: 'None',
    },
  ];
}
