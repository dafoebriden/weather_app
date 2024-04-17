export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.favoriteLocations = data.favoriteLocations
    // TODO add additional properties if needed
  }
}
