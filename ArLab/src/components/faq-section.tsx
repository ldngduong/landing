import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import './product-details.css'

const questions = [
  {
    id: 'games',
    question: 'Does the TrimUI Brick Pro come with copyrighted games?',
    answer: 'No. ARLAB ships hardware with clean open-source firmware and 8GB internal eMMC. You can load your own legally backed-up ROMs or homebrew titles via MicroSD.',
  },
  {
    id: 'battery',
    question: 'How long does the 5,000 mAh battery actually last?',
    answer: 'Expect 5 to 10 hours of real-world gameplay depending on screen brightness and the console system you are emulating.',
  },
  {
    id: 'screen',
    question: 'What makes the 1024×768 screen special?',
    answer: 'At 324 PPI on a 3.95-inch 4:3 panel, pixels are razor-sharp and shaders (like CRT scanlines or LCD grids) look remarkably authentic without blur.',
  },
  {
    id: 'shipping',
    question: 'What is your shipping and warranty policy?',
    answer: 'All ARLAB orders include tracked worldwide shipping and a 12-month hardware replacement warranty.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="product-details" aria-labelledby="faq-title">
      <h2 id="faq-title">FAQ</h2>
      <Accordion type="single" collapsible className="product-faq">
        {questions.map(({ id, question, answer }) => (
          <AccordionItem value={id} key={id}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent><p>{answer}</p></AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
