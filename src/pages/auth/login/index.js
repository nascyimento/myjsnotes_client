import { Card, Column, Container, Section, Title } from 'rbx';
import logoImg from '../../../assets/images/logo.png';
import { LoginForm } from '../../../components/auth/login_form';

const LoginScreen = () => (
    < >
        <Container className="auth">
            <Column.Group centered>
                <Column size={10}>
                    <Card>
                        <Card.Content>
                            <Section>
                                <Column.Group centered>
                                    <Column size={12}>
                                        <img loading='lazy' src={logoImg} alt='JavaScript Notes Logo' />
                                    </Column>
                                </Column.Group>

                                <Column.Group>
                                    <Column size={12}>
                                        <Title size={6} className="has-text-grey has-text-centered">
                                            Your notes on the cloud
                                        </Title>
                                    </Column>
                                </Column.Group>
                                <LoginForm />
                            </Section>
                        </Card.Content>
                    </Card>
                </Column>
            </Column.Group>
        </Container>
    </ >
);

export { LoginScreen };
