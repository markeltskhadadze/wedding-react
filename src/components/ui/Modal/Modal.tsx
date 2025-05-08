import { Dialog } from 'radix-ui'
import { Cross2Icon } from '@radix-ui/react-icons'
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
                    {props.title && <Dialog.Title className="DialogTitle">{props.title}</Dialog.Title>}
                    {props.description && (
                        <Dialog.Description className="DialogDescription">
                            {props.description}
                        </Dialog.Description>
                    )}
                    {props.children}
                    <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                        {props.footer ? (
                            props.footer
                        ) : (
                            <Dialog.Close asChild>
                                <button className="Button green">Save</button>
                            </Dialog.Close>
                        )}
                    </div>
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