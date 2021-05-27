export interface IPractitioner{
    id: string,
    active: boolean,
    name: string,
    telecom: string,
    address: string,
    gender: string,
    birthDate: Date,
    photo?: string,
    communication: string[]
}