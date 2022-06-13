import { Column, Container, Section } from 'rbx';
import { Fragment } from 'react';
import presentationImg from '../../assets/images/presentation.png';
import { Header } from '../../components/header';
import '../../styles/home.scss';
import { RegisterScreen } from '../auth/register';

const HomeScreen = () => {
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
                            <RegisterScreen />
                        </Column>
                        <Column size={6}>
                            <img loading='lazy' className='presentation' src={presentationImg} alt='JavaScript Notes Presentation' />
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    )
}

export { HomeScreen };