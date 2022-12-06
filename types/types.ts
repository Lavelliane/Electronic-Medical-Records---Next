import { Dayjs } from "dayjs";

export interface PatientDetails {
    date: Dayjs | null;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    age: number | null;
    country: string;
}


export interface UserCredentials {
    email: FormDataEntryValue ;
    password: FormDataEntryValue ;
}
type Category = {
    name: string;
    price: number;
};

export interface Service {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price?: number;
    category?: Category[];
  }
