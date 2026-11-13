import { useState } from 'react'
import { CheckIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { consoleColors, formatPrice, storageBundles, type ConsoleColor, type StorageBundle } from '@/lib/brick-pro'
import './order-configurator.css'

type OrderConfiguratorProps = {
  onAddToBag: (color: ConsoleColor, bundle: StorageBundle, trigger: HTMLButtonElement) => void
}

export function OrderConfigurator({ onAddToBag }: OrderConfiguratorProps) {
  const [color, setColor] = useState<ConsoleColor>(consoleColors[1])
  const [bundle, setBundle] = useState<StorageBundle>(storageBundles[0])

  return (
    <section id="order" className="order-section" aria-labelledby="order-title">
      <h2 id="order-title">TrimUI Brick Pro</h2>
      <div className="order-layout">
        <div className="order-preview">
          <img src={color.image} alt={`TrimUI Brick Pro in ${color.name}`} loading="lazy" decoding="async" />
        </div>

        <div className="order-options">
          <fieldset>
            <legend>Step 1 — Select Color</legend>
            <div className="order-colors">
              {consoleColors.map((option) => (
                <label className="order-color" key={option.id}>
                  <input
                    className="sr-only"
                    type="radio"
                    name="console-color"
                    value={option.id}
                    checked={option.id === color.id}
                    onChange={() => setColor(option)}
                  />
                  <span className="order-swatch" style={{ backgroundColor: option.swatch }} aria-hidden="true" />
                  <span>{option.name}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Step 2 — Select Storage Bundle</legend>
            <div className="order-bundles">
              {storageBundles.map((option) => (
                <label className="order-bundle" key={option.id}>
                  <input
                    className="sr-only"
                    type="radio"
                    name="storage-bundle"
                    value={option.id}
                    checked={option.id === bundle.id}
                    onChange={() => setBundle(option)}
                  />
                  <span className="order-radio" aria-hidden="true"><CheckIcon size={12} /></span>
                  <span className="order-bundle-copy">
                    <span className="order-bundle-name">
                      {option.name}
                      {option.popular && <span className="order-popular">Most Popular</span>}
                    </span>
                    <span className="order-storage">{option.storage}</span>
                  </span>
                  <span className="order-price">{formatPrice(option.price)}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <Button
            type="button"
            className="order-add"
            aria-haspopup="dialog"
            onClick={(event) => onAddToBag(color, bundle, event.currentTarget)}
          >
            Add to Bag — {formatPrice(bundle.price)}
          </Button>
        </div>
      </div>
    </section>
  )
}
