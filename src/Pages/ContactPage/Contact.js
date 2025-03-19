import { ContactMain, ProfileContainer, ProfileDescription, ProfileImg } from './ContactStyle';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <ContactMain>

        <ProfileContainer>
            <ProfileImg src='./profile-image.png'/>
            <ProfileDescription>
                <p className='profile-name'>Ritesh Yadav</p>

                <div className='profile-description'>
                    <p>Bridging Design & Development | Crafting Seamless Digital Experiences<br/>
                    Engineer. Designer. Problem Solver</p>
                    
                    <p>riteshyadavknp1999@gmail.com | +91 9452730213</p>
                </div>

                <div style={{width: "120px", height: "1px", background: "#19180880"}}></div>

                <div>
                    <div>
                        <a href='https://github.com/RiteshYadavCNB'>
                            <img style={{width: "30px"}} src='./github-mark.png' alt='github-link'/>
                        </a>
                    </div>

                    <div>
                        <a href='https://www.linkedin.com/in/riteshyadavknp/'>
                            <img style={{width: "24px"}} src='./linkedin-logo.png' alt='github-link'/>
                        </a>
                    </div>

                    <div>
                        <a href='mailto:riteshyadavknp1999@gmail.com'>
                            <img style={{width: "30px"}} src='./gmail-logo.jpg' alt='github-link'/>
                        </a>
                    </div>

                </div>

            </ProfileDescription>
        </ProfileContainer>

    </ContactMain>
  )
}

export default Contact;