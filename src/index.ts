import jwt from 'jsonwebtoken'

class JsonWebToken {
  private readonly privateKey: string
  private readonly publicKey: string

  constructor(privateKey: string, publicKey: string) {
    this.privateKey = privateKey
    this.publicKey = publicKey
  }
  public signToken(payload: any, expire?: string): string {
    const token = jwt.sign(payload, this.privateKey, {
      algorithm: 'RS256',
      expiresIn: expire ? expire : '1h',
    })
    return token
  }

  public verifyToken(token: string): string | jwt.JwtPayload {
    const decoded = jwt.verify(token, this.publicKey, { algorithms: ['RS256'] })
    return decoded
  }
}

export default JsonWebToken
