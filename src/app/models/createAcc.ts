export interface CreateAccData {
        cpf: string,
        name: string,
        telephone: string,
        email: string,
        typeAccount: "CURRENT",
        login: {
          username: string,
          password: string
  
        }
      
}