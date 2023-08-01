import JsonWebToken from '../index'
declare module JsonWebToken {
  const payload: any
  const expire: string
  const token: string
  const decoded: string | jwt.JwtPayload
  export { payload, expire, token, decoded }
}
export default JsonWebToken
