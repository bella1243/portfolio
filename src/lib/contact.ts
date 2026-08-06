export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface Web3FormsResponse {
  success: boolean
  message: string
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error(
      'Contact form is not configured yet. Add your Web3Forms access key to a .env file.'
      
    )
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      from_name: 'Portfolio Contact',
    }),
  })

  const result = (await response.json()) as Web3FormsResponse

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to send message. Please try again.')
  }
}
