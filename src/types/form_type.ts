export interface FormType {
  email: string;
  password: string;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  loggedIn: boolean;
  card: string;
  card_expiry: string;
  card_cvv: string;
}

export interface ShipmentDataType {
  name: string;
  address: string;
  creditCard: string;
  phone: string;
}
