import { cli } from 'cli'

export class Message {
  static fromJSON (buffer) {
    return new Message(JSON.parse(buffer.toString()))
  }

  constructor ({ username, command, contents }) {
    this.username = username
    this.command = command
    this.contents = contents
  }

  toJSON () {
    return JSON.stringify({
      username: this.username,
      command: this.command,
      contents: this.contents
    })
  }

  toString () {
    if (this.command === 'disconnect') {
      cli.chalk(['red'])
      return (this.username + ' ' + this.command + ' ' + this.contents)
    } else if (this.command === 'broadcast') {
      cli.chalk(['blue'])
      return (this.username + ' ' + this.command + ' ' + this.contents)
    } else if (this.command === 'echo') {
      cli.chalk(['magenta'])
    } else {
      return this.log(`Command <${this.command}> was not recognized`)
    }
    return (this.username + ' ' + this.command + ' ' + this.contents)
  }
}
