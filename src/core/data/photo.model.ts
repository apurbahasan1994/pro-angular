export interface Photo {
    name: string,
    created: Date,
    src: string
}
export interface PhotoEvent {
    type: PhotoEventType,
    photo: Photo
}
export enum PhotoEventType {
    SELECT,
    REMOVE
}