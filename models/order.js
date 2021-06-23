export default class Order {
  constructor(id, items, totalAmout, createdAt) {
    this.id = id
    this.items = items
    this.totalAmout = totalAmout
    this.createdAt = createdAt
  }
}
