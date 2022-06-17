import { Column, Container, Section, Title } from 'rbx';
import { Fragment } from 'react';
import { Link, Navigate } from 'react-router-dom';
import presentationImg from '../../assets/images/presentation.png';
import { Header } from '../../components/header';
import '../../styles/home.scss';

const HomeScreen = () => {

    if (localStorage.getItem('jwtoken'))
        Navigate({ to: '/notes' })

    return (
        <Fragment>
            <Header
                authOption='Login'
                link='/login'
            />
            <Section className="home">
                <Container>
                    <Column.Group>
                        <Column size={6}>
                            <Title size={2} spaced className="has-text-white">
                                Create notes easily and access when you wants on the cloud
                            </Title>
                            <Link to={'/register'} className="button is-outlined is-white is-large">
                                <strong>Register for free Now</strong>
                            </Link>
                            <Title size={4} spaced className="has-text-white ">
                                Or
                            </Title>
                            <Link to={'/login'} className="button is-outlined is-white is-large">
                                <strong>Login</strong>
                            </Link>
                        </Column>
                        <Column size={6}>
                            <img loading='lazy' src={presentationImg} alt='JavaScript Notes Presentation' />
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    )
}

export { HomeScreen };
