export type IUser = {
    id: number
    name: string
    username: string
    email: string
  }

export type IAlbum = {
   userId: number
   id: number
   title: string
}

export type IPhoto = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}