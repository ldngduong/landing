import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export type LandingAction = { type: 'request' | 'demo'; title: string }

function RequestForm({ title }: { title: string }) {
  const [result, setResult] = useState<'saved' | 'error' | null>(null)

  function saveRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('email')
    if (typeof email !== 'string') return

    try {
      localStorage.setItem(`syncflow-request:${title}`, email.trim())
      setResult('saved')
    } catch {
      setResult('error')
    }
  }

  if (result === 'saved') {
    return <p role="status" className="rounded-xl bg-white/65 p-4">Your request was saved on this device.</p>
  }

  return (
    <form className="grid gap-3" onSubmit={saveRequest}>
      <label htmlFor="request-email" className="font-semibold">Email address</label>
      <Input id="request-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
      {result === 'error' && <p role="alert">Browser storage is unavailable. Your request could not be saved.</p>}
      <Button type="submit" className="mt-1">Save request</Button>
    </form>
  )
}

export function LandingDialog({ action, close, restoreFocus }: {
  action: LandingAction | null
  close: () => void
  restoreFocus: () => void
}) {
  return (
    <Dialog open={action !== null} onOpenChange={(open) => { if (!open) close() }}>
      {action && (
        <DialogContent onCloseAutoFocus={(event) => {
          event.preventDefault()
          restoreFocus()
        }}>
          <DialogTitle className="pr-10 text-2xl font-bold">{action.title}</DialogTitle>
          {action.type === 'demo' ? (
            <>
              <DialogDescription>Connect tools and automate repetitive work from one shared workspace.</DialogDescription>
              <ol className="ml-5 grid list-decimal gap-2">
                <li>Choose a trigger to start a workflow.</li>
                <li>Add AI actions and integrations for the steps your team repeats.</li>
                <li>Follow updates from any device as the workflow runs.</li>
              </ol>
            </>
          ) : (
            <>
              <DialogDescription>Enter your email to save your request on this device.</DialogDescription>
              <RequestForm key={action.title} title={action.title} />
            </>
          )}
        </DialogContent>
      )}
    </Dialog>
  )
}
