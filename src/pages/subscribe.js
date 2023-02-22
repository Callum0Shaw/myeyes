export async function post({request}) {
  const data = await request.json()

  const mailUrl = 'https://connect.mailerlite.com/api/subscribers'
  const requestBody = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: import.meta.env.MAILER_LITE
  }
}