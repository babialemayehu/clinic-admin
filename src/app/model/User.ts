export class User {
  constructor(
    public id: number,
    public worder_id: string,
    public first_name: string,
    public father_name: string,
    public grand_father_name: string,
    public gender: string,
    public role_id: number,
    public email: string,
    public phone: string,
    public isFirstTime?: number,
    public profile_pic?: string,
    public created_at?: string,
    public updated_at?: string ){}
  
}
