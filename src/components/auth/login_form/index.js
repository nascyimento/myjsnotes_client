import { Button, Column, Control, Field, Help, Input, Label } from "rbx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../../../services/users";

const LoginForm = () => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [redirectToNotes, setRedirectToNotes] = useState();
    let [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            await UsersService.login({ email: email, password: password });
            setRedirectToNotes(true);
        } catch (error) {
            setError(true);
        }
    }

    useEffect(() => {
        if (redirectToNotes) {
            return navigate("/notes");
        }
    }, [redirectToNotes]);

    return (
        < >
            <Column.Group centered >
                <form onSubmit={handleSubmit}>
                    <Column size={12}>
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
                                        <Button
                                            type='submit' color="custom-purple" outlined>
                                            Login
                                        </Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help color="danger">Email or Password Invalid</Help>}
                    </Column>
                </form>
            </Column.Group>
        </ >
    );
}

export { LoginForm };
