// will change to typescript in the future

export interface IProduct {
    title: string,
    price: number,
    description: string,
    photos: [string],
    type: string,
    comments?: [object],
    features: [string]
}