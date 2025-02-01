class URLBuilder {
    constructor() {
      this.protocol = ""; // Default protocol
      this.hostname = "";
      this.port = "";
      this.path = "";
      this.queryParams = new Map();
    }
    setProtocol(protocol) {
      this.protocol = protocol;
      return this;
    }
    setHostname(hostname) {
      this.hostname = hostname;
      return this;
    }
    setPort(port) {
      this.port = port;
      return this;
    }
    setPath(path) {
      this.path = path.startsWith("/") ? path : `/${path}`;
      return this;
    }
    addQueryParam(key, value) {
      this.queryParams.set(key, value);
      return this;
    }
    build() {
      let url = `${this.protocol}://${this.hostname}`;
      if (this.port) {
        url += `:${this.port}`;
      }
      if(this.path){
          url += this.path;
      }
      if (this.queryParams.size > 0) {
        const queryString = Array.from(this.queryParams)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join("&");
        url += `?${queryString}`;
      }
      return url;
    }
  }

  const myUrl = new URLBuilder()
  .setProtocol("https")
  .setHostname("example.com")
  .setPort(8080)
  .setPath("/api/users")
  .addQueryParam("name", "John Doe")
  .addQueryParam("age", 25)
  .build();

console.log(myUrl);

  