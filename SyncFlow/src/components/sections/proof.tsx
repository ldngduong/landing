import { Artwork } from '@/components/artwork'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { questions } from '@/content'
import sectionBackground from '@/assets/section-background.webp'
import faqPlus from '@/assets/faq-plus.webp'
import testimonialBackground from '@/assets/testimonial-background.webp'
import sophiaChen from '@/assets/sophia-chen.webp'
import alexMorgan from '@/assets/alex-morgan.webp'
import danielKim from '@/assets/daniel-kim.webp'

const testimonials = [
  { id: 'sophia', name: 'Sophia Chen', role: 'Head of Product', photo: sophiaChen, quote: '“AI helps our team work better and focus on what matters.”' },
  { id: 'alex', name: 'Alex Morgan', role: 'Founder & CEO', photo: alexMorgan, quote: '“AI helps our team work with ease. It has changed how we get things done.”' },
  { id: 'daniel', name: 'Daniel Kim', role: 'Co-founder & CTO', photo: danielKim, quote: '“SyncFlow keeps our team in sync with fewer meetings. Work just flows.”' },
]

export function Faq() {
  return (
    <section id="faq" className="faq section-spacing textured-section">
      <Artwork src={sectionBackground} />
      <div className="page-width faq-inner">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="questions">
          {questions.map(({ id, question, answer }) => (
            <AccordionItem className="question" key={id} value={id}>
              <AccordionTrigger className="question-trigger">
                <span>{question}</span>
                <span className="question-icon" aria-hidden="true"><img src={faqPlus} alt="" loading="lazy" /></span>
              </AccordionTrigger>
              <AccordionContent className="question-answer"><p>{answer}</p></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="page-width testimonials section-spacing">
      <h2 className="section-title">Trusted By Founders &amp; Builders</h2>
      <div className="testimonials-grid">
        {testimonials.map(({ id, name, role, photo, quote }) => (
          <figure className="testimonial" key={id}>
            <Artwork src={testimonialBackground} />
            <blockquote>{quote}</blockquote>
            <figcaption>
              <span className={`portrait portrait-${id}`}><img src={photo} alt="" loading="lazy" decoding="async" /></span>
              <span className="person"><strong>{name}</strong><span>{role}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
