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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti aut excepturi sunt animi odit, laboriosam corrupti ipsam. Tempore porro placeat voluptatem alias vel modi quam a ex aliquam accusamus?
                </p>
            </div>
            <div className='aboutPeople'>
                <h1>The team</h1>
                <div className='personaItem'>
                    {employees.map((employee) => <Employee personInfo={employee}/>)}
                </div>
            </div>
        </div>
    );
}

export default About;