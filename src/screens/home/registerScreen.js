import { Column, Container, Section, Title } from 'rbx';
import { Fragment, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import presentationImg from '../../assets/images/presentation.png';
import { Header } from '../../components/header';
import '../../styles/home.scss';
import { RegisterScreen } from '../auth/register';


const RegisterHomeScreen = (props) => {

    useEffect(() => {
        let content = document.querySelectorAll('.presentation-item');
        content[0].classList.add('show')
        let next = 1;
        let prev = 0;
        setInterval(() => {
            next = next % content.length;
            content[prev].classList.remove('show')
            content[next].classList.add('show')
            prev = next;
            next++
        }, 4500);
    }, []);

    if (localStorage.getItem('jwtoken'))
        Navigate({ to: '/notes' })

    return (
        <Fragment>
            <Header
                authOption='Log in'
                link='/login'
            />
            <Section className="home">
                <Container>
                    <Column.Group>
                        <Column size={6} className="auth-form">
                            <RegisterScreen />
                        </Column>
                        <Column size={6} className='presentation'>
                            <div className="presentation-container">
                                <img loading='lazy' className='presentation-item' src={presentationImg} alt='JavaScript Notes Presentation' />
                                <Title size={2} spaced className="has-text-white presentation-item">
                                    Create notes easily and access when you wants on the cloud
                                </Title>
                            </div>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    )
}

export { RegisterHomeScreen };

