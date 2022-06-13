import { Button, Column, Control, Field, Help, Input, Label } from "rbx";
import { Fragment, useEffect, useState } from 'react';
import UsersService from '../../../services/users';

const UsersEditForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState(null);

    const initializeUser = async () => {
        const user = await JSON.parse(localStorage.getItem('user'));
        setName(user['name']);
        setEmail(user['email']);
    }

    useEffect(() => {
        initializeUser()
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        
        try {
            await UsersService.update({ email: email, name: name });
            console.log('123')
            setStatus("success")
        } catch (err) {
            setStatus("error")
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Control>
                        <Label className="has-text-grey">Full Name</Label>
                        <Input
                            type="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            name="name"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Label className="has-text-grey">Email</Label>
                        <Input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            name="email"
                        />
                    </Control>
                </Field>

                <Field>
                    <Control>
                        <Column.Group>
                            <Column className="has-text-right">
                                <Button color="custom-purple" outlined>Update</Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                {status === "error" &&
                    <Help color="danger">Problem in update</Help>
                }
                {status === "success" &&
                    <Help color="primary">Updated with success</Help>
                }
            </form>
        </Fragment>
    )
}

export { UsersEditForm };

