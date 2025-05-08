import { Dialog } from 'radix-ui'
import { Cross2Icon } from '@radix-ui/react-icons'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import type { ReactNode } from 'react'
import './Modal.css'

type ModalProps = {
    title?: string
    description?: string
    children: ReactNode
    trigger: ReactNode
    footer?: ReactNode
}

function Modal(props: ModalProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>{props.trigger}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    {!props.title && (
                        <Dialog.Title asChild>
                            <VisuallyHidden>Modal</VisuallyHidden>
                        </Dialog.Title>
                    )}
                    {props.description && (
                        <Dialog.Description className="DialogDescription">
                            {props.description}
                        </Dialog.Description>
                    )}
                    {props.children}
                    {props.footer && (
                        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                            {props.footer}
                        </div>
                    )}
                    <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default Modal