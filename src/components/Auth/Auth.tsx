import { Form } from 'radix-ui'
import { useState } from 'react'
import groupImg from '../../assets/Group.png'
import './Auth.css'

function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function sendUserData() {
        console.log(email, password)
    }

    return (
        <div className="flex">
            <div className="flex items-center justify-center w-[548px] h-[600px] auth-background">
                <img src={groupImg} className="w-[220px] h-[220px] z-20"/>
            </div>
            <div className="flex flex-col gap-16 w-[548px] h-[600px] p-[62px]">
                <p className="text-[#49516F] font-bold text-[20px] uppercase text-center">Добро пожаловать в
                    talklif!</p>
                <Form.Root className="flex flex-col gap-8">
                    <Form.Field name="email" className="flex flex-col gap-2">
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="text-[#49516F] font-bold text-base">Email</Form.Label>
                            <Form.Message match="valueMissing">
                                Please enter your email
                            </Form.Message>
                            <Form.Message match="typeMismatch">
                                Please provide a valid email
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                value={email}
                                className="h-[54px] w-[420px] rounded-[14px] border-solid border-[1px] border-[#FF385C] py-4 px-6"
                                type="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field name="password" className="flex flex-col gap-2">
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="text-[#49516F] font-bold text-base">Пароль</Form.Label>
                            <Form.Message match="typeMismatch">
                                Please provide a valid password
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                value={password}
                                className="h-[54px] w-[420px] rounded-[14px] border-solid border-[1px] border-[#FF385C] py-4 px-6"
                                type="password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Control>
                    </Form.Field>
                </Form.Root>
                <button
                    className="bg-[#FF385C] h-[54px] w-[420px] rounded-xl py-4 px-8 text-white text-base font-medium"
                    style={{boxShadow: '0px 16px 32px 0px #FF385C3D'}}
                    onClick={sendUserData}
                >
                    Отправить
                </button>
            </div>
        </div>
    )
}

export default Auth