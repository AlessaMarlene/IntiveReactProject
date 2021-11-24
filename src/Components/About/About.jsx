import './About.css';
import robb from '../../assets/robb.jpg';
import jennie from '../../assets/jennie.jpg';
import carl from '../../assets/carl.jpg';
import Employee from './Employee/Employee';

const About = () => {
    const employees = [
        {image:robb, name:'Robb Thomas'}, 
        {image:jennie, name: 'Jennie Jillians'}, 
        {image:carl, name:'Carl Tikes'}
    ];

    return(
        <div className='about'>
            <div className='aboutUs'>
                <h1>About Movieland</h1>
                <p>Movieland has grown throughout these 3 years to bring the latest most important news, the most anticipated releases and the most specialized information.We want this space to be the source of energy you need to satisfy your appetite for what you like the most, where the latest news from the geek world converge, be it about Cinema, Series, Anime, Comics or other curiosities.</p>     
            </div>
            <div className='aboutPeople'>
                <h1>The team</h1>
                <div className='personaItem'>
                    {employees.map((employee) => <Employee key={employee.name} personInfo={employee}/>)}
                </div>
            </div>
        </div>
    );
}

export default About;