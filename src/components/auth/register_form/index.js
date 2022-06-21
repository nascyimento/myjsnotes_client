import { Button, Column, Control, Field, Help, Input, Label } from "rbx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../../../services/users";
import "../../../styles/auth.scss";

const RegisterForm = () => {

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [redirectToLogin, setRedirectToLogin] = useState(false);
    let [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let user = await UsersService.register({ name: name, email: email, password: password });
            setRedirectToLogin(true);
        } catch (error) {
            setError(true);
        }
    }

    if (redirectToLogin) {
        return navigate('/login');
    }

    return (
        < >
            <Column.Group centered>
                <form onSubmit={handleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Name:</Label>
                            <Control>
                                <Input
                                    type="name"
                                    required
                                    name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input
                                    type="email"
                                    required
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password:</Label>
                            <Control>
                                <Input
                                    type="password"
                                    required
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <Button color="custom-purple" outlined>Sign in</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help color="danger" size={10}>Email already in use</Help>}
                    </Column>
                </form>
            </Column.Group>
        </ >
    );
}

export { RegisterForm };

