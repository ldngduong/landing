import { MinusIcon, PlusIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { formatPrice, type BagItem } from '@/lib/brick-pro'

type ShoppingBagProps = {
  items: BagItem[]
  onQuantityChange: (id: string, amount: number) => void
  restoreFocus: () => void
}

export function ShoppingBag({ items, onQuantityChange, restoreFocus }: ShoppingBagProps) {
  const subtotal = items.reduce((total, item) => total + item.bundle.price * item.quantity, 0)

  return (
    <DrawerContent
      className="shopping-bag"
      onCloseAutoFocus={(event) => {
        event.preventDefault()
        restoreFocus()
      }}
    >
      <DrawerHeader className="bag-header">
        <DrawerTitle>Your Bag</DrawerTitle>
        <DrawerDescription className="sr-only">Review your selected consoles and quantities.</DrawerDescription>
        <DrawerClose asChild>
          <Button type="button" size="icon" variant="ghost" aria-label="Close bag"><XIcon /></Button>
        </DrawerClose>
      </DrawerHeader>

      <div className="bag-items" data-vaul-no-drag>
        {items.length === 0 ? (
          <p className="bag-empty">Your bag is empty.</p>
        ) : (
          <ul>
            {items.map(({ id, color, bundle, quantity }) => (
              <li className="bag-item" key={id}>
                <img src={color.image} alt="" />
                <div className="bag-item-copy">
                  <p className="bag-item-name">TrimUI Brick Pro</p>
                  <p className="bag-item-variant">{color.name} · {bundle.name} · {bundle.storage}</p>
                  <div className="bag-quantity">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`Decrease quantity of ${color.name} ${bundle.name}`}
                      onClick={() => onQuantityChange(id, -1)}
                    >
                      <MinusIcon />
                    </Button>
                    <span aria-live="polite">{quantity}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`Increase quantity of ${color.name} ${bundle.name}`}
                      onClick={() => onQuantityChange(id, 1)}
                    >
                      <PlusIcon />
                    </Button>
                  </div>
                </div>
                <span className="bag-item-price">{formatPrice(bundle.price * quantity)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <DrawerFooter className="bag-footer">
        <div className="bag-subtotal">
          <span>Subtotal</span>
          <span aria-live="polite">{formatPrice(subtotal)}</span>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" className="bag-checkout" disabled={items.length === 0}>Checkout</Button>
          </DialogTrigger>
          <DialogContent className="checkout-dialog" showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Portfolio demo</DialogTitle>
              <DialogDescription>
                This store is a portfolio mockup. Purchases and payments are unavailable.
              </DialogDescription>
            </DialogHeader>
            <DialogClose asChild>
              <Button type="button" className="checkout-back">Back to bag</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </DrawerFooter>
    </DrawerContent>
  )
}
