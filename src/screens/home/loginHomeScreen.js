import { Column, Container, Section } from 'rbx';
import { Fragment } from 'react';
import presentationImg from '../../assets/images/presentation.png';
import { Header } from '../../components/header';
import '../../styles/home.scss';
import { LoginScreen } from '../auth/login';

const LoginHomeScreen = () => {
    return (
        <Fragment>
            <Header
                authOption='Sing in'
                link='/'
            />
            <Section className="home">
                <Container>
                    <Column.Group>
                        <Column size={6}>
                            <LoginScreen />
                        </Column>
                        <Column size={6}>
                            <img loading='lazy' className='presentation' src={presentationImg} alt='JavaScript Notes Presentation'/>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    )
}

export { LoginHomeScreen };