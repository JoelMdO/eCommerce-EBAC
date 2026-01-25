export interface UserData {
  username: string;
  email: string;
  password: string;
  password2: string;
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
