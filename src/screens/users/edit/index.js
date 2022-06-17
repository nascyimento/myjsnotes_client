import { Card, Column, Container, Section, Title } from "rbx";
import { Fragment } from 'react';
import { HeaderLogged } from "../../../components/header_logged";
import { UsersDelete } from "../../../components/users/user_delete";
import { UsersEditForm } from "../../../components/users/user_edit_form/index.js";
import { UsersEditFormPassword } from "../../../components/users/user_edit_password_form";
import "../../../styles/users.scss";


const UserEditScreen = () => (
    <Fragment>
        <HeaderLogged />
        <Section size="medium" className="users">
            <Container>
                <Column.Group centered className="users-edit">
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-left">
                            Informações Pessoais
                        </Title>
                        <Card>
                            <Card.Content>
                                <UsersEditForm />
                                You'll be redirected to login
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>

                <Column.Group centered className="users-edit">
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-left">
                            Password
                        </Title>
                        <Card>
                            <Card.Content>
                                <UsersEditFormPassword />
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
                <Column.Group centered>
                    <Column size={4} className="has-text-right">
                        <UsersDelete />
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export { UserEditScreen };

