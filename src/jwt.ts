import jwt from 'jsonwebtoken'

export default class JsonWebToken {
  private privateKey: string
  private publicKey: string

  constructor(privateKey: string, publicKey: string) {
    this.privateKey = privateKey
    this.publicKey = publicKey
  }
  public signToken(payload: any, expire?: string): string {
    const token = jwt.sign(payload, this.publicKey, {
      algorithm: 'RS256',
      expiresIn: expire ? expire : '1h',
    })
    return token
  }

  public verifyToken(token: string): string | jwt.JwtPayload {
    const decoded = jwt.verify(token, this.privateKey, { algorithms: ['RS256'] })
    return decoded
  }
}
