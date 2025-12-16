import { Button } from 'antd';
import JobSeeker from '../assets/4236127.jpg'
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      color: 'black', 
      minHeight: '100vh',
      alignItems: 'center', 
      padding: '2rem', 
      display:'flex',
      flexFlow:'column'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        flex: '0 1 auto',
        flexFlow:'row'
      }}>
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', fontSize: '1.5rem', color: '#621273' }}>CareerPilot</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to={'/login'}><Button type="primary" size="large" style={{ marginRight: '1rem', minWidth: '10rem' }}>Login</Button></Link>
          <Link to={'/signUp'}><Button type="primary" size="large" style={{ minWidth: '10rem' }}>SignUp</Button></Link>
        </div>
      </nav>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', padding:'0 1rem', flex: '1 1.5 auto'}}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{flex:'1'}}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color:'#DD6356'}}>Find the job that fits your lifestyle</h2>
            <h3 style={{ fontWeight: 'bold'}}>Connecting job seekers with great opportunities.</h3>
            <p>We are go-to destination for job seekers who want to take their career to the next level. With millions of job postings from top companies around the world, we help job seekers find the perfect opportunity to advance their careers.</p>
          </div>
          <div style={{flex:'1', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img 
              src={JobSeeker}
              alt="illustration" 
              style={{ maxWidth: '80%', maxHeight: '50vh', flex:'1.5' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

