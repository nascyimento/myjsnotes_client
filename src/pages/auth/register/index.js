import { Card, Column, Container, Section, Title } from 'rbx';
import React, {   } from 'react';
import logoImg from '../../../assets/images/logo.png';
import { RegisterForm } from '../../../components/auth/register_form';

const RegisterScreen = () => (
    < >
        <Container className="auth">
            <Column.Group centered>
                <Column size={10}>
                    <Card>
                        <Card.Content>
                            <Section>
                                <Column.Group centered>
                                    <Column size={12}>
                                        <img loading='lazy' src={logoImg} alt='JavaScript Notes Logo'/>
                                    </Column>
                                </Column.Group>

                                <Column.Group>
                                    <Column size={12}>
                                        <Title size={6} className="has-text-grey has-text-centered">
                                            Create notes easily and access when you wants on the cloud
                                        </Title>
                                    </Column>
                                </Column.Group>
                                <RegisterForm />
                            </Section>
                        </Card.Content>
                    </Card>
                </Column>
            </Column.Group>
        </Container>
    </ >
);

export { RegisterScreen };

