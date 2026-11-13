import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import './product-details.css'

const specs = [
  ['Display', '3.95" IPS, 1024 × 768 (4:3), 60Hz, 324 PPI'],
  ['CPU / GPU', 'Allwinner A133P (1.8 GHz) / PowerVR GE8300'],
  ['RAM', '1GB LPDDR3'],
  ['Storage', '8GB eMMC + MicroSD slot (up to 1TB)'],
  ['Battery', '5,000 mAh Li-Po (3.7V) · 5V/2A USB-C'],
]

const boxContents = [
  'TrimUI Brick Pro Console',
  'USB-C Charging Cable',
  'Screen Protector',
  'Quick Start Manual',
]

export function TechnicalSpecs() {
  return (
    <section id="specs" className="product-details" aria-labelledby="specs-title">
      <h2 id="specs-title">Technical Specs &amp; In the Box</h2>
      <Tabs defaultValue="specs" className="spec-tabs">
        <TabsList variant="line" aria-label="Product details">
          <TabsTrigger value="specs">Full Specs</TabsTrigger>
          <TabsTrigger value="box">In the Box</TabsTrigger>
        </TabsList>
        <TabsContent value="specs">
          <table className="spec-table" aria-label="TrimUI Brick Pro specifications">
            <tbody>
              {specs.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
        <TabsContent value="box">
          <ul className="box-contents" role="list">
            {boxContents.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </TabsContent>
      </Tabs>
    </section>
  )
}
