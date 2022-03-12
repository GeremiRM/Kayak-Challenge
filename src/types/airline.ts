import { Alliance } from "./alliance";

export interface Airline {
  site: string;
  code: string;
  alliance: Alliance;
  phone: string;
  name: string;
  usName: string | null;
  __clazz: string;
  defaultName: string | null;
  logoURL: string;
}
