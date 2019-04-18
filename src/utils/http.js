class Http {
  constructor(http) {
    this.http = http
    this.data = []
  }
  async SendPost(url, methodName, para) {
    const response = await this.http.post(url, para)
    this.data = response.data.Data
    console.log(`${methodName}: `, this.data)
    return this.data
  }
}
export default Http
