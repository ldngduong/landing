import black from '@/assets/configurator/black.webp'
import retroGray from '@/assets/configurator/retro-gray.webp'
import white from '@/assets/configurator/white.webp'

export const consoleColors = [
  { id: 'retro-gray', name: 'Retro Gray', swatch: '#bcb6ae', image: retroGray },
  { id: 'black', name: 'Black', swatch: '#272a2f', image: black },
  { id: 'white', name: 'White', swatch: '#ecebe6', image: white },
] as const

export const storageBundles = [
  { id: 'base', name: 'Base', storage: 'No SD Card', price: 8999, popular: false },
  { id: 'standard', name: 'Standard', storage: '64GB MicroSD', price: 9999, popular: false },
  { id: 'pro', name: 'Pro', storage: '128GB MicroSD', price: 11499, popular: true },
  { id: 'collector', name: 'Collector', storage: '256GB MicroSD', price: 13499, popular: false },
] as const

export type ConsoleColor = (typeof consoleColors)[number]
export type StorageBundle = (typeof storageBundles)[number]

export type BagItem = {
  id: string
  color: ConsoleColor
  bundle: StorageBundle
  quantity: number
}

const dollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

export function formatPrice(cents: number) {
  return dollars.format(cents / 100)
}
