import { useState, type FormEvent } from 'react'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { profile } from '../../data/profile'
import { submitContactForm } from '../../lib/contact'

const emptyForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      await submitContactForm(formData)
      setStatus('success')
      setFormData(emptyForm)
      setTimeout(() => setStatus('idle'), 4000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      )
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'View my work', href: profile.github },
    { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
  ]

  return (
    <section id="contact" className="section-padding relative" aria-label="Contact">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to connect? I'd love to hear from you"
          icon={Mail}
          animated={false}
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4 sm:space-y-6 min-w-0">
            {contactInfo.map((info) => (
              <div key={info.label} className="glass-card flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="p-2.5 sm:p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0">
                  <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-amber-400 transition-colors font-medium break-all sm:break-normal"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-200 font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-card space-y-4 sm:space-y-5 min-w-0"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            {status === 'error' && (
              <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="btn-primary w-full disabled:opacity-70"
            >
              {status === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message Sent!
                </>
              ) : status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
