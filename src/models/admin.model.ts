export type Player = {
    userName: string,
    userLastname: string,
    userDni: string,
    userEmail: string,
    userAddress: string,
    userPassword: string,
    playerId?: number | string,
    playerBirthdate: string,
    categoryName: string,
  }  

export type Coach = {
    coachNumber?: number,
    userName: string,
    userLastname: string,
    userDni: string,
    userEmail: string,
    userAddress: string,
    userPassword: string,
    categoryId?: number,
    roleId: number,
    clubId: number
  }

export type Category = {
  categoryId: number,
  categoryName: string,
  coach: {userName: string, userLastname: string},
  players: Player[]
}
  